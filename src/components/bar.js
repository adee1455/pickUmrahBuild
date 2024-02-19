"use client";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Calendar } from "primereact/calendar";


import { PrimeReactProvider } from "primereact/api";

import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

export default function Bar() {
  const [date, setDate] = useState(null);
  // return (
  //   <div className="max-w-4xl mx-auto border rounded-md border-black justify-between items-center dark:bg-white bg-white  shadow-lg p-2 flex flex-row">
     
  //     <Select className="flex-1  ">
  //       <SelectTrigger id="location" className="text-black sm:text-lg text-xs sm:w-1/4 w-[27%]  ">
  //         <SelectValue placeholder="Departure Location" />
  //       </SelectTrigger>
  //       <SelectContent position="popper">
  //         <SelectItem value="issue1">Mumbai</SelectItem>
  //         <SelectItem value="issue2">Delhi</SelectItem>
  //         <SelectItem value="issue3">Aurangabad</SelectItem>
  //       </SelectContent>
  //     </Select>
     

     
  //     <svg className="h-5 ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16H368c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z"/></svg>
  //     <React.StrictMode>
  //       <PrimeReactProvider>
  //         <div className="card flex justify-content-center mx-3 ">
  //           <Calendar
  //             className="text-black"
  //             placeholder=" Month"
  //             value={date}
  //             onChange={(e) => setDate(e.value)}
  //             view="month"
  //             dateFormat="mm/yy"
  //           />
  //         </div>
        
  //       </PrimeReactProvider>
  //     </React.StrictMode>
     

     
  //     <Select className="flex-1  ">
  //       <SelectTrigger id="sort" className="text-black w-1/5  ">
  //         <SelectValue placeholder="Sort" />
  //       </SelectTrigger>
  //       <SelectContent position="popper">
  //         <SelectItem value="issue1">Low to High</SelectItem>
  //         <SelectItem value="issue2">High to Low</SelectItem>
  //         <SelectItem value="issue3">Popularity</SelectItem>
  //       </SelectContent>
  //     </Select>
     

      
  //     <Input className="flex-1 " placeholder=" Search"/>
  //     <button className="w-9 h-8 rounded bg-gray-900">
  //         <svg xmlns="http://www.w3.org/2000/svg" className="h-4  ml-3 " viewBox="0 0 512 512"><path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
  //     </button>

  //     </div>
    
  // );
  return (
    <div className="max-w-4xl mx-auto border rounded-md border-black dark:bg-white bg-white shadow-lg p-2 flex flex-col sm:flex-row">
     
      <div className="flex flex-1 justify-center sm:justify-start">
        <Select className="w-full sm:w-auto">
          <SelectTrigger id="location" className="text-black w-full sm:w-64">
            <SelectValue placeholder="Departure Location" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="issue1">Mumbai</SelectItem>
            <SelectItem value="issue2">Delhi</SelectItem>
            <SelectItem value="issue3">Aurangabad</SelectItem>
          </SelectContent>
        </Select>
      </div>
  
      <div className="flex flex-1 justify-center mt-2 sm:mt-0">
        <React.StrictMode>
          <PrimeReactProvider>
            <div className="card border-r border-black flex justify-content-center sm:mx-3 mx-0 p-3 ">
              <Calendar
                
                className="text-black"
                placeholder="Month"
                value={date}
                onChange={(e) => setDate(e.value)}
                view="month"
                dateFormat="mm/yy"
              />
            </div>
          </PrimeReactProvider>
        </React.StrictMode>
      </div>
  
      <div className="flex flex-1 justify-center sm:justify-end mt-2 sm:mt-0">
        <Select className="w-full sm:w-auto">
          <SelectTrigger id="sort" className="text-black w-full sm:w-48">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="issue1">Low to High</SelectItem>
            <SelectItem value="issue2">High to Low</SelectItem>
            <SelectItem value="issue3">Popularity</SelectItem>
          </SelectContent>
        </Select>
      </div>
  
      <div className="flex flex-1 justify-center sm:justify-end mt-2 sm:mt-0">
        <Input className="w-full  sm:w-auto" placeholder="Search"/>
      </div>
  
      <div className="flex justify-center mt-2 sm:mt-0">
        <button className="sm:w-9 w-full sm:block sm:pt-0 pt-2 flex sm:justify-normal justify-center  h-8 rounded bg-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 ml-3" viewBox="0 0 512 512"><path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        </button>
      </div>
      
    </div>
  );
  
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
