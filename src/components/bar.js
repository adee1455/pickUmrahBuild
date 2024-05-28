// "use client";
// import { SelectValue, SelectTrigger,SelectItem,SelectContent,Select, }
// from "../components/ui/select";
// import { Input } from "../components/ui/input";
// import React, { useState } from "react";
// import { Calendar } from "primereact/calendar";


// import { PrimeReactProvider } from "primereact/api";

// import "primereact/resources/primereact.css";
// import "primereact/resources/themes/lara-light-indigo/theme.css";

// export default function Bar({handleLocation}) {

//   const [selectedValue, setSelectedValue] = useState("");
//   const [sortValue, setSortValue] = useState("");

//   const handleSelectChange = (value) => {
//     setSelectedValue(value);
//     handleLocation(value);
//   };
//   const handleSortChange = (value) => {
    
//     setSortValue(value);
//   };


//   return (
//     <div className="max-w-4xl mx-auto border rounded-md border-black dark:bg-white bg-white shadow-lg p-2 flex flex-col sm:flex-row">
//      <div className="flex sm:border-none border-b border-black">
//       <div className="flex flex-1 justify-center text-black sm:justify-start">
//       <Select value={selectedValue} onValueChange={handleSelectChange}  className="w-full sm:w-auto">
//       <SelectTrigger id="location" className="text-black w-full sm:w-64">
//         <SelectValue placeholder="Departure Location" />
//         </SelectTrigger>
//         <SelectContent position="popper">
//           <SelectItem value="all">All</SelectItem>
//           <SelectItem value="Mumbai">Mumbai</SelectItem>
//           <SelectItem value="Delhi">Delhi</SelectItem>
//           <SelectItem value="Aurangabad">Aurangabad</SelectItem>
//         </SelectContent>
//     </Select>

//       </div>
  
//       <div className="flex flex-1 justify-center mt-0 sm:mt-0">
//         <React.StrictMode>
//           <PrimeReactProvider>
//             <div className="card sm:border-r border-black flex justify-content-center sm:mx-3 mx-0 p-3 ">
//               <Calendar
                
//                 className="text-black"
//                 placeholder="Month"
//                 value="hello"
//                 view="month"
//                 dateFormat="mm/yy"
//               />
//             </div>
//           </PrimeReactProvider>
//         </React.StrictMode>
       
//       </div>
//       </div>
//   <div className="flex">
//       <div className="flex flex-1 justify-center sm:justify-end mt-0 sm:mt-0">
//         <Select value={sortValue} onValueChange={handleSortChange} className="w-full sm:w-auto ">
//           <SelectTrigger id="sort" className="text-black dark:text-black w-[174px] lg:pt-3 pt-6 sm:w-48">
//             <SelectValue placeholder="Sort" />
//           </SelectTrigger>
//           <SelectContent position="popper">
//             <SelectItem value="lowToHigh">Low to High</SelectItem>
//             <SelectItem value="highToLow">High to Low</SelectItem>
//             <SelectItem value="default">Default</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>
  
//       <div className="flex flex-1 justify-center sm:justify-end mt-2 sm:mt-0">
//         <Input className="w-full  sm:w-auto" placeholder="Search"/>
//       </div>
  
//       <div className="flex justify-center mt-2 sm:mt-0">
//         <button className="sm:w-9 w-full sm:block sm:pt-0 pt-2 sm:pr-0 pr-2 mt-1 flex sm:justify-normal justify-center  h-8 rounded bg-gray-900">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 ml-3" viewBox="0 0 512 512"><path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
//         </button>
//       </div>
//       </div>
      
//     </div>
//   );
  
// }

// function ChevronDownIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m6 9 6 6 6-6" />
//     </svg>
//   );
// }





// "use client";
// import {
//   Select,
//   SelectValue,
//   SelectTrigger,
//   SelectItem,
//   SelectContent
// } from "../components/ui/select";
// import { useState } from "react";

// export default function Bar({ handleFilterChange }) {
//   const [filterOption, setFilterOption] = useState("");
//   const [selectedLocation, setSelectedLocation] = useState("Departure Location");

//   const handleSelectChange = (value) => {
//     setFilterOption(value);
//     setSelectedLocation(value);
//     handleFilterChange(value);
//   };

//   return (
//     <div className="max-w-4xl mx-auto border rounded-md border-black dark:bg-white bg-white shadow-lg p-2 flex flex-col sm:flex-row">
//       <div className="flex sm:border-none border-b border-black">
//         <div className="flex flex-1 justify-center sm:justify-start">
//           <Select value={filterOption} onValueChange={handleSelectChange} className="w-full sm:w-auto">
//             <SelectTrigger id="location" className="text-black w-full sm:w-64">
//               <SelectValue>{selectedLocation}</SelectValue>
//             </SelectTrigger>
//             <SelectContent position="popper">
//               <SelectItem value="all">All</SelectItem>
//               <SelectItem value="Mumbai">Mumbai</SelectItem>
//               <SelectItem value="Delhi">Delhi</SelectItem>
//               <SelectItem value="Aurangabad">Aurangabad</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//         <div className="flex flex-1 justify-center mt-0 sm:mt-0">
//         <React.StrictMode>
//           <PrimeReactProvider>
//             <div className="card sm:border-r border-black flex justify-content-center sm:mx-3 mx-0 p-3 ">
//               <Calendar
                
//                 className="text-black"
//                 placeholder="Month"
//                 value="hello"
//                 // onChange={(e) => setDate(e.value)}
//                 view="month"
//                 dateFormat="mm/yy"
//               />
//             </div>
//           </PrimeReactProvider>
//         </React.StrictMode>
       
//       </div>
//       </div>
//    <div className="flex">
//       <div className="flex flex-1 justify-center sm:justify-end mt-0 sm:mt-0">
//         <Select value="hello" className="w-full sm:w-auto ">
//           <SelectTrigger id="sort" className="text-black  w-[174px] lg:pt-3 pt-6 sm:w-48">
//             <SelectValue placeholder="Sort" />
//           </SelectTrigger>
//           <SelectContent position="popper">
//             <SelectItem value="lowToHigh">Low to High</SelectItem>
//             <SelectItem value="highToLow">High to Low</SelectItem>
//             <SelectItem value="default">Default</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>
  
//       <div className="flex flex-1 justify-center sm:justify-end mt-2 sm:mt-0">
//         <Input className="w-full  sm:w-auto" placeholder="Search"/>
//       </div>
  
//       <div className="flex justify-center mt-2 sm:mt-0">
//         <button className="sm:w-9 w-full sm:block sm:pt-0 pt-2 sm:pr-0 pr-2 mt-1 flex sm:justify-normal justify-center  h-8 rounded bg-gray-900">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 ml-3" viewBox="0 0 512 512"><path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
//         </button>
//       </div>
//       </div>
      
//     </div>
//   );
// }

