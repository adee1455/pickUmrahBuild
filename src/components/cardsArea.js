// "use client";
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

"use client";
import Card from "./card";
import { React, useEffect, useState } from "react";
export default function CardsArea() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadInitialCards();
  }, []);

  const loadInitialCards = async () => {
    setLoading(true);
    try {
      const response = await fetchCards(page);
      const data = await response.json();
      if (data.length === 0) {
        setHasMore(false); // No more cards available
      } else {
        setCards(data);
        setPage(page + 1);
      }
    } catch (error) {
      console.error("Error loading initial cards:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCards = async (pageNum) => {
    const response = await fetch(`/api/cards?page=${pageNum}`);
    return response;
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      !loading &&
      hasMore
    ) {
      loadMoreCards();
    }
  };

  const loadMoreCards = async () => {
    setLoading(true);
    try {
      const response = await fetchCards(page);
      const data = await response.json();
      if (data.length === 0) {
        setHasMore(false); // No more cards available
      } else {
        setCards((prevCards) => [...prevCards, ...data]);
        setPage(page + 1);
      }
    } catch (error) {
      console.error("Error loading more cards:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, hasMore]);

  return (
    <div className="h-auto w-full flex bg-white flex-col justify-center pt-5">
      <div className="flex justify-center flex-col mx-auto">
        {cards.map((card, index) => (
          <Card key={index} 
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
}

