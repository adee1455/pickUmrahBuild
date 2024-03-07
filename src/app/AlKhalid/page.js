"use client";

import Title from "../../components/heroTitle";
import Navbar from "../../components/navbar";


import {React,useEffect,useState} from "react";
import Page from "../../components/page";
import Footer from "../../components/footer";
import { Hotel } from "lucide-react";
import Hotels from "../../components/hotels";
import PriceBox from "../../components/priceBox";






export default function page() {

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
const selectedTour = data.find(item => item.tourname === "AL-KHALID TOURS" );

    return (
      <div>
        <div className="border-b border-[lightgray]">
         <Navbar/>
         </div>
         {selectedTour && (
          <>
        <Page
        tourName={selectedTour.tourname}
        tourAddr={selectedTour.touradd}
        stars={selectedTour.tourstars}
        reviews={selectedTour.reviews}
        departDate={selectedTour.departdate}
        arrivalDate={selectedTour.arrivaldate}
        location={selectedTour.location}
        twoShare={selectedTour.twoshare}
        threeShare={selectedTour.threeshare}
        fourShare={selectedTour.fourshare}
        childBed={selectedTour.childbed}
        infant={selectedTour.infant}
        linethrough={selectedTour.linethrough}
        days={selectedTour.days}
        makkahHotel={selectedTour.makkahhotel}
        madinahHotel={selectedTour.madinahhotel}
        makkahHotelstars={selectedTour.makkahhotelstars}
        madinahHotelstars={selectedTour.madinahhotelstars}
        makkahPic={selectedTour.makkahpic}
        madinahPic={selectedTour.madinahpic}
        makkahDist={selectedTour.makkahhoteldist}
        madinahDist={selectedTour.madinahhoteldist}
        makkahMap={selectedTour.makkahmap}
        madinahMap={selectedTour.madinahmap}
        /> 
          

        </>

        )}
        <Footer/>
         

          
      </div>
    )
    }
