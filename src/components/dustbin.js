// import Card from "./card";
// import {React,useEffect,useState} from "react";







// export default function CardsArea(){
//     useEffect(() => {
//         console.log("Hello");
//         getCard();
//       }, []);
//       const [cards, setCards] = useState([]);
      
//       const getCard = async () => {
//         const response = await fetch("/api/cards", {
//           method: "GET",
//           headers: { "Content-Type": "application/json" },
//         });
//         const data = await response.json();
//         console.log(data);
//         setCards(data);
//       };
    
//     return(
//         <div className=" h-auto w-full flex bg-white flex-col justify-center pt-5 ">
            
//              <div className="flex justify-center flex-col mx-auto">
//              {cards.map((card) => (
//             <>
              
//               <Card
//                 tourName={card.tourname}
//                 tourCity={card.touradd}
//                 ratings={card.tourratings}
//                 departDate={card.departdate}
//                 arrivalDate={card.arrivaldate}
//                 location={card.departlocation}
//                 price={card.price}
//                 days={card.days}
//                 type={card.type}
//                 btnLink={card.btnlink}
//                 makkahHotel={card.makkahhotel}
//                 madinahHotel={card.madinahhotel}
//                 makkahHotel2={card.makkahhotel2}
//                 madinahHotel2={card.madinahhotel2}
//                 stars={card.stars}
//                 makkahDist={card.makkahdist}
//                 madinahDist={card.madinahdist}
                
//               />
  
//             </>
//           ))}
          
//              </div>
            
//         </div>

//     )};

// "use client";
// import Card from "./card";
// import { React, useEffect, useState } from "react";

// export default function CardsArea() {
//   const [cards, setCards] = useState([]);
//   const [loading, setLoading] = useState(false); // Indicates if data is being fetched
//   const [hasMore, setHasMore] = useState(true); // Indicates if there's more data to fetch

//   useEffect(() => {
//     getInitialCards(); // Fetch initial 5 cards
//   }, []);

//   const getInitialCards = async () => {
//     try {
//       setLoading(true); // Start loading state
//       const response = await fetch("/api/cards?limit=5", {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       });
//       const data = await response.json();

//       if (data.length === 0) {
//         setHasMore(false); // No more data available
//       } else {
//         setCards(data); // Set fetched data
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false); // End loading state
//     }
//   };

//   const fetchMoreCards = async () => {
//     try {
//       setLoading(true); // Start loading state
//       const response = await fetch(`/api/cards?limit=5&offset=${cards.length}`, {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       });
//       const data = await response.json();

//       if (data.length === 0) {
//         setHasMore(false); // No more data available
//       } else {
//         setCards((prevCards) => [...prevCards, ...data]); // Append new data to existing cards
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false); // End loading state
//     }
//   };

//   const handleScroll = () => {
//     // Fetch more data when user scrolls to the bottom and there's more data available
//     if (
//       window.innerHeight + document.documentElement.scrollTop ===
//         document.documentElement.offsetHeight &&
//       !loading &&
//       hasMore
//     ) {
//       fetchMoreCards();
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [loading, hasMore]); // Re-add event listener when loading state or hasMore state changes
  
//   return (
//     <div className="h-auto w-full flex bg-white flex-col justify-center pt-5">
//       <div className="flex justify-center flex-col mx-auto">
//         {/* {Array.isArray(cards) && cards.map((card, index) => (
//           <Card key={index} {...card} />
//         ))} */}
//         {cards.map((card) => (
//             <>
              
//                <Card
                // tourName={card.tourname}
                // tourCity={card.touradd}
                // ratings={card.tourratings}
                // departDate={card.departdate}
                // arrivalDate={card.arrivaldate}
                // location={card.departlocation}
                // price={card.price}
                // days={card.days}
                // type={card.type}
                // btnLink={card.btnlink}
                // makkahHotel={card.makkahhotel}
                // madinahHotel={card.madinahhotel}
                // makkahHotel2={card.makkahhotel2}
                // madinahHotel2={card.madinahhotel2}
                // stars={card.stars}
                // makkahDist={card.makkahdist}
                // madinahDist={card.madinahdist}
    
//                /> 
//                </>
// ))}
//         {loading && <p>Loading...</p>}
//         {!loading && !hasMore && cards.length === 0 && <p>No items available</p>}
//         {!loading && !hasMore && cards.length > 0 && <p>End</p>}
//       </div>
//     </div>
//   );
// }


// "use client";
// import Card from "./card";
// import { React, useEffect, useState } from "react";

// export default function CardsArea() {
//   const [cards, setCards] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   useEffect(() => {
//     loadInitialCards();
//   }, []);

