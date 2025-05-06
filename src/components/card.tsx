"use client";

import { useRouter } from "next/navigation";
import { Provider } from "@lyket/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ShareButton from "./shareButton";

    interface Tour {
        id: number;
        recommended: string;
        tourName: string;
        tourAddr: string;
        departDate: string;
        arrivalDate: string;
        departLocation: string;
        price: string;
        days: number;
        type: string;
        btnLink: string;
        stars: number;
        makkahDist: string;
        madinahDist: string;
        monthYear: string;
        tourAddr2: string;
        tourStars: number;
        reviews: number;
        twoShare: string;
        threeShare: string;
        fourShare: string;
        childBed: string;
        infant: string;
        makkahHotelTour: string;
        madinahHotelTour: string;
        makkahHotelStars: number;
        madinahHotelStars: number;
        makkahPic: string;
        madinahPic: string;
        makkahMap: string;
        madinahMap: string;
      }

interface CardProps {
    Tour: CardProps;
  }
  
export default function Card({ tour }: { tour: Tour }) {
  const router = useRouter();
  const link = `/tourPage/${tour.id}`;

  return (
    <Provider apiKey="pt_1bccdd0061064d58e0d77f201e496b">
      <div className="sm:w-7xl w-auto h-54 bg-white shadow-md flex flex-row border border-black font-sans mx-auto mt-1 mb-10">
        <div className="w-7 bg-[#E6D096] border-black border-r">
          <div><span></span></div>
        </div>

        <div id="insideMainDiv" className="flex sm:flex-row flex-col w-full">
          <div id="leftMain" className="border-r border-black w-full">
            {/* Tour Name Section */}
            <div className="flex sm:flex-row flex-row border-b border-black">
              <div className="pl-4 sm:pr-52 pr-2 py-2">
                <h2 className="font-bold sm:text-2xl text-xl">{tour.tourName}</h2>
                <span className="sm:text-lg text-md">{tour.tourAddr}</span>
                <span className="flex flex-row sm:w-72 w-auto sm:text-md text-md">
                  Tour Ratings: {tour.stars}★
                </span>
              </div>
              {/* Days for small screens */}
              <div className="p-2 sm:px-8 px-4 sm:border-r sm:hidden border-black">
                <span className="flex flex-col text-[#e3c066] font-extrabold sm:text-2xl text-2xl sm:justify-normal justify-center pt-2">
                  <span className="text-center">{tour.days}</span>
                  <span className="text-center">Days</span>
                </span>
              </div>
            </div>

            {/* Dates and Location */}
            <div className="flex sm:flex-row flex-col py-3 pr-2 border-b border-black">
              <div className="flex flex-row">
                <span className="pl-3 flex items-center font-bold text-md">
                  📅 {tour.departDate}
                </span>
                <span className="pl-3 flex items-center font-bold text-md">
                  🚍 {tour.arrivalDate}
                </span>
              </div>
              <div className="sm:pt-0 pt-3">
                <span className="sm:pt-1 sm:pl-44 pl-3 text-md">
                  Departure Location: <span className="font-bold">{tour.departLocation}</span>
                </span>
              </div>
            </div>

            {/* Pricing and Type */}
            <div className="flex">
              <div className="flex flex-col sm:p-5 py-5 sm:w-64 w-auto sm:px-0 px-3 border-r border-black">
                <span className="sm:text-sm text-xs text-center">Starting Price (per Person)</span>
                <span className="text-center font-bold text-[#0B9F11] sm:text-4xl text-3xl pt-2">
                  {tour.price}
                </span>
              </div>
              <div className="p-5 sm:px-8 px-4 sm:border-r sm:flex hidden border-black">
                <span className="flex flex-col text-[#e3c066] font-extrabold sm:text-2xl text-xl pt-2">
                  <span className="text-center">{tour.days}</span>
                  <span className="text-center">Days</span>
                </span>
              </div>
              <div className="p-5 sm:px-9 px-0 flex flex-col sm:text-lg text-sm sm:border-r border-black">
                <span className="text-center sm:w-auto w-32">Package Type:</span>
                <span className="text-center pt-2 font-bold sm:text-2xl text-xl text-[#e3c066]">
                  {tour.type}
                </span>
              </div>
              {/* VIEW DETAILS Button */}
              <div className="sm:flex hidden">
                <button
                  onClick={() => router.push(link)}
                  className="bg-black text-white sm:text-xl text-md sm:w-[157px] w-[130px] sm:h-[112px] h-[106px] sm:p-5 p-2 font-bold"
                >
                  VIEW DETAILS
                </button>
              </div>
            </div>
          </div>

          {/* Right Side Hotels Info (only on large screens) */}
          <div id="rightMain" className="p-4 lg:flex md:hidden hidden flex-col lg:visible">
            <div className="flex flex-col pt-2">
              <span className="text-center text-lg flex items-center ml-5">
                <img src="hotel.svg" className="pr-3 h-8" alt="Hotel Icon" />
                <span className="pt-1">Hotel in Makkah</span>
              </span>
              <span className="text-center pt-3 font-bold text-2xl w-64">{tour.makkahHotelTour}</span>
              <span className="text-center pt-4 text-lg font-bold flex items-center justify-center">
                🏨 {tour.makkahHotelStars}
              </span>
              <span className="text-center pt-2 text-sm text-gray-600">Distance: {tour.makkahDist}</span>
            </div>

            <div className="flex flex-col pt-8">
              <span className="text-center text-lg flex items-center ml-5">
                <img src="hotel.svg" className="pr-3 h-8" alt="Hotel Icon" />
                <span className="pt-1">Hotel in Madinah</span>
              </span>
              <span className="text-center pt-3 font-bold text-2xl w-64">{tour.madinahHotelTour}</span>
              <span className="text-center pt-4 text-lg font-bold flex items-center justify-center">
                🕌 {tour.madinahHotelStars}
              </span>
              <span className="text-center pt-2 text-sm text-gray-600">Distance: {tour.madinahDist}</span>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}
