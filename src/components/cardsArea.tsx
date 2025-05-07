"use client";

import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('./card'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

interface Tour {
  id: number;
  recommended: string;
  tourname: string;
  touradd: string;
  departdate: string;
  arrivaldate: string;
  departlocation: string;
  price: string;
  days: number;
  type: string;
  stars: number;
  makkahdist: string;
  madinahdist: string;
  monthyear: string;
  touradd2: string;
  tourstars: number;
  reviews: number;
  twoshare: string;
  threeshare: string;
  fourshare: string;
  childbed: string;
  infant: string;
  Makkahhoteltour: string;
  Madinahhoteltour: string;
  makkahhotelstars: number;
  madinahhotelstars: number;
  makkahpic: string;
  madinahpic: string;
  makkahmap: string;
  madinahmap: string;
}

interface CardsAreaProps {
  filterOption: string;
  sortOption: string;
  month: string;
  searchKey: string;
}

export default function CardsArea({ filterOption, sortOption, month, searchKey }: CardsAreaProps) {
  const [cards, setCards] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/cards?location=${filterOption}&sort=${sortOption}&month=${month}&search=${searchKey}`);
        if (!response.ok) {
          throw new Error('Failed to fetch cards');
        }
        const data = await response.json();
        const parsedData: Tour[] = data.map((item: any) => ({
          ...item,
          // departdate: new Date(item.departdate).toLocaleDateString(),
          // arrivaldate: new Date(item.arrivaldate).toLocaleDateString(),
        }));
        setCards(parsedData);
      } catch (error: any) {
        console.error("Error fetching cards:", error);
        setCards([]);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, [filterOption, sortOption, month, searchKey]);

  return (
    <div className="h-auto w-full flex bg-white flex-col justify-center pt-5">
      <div className="flex justify-center flex-col mx-auto">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          cards.map((card) => (
            <DynamicComponent key={card.id} tour={card} />
          ))
        )}
      </div>
    </div>
  );
}