//   const loadInitialCards = async () => {
//     setLoading(true);
//     try {
//       const response = await fetchCards(page);
//       const data = await response.json();
//       setCards(data);
//       setPage(page + 1);
//     } catch (error) {
//       console.error("Error loading initial cards:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchCards = async (pageNum) => {
//     const response = await fetch(`/api/cards?page=${pageNum}`);
//     return response;
//   };

//   const handleScroll = () => {
//     if (
//       window.innerHeight + document.documentElement.scrollTop ===
//         document.documentElement.offsetHeight &&
//       !loading &&
//       hasMore
//     ) {
//       loadMoreCards();
//     }
//   };

//   const loadMoreCards = async () => {
//     setLoading(true);
//     try {
//       const response = await fetchCards(page);
//       const data = await response.json();
//       if (data.length === 0) {
//         setHasMore(false);
//       } else {
//         setCards((prevCards) => [...prevCards, ...data]);
//         setPage(page + 1);
//       }
//     } catch (error) {
//       console.error("Error loading more cards:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [loading, hasMore]);

//   return (
//     <div className="h-auto w-full flex bg-white flex-col justify-center pt-5">
//       <div className="flex justify-center flex-col mx-auto">
//         {cards.map((card, index) => (
//           <Card key={index} 
//           tourName={card.tourname}
//           tourCity={card.touradd}
//           ratings={card.tourratings}
//           departDate={card.departdate}
//           arrivalDate={card.arrivaldate}
//           location={card.departlocation}
//           price={card.price}
//           days={card.days}
//           type={card.type}
//           btnLink={card.btnlink}
//           makkahHotel={card.makkahhotel}
//           madinahHotel={card.madinahhotel}
//           makkahHotel2={card.makkahhotel2}
//           madinahHotel2={card.madinahhotel2}
//           stars={card.stars}
//           makkahDist={card.makkahdist}
//           madinahDist={card.madinahdist}
//           />
//         ))}
//         {loading && <p>Loading...</p>}
//         {!loading && !hasMore && <p>End</p>}
//       </div>
//     </div>
//   );
// }

  // useEffect(() => {
  //   loadCards();
  // }, [filterOption, sortOption]); // Reload cards when filter or sort options change

  // const loadCards = async () => {
  //   setLoading(true);
  // let filteredData = data;
      // if (filterOption) {
      //   filteredData = data.filter(card => card.departureLocation.toLowerCase() === filterOption.toLowerCase());
      // }
  
      // let sortedData = filteredData;
      // if (sortOption === "lowToHigh") {
      //   sortedData = filteredData.slice().sort((a, b) => a.price - b.price);
      // } else if (sortOption === "highToLow") {
      //   sortedData = filteredData.slice().sort((a, b) => b.price - a.price);
      // }
  
      // setCards(sortedData);

// const handleScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop ===
  //       document.documentElement.offsetHeight &&
  //     !loading &&
  //     hasMore
  //   ) {
  //     // loadMoreCards();
  //   }
  // };

  // const loadMoreCards = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await fetchCards(page);
  //     const data = await response.json();
  //     if (data.length === 0) {
  //       setHasMore(false); // No more cards available
  //     } else {
  //       setCards((prevCards) => [...prevCards, ...data]);
  //       setPage(page + 1);
  //     }
  //   } catch (error) {
  //     console.error("Error loading more cards:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [loading, hasMore]);


// "use client";
// import Card from "./card";
// import { useEffect, useState } from "react";

// export default function CardsArea({ filterOption }) {
//   const [cards, setCards] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   useEffect(() => {
//     loadCards(1, filterOption);
//   }, [filterOption]);

//   const loadCards = async (pageNum, filter) => {
//     setLoading(true);
//     try {
//       const response = await fetchCards(pageNum, filter);
//       const data = await response.json();

//       if (data.length === 0 && pageNum === 1) {
//         setHasMore(false);
//         setCards([]);
//       } else if (data.length === 0) {
//         setHasMore(false);
//       } else {
//         setCards((prevCards) => (pageNum === 1 ? data : [...prevCards, ...data]));
//         setPage(pageNum + 1);
//       }
//     } catch (error) {
//       console.error("Error loading cards:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchCards = async (pageNum, filter) => {
//     const locationParam = filter ? `&location=${filter}` : "";
//     const response = await fetch(`/api/cards?page=${pageNum}${locationParam}`);
//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error("Error response from server:", errorText);
//       throw new Error(`Server error: ${response.statusText}`);
//     }
//     return response;
//   };

