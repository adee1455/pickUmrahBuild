"use client";
import Title from "../../components/heroTitle";
import Navbar from "../../components/navbar";
import {React,useEffect,useState} from "react";
// import Page from "../../components/tourPage";
import Footer from "../../components/footer";
import { Hotel } from "lucide-react";
import Hotels from "../../components/hotels";
import PriceBox from "../../components/priceBox";
import dynamic from 'next/dynamic';

// Example of dynamically importing a component
const DynamicComponent = dynamic(() => import('../../components/tourPage'), {
  loading: () => <p>Loading...</p>,
  ssr: false, // Disable server-side rendering
});
export default function AlKhalidPage() {

  useEffect(() => {
    console.log("Hello");
    getData();
}, []);
const [data, setData] = useState([]);

const getData = async () => {
    const response = await fetch("/api/tours", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
    const info = await response.json();
    console.log(info);
    setData(info);
};

// Define your condition for selecting a specific item
const selectedTour = data.find(item => item.tour === "alkhalid2" );

    return (
      <div>
        <div className="border-b border-[lightgray]">
         <Navbar/>
         </div>
         {selectedTour && (
          <>
        <DynamicComponent
        tourName={selectedTour.tourname}
        tourAddr={selectedTour.touradd}
        stars={selectedTour.tourstars}
        reviews={selectedTour.reviews}
        departDate={selectedTour.departdate}
        arrivalDate={selectedTour.arrivaldate}
        location={selectedTour.departlocation}
        twoShare={selectedTour.twoshare}
        threeShare={selectedTour.threeshare}
        fourShare={selectedTour.fourshare}
        childBed={selectedTour.childbed}
        infant={selectedTour.infant}
        linethrough={selectedTour.linethrough}
        days={selectedTour.days}
        makkahHotel={selectedTour.Makkahhoteltour}
        madinahHotel={selectedTour.Madinahhoteltour}
        makkahHotelstars={selectedTour.makkahhotelstars}
        madinahHotelstars={selectedTour.madinahhotelstars}
        makkahPic={selectedTour.makkahpic}
        madinahPic={selectedTour.madinahpic}
        makkahDist={selectedTour.makkahdist}
        madinahDist={selectedTour.madinahdist}
        makkahMap={selectedTour.makkahmap}
        madinahMap={selectedTour.madinahmap}
        /> 

        </>
        )}

        <Footer/>
         

          
      </div>
    )
    }
  
  
