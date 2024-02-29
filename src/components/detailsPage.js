"use client";
import Card from "./card";
import {React,useEffect,useState} from "react";
import CardsArea from "./cardsArea";
import { data } from "autoprefixer";





export default function DetailsPage({tourName,tourCity,departDate,arrivalDate,location,price,days}){
   
    return(
    <div className="font-sans">
        <div className="text-black md:pt-5 pt-8 flex lg:w-[72%] md:w-full sm:w-full   ">
              <div className="flex flex-col  ">
                        <span className="font-bold md:text-4xl text-2xl text-left pl-5  md:pt-0 "> Al Khalid Tours & Travels </span>
                        <span className="font-normal md:text-sm text-xs text-left pl-5 flex  ">Byculla, Mumbai , Maharashtra, India <Ratings/></span>
                </div>
        </div>

        <div className=" md:w-[68%] w-[100%] flex flex-row  md:justify-between justify-normal pt-10 pl-5">
            <div className="bg-black rounded-lg text-white  h-12 justify-center p-7 font-bold text-lg flex items-center">15 Days</div>

            <div className="flex flex-row text-lg ">
                               <span className="pl-3 flex items-center font-bold text-md"><svg className="h-4 pr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2H248.4c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48H542.8c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z"/></svg>28 Feb 2024 &nbsp; |  </span>
                               <span className="pl-3 flex items-center font-bold text-md"><svg className="h-4 pr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M.3 166.9L0 68C0 57.7 9.5 50.1 19.5 52.3l35.6 7.9c10.6 2.3 19.2 9.9 23 20L96 128l127.3 37.6L181.8 20.4C178.9 10.2 186.6 0 197.2 0h40.1c11.6 0 22.2 6.2 27.9 16.3l109 193.8 107.2 31.7c15.9 4.7 30.8 12.5 43.7 22.8l34.4 27.6c24 19.2 18.1 57.3-10.7 68.2c-41.2 15.6-86.2 18.1-128.8 7L121.7 289.8c-11.1-2.9-21.2-8.7-29.3-16.9L9.5 189.4c-5.9-6-9.3-14.1-9.3-22.5zM32 448H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm96-80a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128-16a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg> 13 March 2024</span>
            </div>

            <div className="flex items-center">
                <span className="font-bold text-lg ">Departure Location: Mumbai</span>
            </div>
        </div>

        <div className="text-black pt-10">
            <span className="text-xl font-bold ">Package Inclusions</span>
            
        </div>






    </div>
    )
};


export  function Ratings(){
    return(
<div class="flex items-center pl-4">
    <svg class="w-4 h-4 text-yellow-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <p class="ms-2 text-sm font-bold text-gray-900 dark:text-black">4.95</p>
    <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
    <a href="#" class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-black">73 reviews</a>
</div>
    )
};