//   // const handleScroll = () => {
//   //   if (
//   //     window.innerHeight + document.documentElement.scrollTop ===
//   //       document.documentElement.offsetHeight &&
//   //     !loading &&
//   //     hasMore
//   //   ) {
//   //     loadCards(page, filterOption);
//   //   }
//   // };

//   // useEffect(() => {
//   //   window.addEventListener("scroll", handleScroll);
//   //   return () => {
//   //     window.removeEventListener("scroll", handleScroll);
//   //   };
//   // }, [loading, hasMore, filterOption]);

//   return (
//     <div className="h-auto w-full flex bg-white flex-col justify-center pt-5">
//       <div className="flex justify-center flex-col mx-auto">
//         {cards.map((card, index) => (
//           <Card
            // key={index}
            // tourName={card.tourname}
            // tourCity={card.touradd}
            // ratings={card.tourratings}
            // departDate={card.departdate}
            // arrivalDate={card.arrivaldate}
            // location={card.departlocation}
            // price={card.price}
            // days={card.days}
            // type={card.type}
            // btnLink={card.btnlink}
            // makkahHotel={card.makkahhotel}
            // madinahHotel={card.madinahhotel}
            // makkahHotel2={card.makkahhotel2}
            // madinahHotel2={card.madinahhotel2}
            // stars={card.stars}
            // makkahDist={card.makkahdist}
            // madinahDist={card.madinahdist}
//           />
//         ))}
//         {loading && <p>Loading...</p>}
//         {!loading && !hasMore && <p>End</p>}
//       </div>
//     </div>
//   );



// import { useEffect, useState } from "react";
// import Card from "./Card";

