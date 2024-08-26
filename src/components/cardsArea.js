"use client";

// import Card from "./card";
import { React, useEffect, useState } from "react";
import dynamic from 'next/dynamic';

// Example of dynamically importing a component
const DynamicComponent = dynamic(() => import('../components/card'), {
  loading: () => <p>Loading...</p>,
  ssr: false, // Disable server-side rendering
});


export default function CardsArea({filterOption, sortOption, month, searchKey}) {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState({});
  const [hasMore, setHasMore] = useState(true);



useEffect(() => {
  const fetchCards = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/cards?location=${filterOption}&sort=${sortOption}&month=${month}&search=${searchKey}`);
      console.log(searchKey)
      if (!response.ok) {
        throw new Error('Failed to fetch cards');
      }
      const data = await response.json();
      setCards(data);
      setHasMore(data.length > 0);
    } catch (error) {
      console.error("Error fetching cards:", error);
      setCards([]);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  fetchCards();
}, [filterOption, sortOption, month,searchKey]);

 
  
  return (
    <div className="h-auto w-full flex bg-white flex-col justify-center pt-5">
      <div className="flex justify-center flex-col mx-auto">
        {cards.map((card, index) => (
          <DynamicComponent key={index} 
            tourName={card.tourname}
            tourCity={card.touradd}
            ratings={card.tourratings}
            departDate={card.departdate}
            arrivalDate={card.arrivaldate}
            location={card.departlocation}
            price={card.price}
            days={card.days}
            type={card.type}
            btnLink={card.btnlink}
            makkahHotel={card.makkahhotel}
            madinahHotel={card.madinahhotel}
            makkahHotel2={card.makkahhotel2}
            madinahHotel2={card.madinahhotel2}
            stars={card.stars}
            makkahDist={card.makkahdist}
            madinahDist={card.madinahdist}
          />
        ))}
        {loading && <p>Loading...</p>}
        {!loading && !hasMore && <p>End</p>}
      </div>
    </div>
  );
 };
