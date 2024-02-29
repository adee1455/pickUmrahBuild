"use client";

import {React,useEffect,useState} from "react";
import TourTitle from "./detailsPage";
import { Divide } from "lucide-react";
import { PricingBox } from "./pricingPage";
import DetailsPage from "./detailsPage";





export default function TitleParent(){
    useEffect(() => {
        console.log("Hello");
        getData();
      }, []);
      const [data, setData] = useState([]);
      
      const getData = async () => {
        const response = await fetch("/api/cards", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const info = await response.json();
        console.log(info);
        setData(info);
      };
    
      
    return(

       <div className="h-auto w-full">
        {/* {data.map((content) =>  */}

        <div className="flex md:flex-row flex-col ">
            <div className="w-[73%]">
                 <DetailsPage/>
            </div>

            <div className="">
                 <PricingBox/>
            </div>
        
        </div>
        
        {/* )} */}

       
        

       </div>

    
    )
};
