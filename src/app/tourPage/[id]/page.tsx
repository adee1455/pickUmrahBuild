"use client";
import React, { useEffect, useState } from 'react';
import { Tour } from '../../../types/index.js'; // Ensure you have the correct path to your Tour type
import { Button } from '../../../components/ui/button.jsx';
import { useRouter } from 'next/navigation';
import PriceBox from '../../../components/priceBox.js'
import Hotels from '../../../components/hotels.js'


interface TourPageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: TourPageProps) {
  const { id } = React.use(params);

  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const router = useRouter();

  const fetchTour = async () => {
    try {
      const response = await fetch(`/api/tourPage?id=${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data && typeof data === 'object' && data.id) {
        setTour(data as Tour);
      } else {
        throw new Error('Invalid data format received.');
      }
    } catch (err) {
      console.error('Error fetching tour data:', err);
      setError('Unable to load tour information. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchTour();
    }
  }, [id]);

  if (loading) {
    return <div>Loading tour information...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    router.push(`/tourPage/${id}`);
  };

  return (
    (<div className="max-w-8xl lg:mx-20 md:mx-10 mx-3  md:py-12 py-5 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="lg:grid lg:grid-cols-3 ">
        <div className="md:col-span-2 col-span-3 max-w-8xl">
          <h1 className="md:text-4xl text-[26px] font-bold text-black">{tour?.tourName}</h1>
          <p className="md:text-md text-sm md:w-full w-64 text-gray-500">
            {tour?.tourAddr}, Maharashtra, India <span className="text-yellow-600 md:pl-5 pl-1">★ {tour?.stars}</span> · {tour?.reviews} reviews
          </p>
          <div className="mt-6 max-w-3xl flex lg:flex-row md:flex-row flex-row md:justify-around   items-center font-semibold space-x-2">
            <div className="">
                <Button className="bg-black text-white">{tour?.days} Days</Button>
            </div>
          <div className="flex md:flex-row  flex-col md:text-lg md:pl-3 pl-4 text-xs md:space-x-4">
            <div className="flex items-center flex-row  space-x-2">
              <div className="flex items-center ">
              <CalendarIcon className="text-gray-600" />
              <span className="pl-3 w-full">{tour?.departDate}</span>  
              </div>
              <span className="px-0">|</span> 
              <div className="flex items-center ">
              <PlaneTakeoffIcon className="text-gray-600 ml-2" />
              <span className="pl-3 w-full">{tour?.arrivalDate}</span>
              </div>
            </div>

            <div className="  ">
                <p className="md:text-lg text-sm md:pl-3">Departure Location: {tour?.departLocation}</p>
            </div>
          </div>
          </div>

          <div className="lg:hidden md:block block pt-10">
        <PriceBox 
      fourShare={tour?.fourShare}
      twoShare={tour?.twoShare} 
      threeShare={tour?.threeShare} 
      childBed={tour?.childBed} 
      infant={tour?.infant} 
      tourName={tour?.tourName}
        />
        </div>

          <div className="mt-8">
            <h2 className="md:text-3xl text-xl md:pt-10 pt-8 font-semibold">Package Inclusions</h2>
            <ul className="mt-4 text-lg space-y-2">
              <li className="flex items-center space-x-4">
                <CheckIcon className="text-green-500" />
                <span>Air Fare </span>
              </li>
              <li className="flex items-center space-x-4">
                <TicketIcon className="text-gray-600" />
                <span>Visa with Insurance</span>
              </li>
              <li className="flex items-center space-x-4">
                <HotelIcon className="text-gray-600" />
                <span>Accomodation</span>
              </li>
              <li className="flex items-center space-x-4">
                <BusIcon className="text-gray-600" />
                <span>Round Trip Transfers in Groups</span>
              </li>
              <li className="flex items-center space-x-4">
                <ChurchIcon className="text-gray-600" />
                <span>Ziarat</span>
              </li>
              <li className="flex items-center space-x-4">
                <UtensilsIcon className="text-gray-600" />
                <span>Full Board Meals</span>
              </li>
              <li className="flex items-center space-x-4">
                <ShirtIcon className="text-gray-600" />
                <span className={""}>Laundry</span>
              </li>
             
              <li className="flex items-center space-x-4">
                <BriefcaseIcon className="text-gray-600" />
                <span className="line-through">TCS</span>
              </li>
              <li className="flex items-center space-x-4">
                <CarTaxiFrontIcon className="text-gray-600" />
                <span className="line-through">Individual Transfer</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="lg:block md:hidden hidden">
      
        <PriceBox
        fourShare={tour?.fourShare}
        twoShare={tour?.twoShare} 
        threeShare={tour?.threeShare} 
        childBed={tour?.childBed} 
        infant={tour?.infant} 
        tourName={tour?.tourName}
        />
        
        </div>
      
      <div className="w-full">
        <Hotels
         makkahHotel={tour?.makkahHotelTour}
         madinahHotel={tour?.madinahHotelTour}
         makkahHotelstars={tour?.makkahHotelStars}
         madinahHotelstars={tour?.madinahHotelStars}
         makkahPic={tour?.makkahPic}
         madinahPic={tour?.madinahPic}
         makkahDist={tour?.makkahDist}
         madinahDist={tour?.madinahDist}
         makkahMap={tour?.makkahMap}
         madinahMap={tour?.madinahMap}
        />
      </div>
       
      </div>
    </div>)
  );
}



function CalendarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className="lg:w-[25px] md:w-[23px] w-[20px] h-[26px]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>)
  );
}


function PlaneTakeoffIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className="lg:w-[25px] md:w-[23px] w-[20px] h-[26px]"
      
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M2 22h20" />
      <path
        d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z" />
    </svg>)
  );
}


function CheckIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>)
  );
}


function TicketIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>)
  );
}


function HotelIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
      <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16" />
      <path d="M8 7h.01" />
      <path d="M16 7h.01" />
      <path d="M12 7h.01" />
      <path d="M12 11h.01" />
      <path d="M16 11h.01" />
      <path d="M8 11h.01" />
      <path d="M10 22v-6.5m4 0V22" />
    </svg>)
  );
}


function BusIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M8 6v6" />
      <path d="M15 6v6" />
      <path d="M2 12h19.6" />
      <path
        d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
      <circle cx="7" cy="18" r="2" />
      <path d="M9 18h5" />
      <circle cx="16" cy="18" r="2" />
    </svg>)
  );
}


function ChurchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2" />
      <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
      <path d="M18 22V5l-6-3-6 3v17" />
      <path d="M12 7v5" />
      <path d="M10 9h4" />
    </svg>)
  );
}


function UtensilsIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>)
  );
}


function ShirtIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>)
  );
}


function BriefcaseIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>)
  );
}


function CarTaxiFrontIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M10 2h4" />
      <path
        d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" />
      <path d="M7 14h.01" />
      <path d="M17 14h.01" />
      <rect width="18" height="8" x="3" y="10" rx="2" />
      <path d="M5 18v2" />
      <path d="M19 18v2" />
    </svg>)
  );
}