// export default function CardsArea({ filterOption, sortOption }) {
//   const [cards, setCards] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchCards = async () => {
//     setLoading(true);
//     const urlParams = new URLSearchParams();
//     if (filterOption.location) {
//       urlParams.append("location", filterOption.location);
//     }
//     const url = `/api/cards?${urlParams.toString()}`;
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       if (Array.isArray(data)) {
//         setCards(data);
//         sortCards(data); // Call sort immediately after setting cards
//       } else {
//         console.error("Expected an array but received:", data);
//         setCards([]);
//       }
//     } catch (error) {
//       console.error("Error loading cards:", error);
//       setCards([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCards();
//   }, [filterOption]);

//   const sortCards = (cardsData) => {
//     let sortedCards = [...cardsData];
//     if (sortOption === "priceLowToHigh") {
//       sortedCards.sort((a, b) => a.price - b.price);
//     } else if (sortOption === "priceHighToLow") {
//       sortedCards.sort((a, b) => b.price - a.price);
//     } else {
//       // Default sort or any other sort logic
//       sortedCards.sort((a, b) => a.defaultSortField - b.defaultSortField);
//     }
//     setCards(sortedCards);
//   };

//   useEffect(() => {
//     if (cards.length > 0) {
//       sortCards(cards);
//     }
//   }, [sortOption]);

//   return (
//     <div className="h-auto w-full flex bg-white flex-col justify-center pt-5">
//       <div className="flex justify-center flex-col mx-auto">
//         {loading && <p>Loading...</p>}
//         {!loading && cards.map((card, index) => (
//           <Card 
//           key={index}
//           tourName={card.tourname}
//           tourCity={card.touradd}
//           ratings={card.tourratings}
//           departDate={card.departdate}
//           arrivalDate={card.arrivaldate}
//           location={card.departlocation}
//           price={card.price}
//           days={card.days}
//           type={card.type}
//           btnLink={card.btnlink}
//           makkahHotel={card.makkahhotel}
//           madinahHotel={card.madinahhotel}
//           makkahHotel2={card.makkahhotel2}
//           madinahHotel2={card.madinahhotel2}
//           stars={card.stars}
//           makkahDist={card.makkahdist}
//           madinahDist={card.madinahdist}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }



// import { NextResponse } from "next/server";
// import { query } from "../../../lib/db";



// export const GET = async (req) => {
  //   try {
    //     const { searchParams } = new URL(req.nextUrl);
    //     const location = searchParams.get("location");
    
    //     const queryStr = location
    //       ? `SELECT * FROM card WHERE departLocation = ?`
    //       : `SELECT * FROM card`;
    //     const values = location ? [location] : [];
    
    //     const results = await query({ query: queryStr, values });
    
    //     return NextResponse.json(results);
    //   } catch (e) {
      //     console.error("API Error: ", e.message);
      //     return NextResponse.json({ message: e.message }, { status: 500 });
      //   }
      // };
      

      



// import { NextResponse } from "next/server";
// import { query } from "../../../lib/db";

// export const GET = async (req) => {
//   try {
//     const { searchParams } = new URL(req.nextUrl);
//     const location = searchParams.get("location");
//     const sort = searchParams.get("sort");

//     let queryStr = "SELECT * FROM card";
//     let values = [];

//     if (location) {
//       queryStr += " WHERE departLocation = ?";
//       values.push(location);
//     }

//     if (sort) {
//       queryStr += sort === "priceLowToHigh" ? " ORDER BY price ASC" : " ORDER BY price DESC";
//     }

//     const results = await query({ query: queryStr, values });
//     return NextResponse.json(results);
//   } catch (e) {
//     console.error("API Error: ", e.message);
//     return NextResponse.json({ message: e.message }, { status: 500 });
//   }
// };




// import { query } from "../../../lib/db";

// export default async function handler(req, res) {
//   try {
//     // Parse query parameters for pagination
//     const { page = 1, limit = 5 } = req.query;

//     // Convert page and limit to numbers
//     const pageNumber = parseInt(page);
//     const limitNumber = parseInt(limit);

//     // Calculate offset based on page and limit
//     const offset = (pageNumber - 1) * limitNumber;

//     // Query database for a specific range of records
//     const results = await query({
//       query: "SELECT * FROM card LIMIT ?, ?",
//       values: [offset, limitNumber],
//     });

//     // Return the results
//     res.status(200).json(results);
//   } catch (error) {
//     // Return error response if there's an error
//     res.status(500).json({ message: error.message });
//   }
// }

// import { query } from "../../../lib/db";

// export default async function handler(req, res) {
//   try {
//     // Parse query parameters for pagination
//     const { page = 1, limit = 5 } = req.query;

//     // Convert page and limit to numbers
//     const pageNumber = parseInt(page);
//     const limitNumber = parseInt(limit);

//     // Calculate offset based on page and limit
//     const offset = (pageNumber - 1) * limitNumber;

//     // Query database for a specific range of records
//     const results = await query({
//       query: "SELECT * FROM card LIMIT ?, ?",
//       values: [offset, limitNumber],
//     });

//     // Return the results
//     res.status(200).json(results);
//   } catch (error) {
//     // Return error response if there's an error
//     res.status(500).json({ message: error.message });
//   }
// }


// import React from "react"
// import Screen from "../components/screen"
// // import Navbar from "../../components/navbar";
// import Navbar from "../components/navbar"
// import Title from "../components/heroTitle"
// import SearchBar from "../components/searchBar"
// import CardsArea from "../components/cardsArea"
// import Footer from "../components/footer"
// import { useState } from "react"





// export default function Home() {
 

//   return (
//     <div>
//       <Navbar />
//       <Title />
//       <SearchBar  />
//       <CardsArea  />
//       <Footer />
//     </div>
//   );
// }


// "use client";
// import Bar from "./bar";

// export default function SearchBar({handleLocation}) {
//   return (
//     <div className="dark:bg-[white] bg-[white] w-full">
//       <div className="p-6">
//         <Bar  />
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";

// export default function SearchBar({ onFilter, onSort }) {
//   const [locationFilter, setLocationFilter] = useState("");
//   const [monthFilter, setMonthFilter] = useState("");
//   const [sortOption, setSortOption] = useState("");

//   const handleFilterChange = () => {
//     // Call onFilter with selected filter options
//     onFilter({
//       location: locationFilter,
//       month: monthFilter
//     });
//   };

//   const handleSortChange = () => {
//     // Call onSort with selected sort option
//     onSort(sortOption);
//   };

//   return (
//     <div className="max-w-4xl mx-auto border rounded-md border-black dark:bg-white bg-white shadow-lg p-2 flex flex-col sm:flex-row">
//       {/* Location Filter */}
//       <input
//         type="text"
//         value={locationFilter}
//         onChange={(e) => setLocationFilter(e.target.value)}
//         placeholder="Location Filter"
//       />
//       {/* Month Filter */}
//       <input
//         type="text"
//         value={monthFilter}
//         onChange={(e) => setMonthFilter(e.target.value)}
//         placeholder="Month Filter"
//       />
//       {/* Sort Select */}
//       <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
//         <option value="">Sort By</option>
//         <option value="price">Price</option>
//         <option value="ratings">Ratings</option>
//       </select>
//       {/* Filter Button */}
//       <button onClick={handleFilterChange}>Filter</button>
//       {/* Sort Button */}
//       <button onClick={handleSortChange}>Sort</button>
//     </div>
//   );
// }
// import { useState } from "react";

// export default function SearchBar({ onFilter, onSort }) {
//   const [locationFilter, setLocationFilter] = useState("");
//   const [monthFilter, setMonthFilter] = useState("");
//   const [sortOption, setSortOption] = useState("");

//   const handleFilterChange = () => {
//     onFilter({ location: locationFilter, month: monthFilter });
//   };

//   const handleSortChange = (e) => {
//     setSortOption(e.target.value);
//     onSort(e.target.value);
//   };

//   return (
//     <div className="max-w-4xl mx-auto border rounded-md border-black dark:bg-white bg-white shadow-lg p-2 flex flex-col sm:flex-row">
//       <div className="flex sm:border-none border-b border-black">
//         <div className="flex flex-1 justify-center sm:justify-start">
//           <select
//             id="location"
//             value={locationFilter}
//             onChange={(e) => setLocationFilter(e.target.value)}
//             className="text-black w-full sm:w-64"
//           >
//             <option value="">Departure Location</option>
//             <option value="Mumbai">Mumbai</option>
//             <option value="Delhi">Delhi</option>
//             <option value="Aurangabad">Aurangabad</option>
//           </select>
//         </div>
//         <div className="flex flex-1 justify-center mt-0 sm:mt-0">
//           <input
//             id="month"
//             type="month"
//             value={monthFilter}
//             onChange={(e) => setMonthFilter(e.target.value)}
//             className="text-black"
//           />
//         </div>
//       </div>
//       <div className="flex">
//         <div className="flex flex-1 justify-center sm:justify-end mt-0 sm:mt-0">
//           <select
//             id="sort"
//             value={sortOption}
//             onChange={handleSortChange}
//             className="text-black dark:text-black w-[174px] lg:pt-3 pt-6 sm:w-48"
//           >
//             <option value="">Sort</option>
//             <option value="priceLowToHigh">Price: Low to High</option>
//             <option value="priceHighToLow">Price: High to Low</option>
//           </select>
//         </div>
//         <div className="flex flex-1 justify-center sm:justify-end mt-2 sm:mt-0">
//           <input className="w-full sm:w-auto" type="text" placeholder="Search"/>
//         </div>
//         <div className="flex justify-center mt-2 sm:mt-0">
//           <button
//             className="sm:w-9 w-full sm:block sm:pt-0 pt-2 sm:pr-0 pr-2 mt-1 flex sm:justify-normal justify-center h-8 rounded bg-gray-900"
//             onClick={handleFilterChange}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 ml-3" viewBox="0 0 512 512">
//               <path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }






//   useEffect(() => {
//     if(filter === 'all' ){
//     let page = "cards";  
//     loadInitialCards(page,filter);
//     console.log("initial fetch "+ filter)
//     }
//     else if (filter === 'Delhi'){
//      let page = "delhiCards";  
//       loadInitialCards(page);
//       console.log("loaded loadCards" + filter)
//     }
//     else if (filter === 'Mumbai'){
//     let page = "mumbaiCards";  
//       loadInitialCards(page);
//       console.log("loaded loadCards" + filter)
//     }
//   }, [filter]);

//   useEffect(() => {
//     if(sort === 'default' ){
//     let page = "cards";  
//     loadInitialCards(page);
//     console.log("initial fetch "+ sort)
//     }
//     else if (sort === 'lowToHigh'){
//      let page = "lowToHigh";  
//       loadInitialCards(page);
//       console.log("loaded loadCards" + sort)
//     }
//     else if (sort === 'highToLow'){
//     let page = "highToLow";  
//       loadInitialCards(page);
//       console.log("loaded loadCards" + sort)
//     }
//   }, [sort]);

// console.log(month);

// useEffect(() => {
//   if(month === 'default'){
//     let page = "cards";  
//     loadInitialCards(page);
//   }
//   else if(month){
//     let page = "monthCards"
//     loadInitialCards(page,month)
//   }

// },[month]);


//   const loadInitialCards = async (page,month) => {
//     setLoading(true);
  
//     try {
     
    
//       const response = await fetchCards(page,month);
//       const data = await response.json();
  
    
//       if (data.length === 0) {
//         setHasMore(false); 
//       } else {
//         setCards(data);
//         setPages(page + 1);
//       }
  
  
//     } catch (error) {
//       console.error("Error loading initial cards:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchCards = async (page, month) => {
//     const query = month ? `?month=${month}` : '';
//     const url = `/api/${page}${query}`;
//     console.log("Fetching cards from:", url); // This will help you debug the URL being hit
//     const response = await fetch(url);
//     return response;
//   };
