"use client";
import Card from "./card";
import {React,useEffect,useState} from "react";






export default function CardsArea(){
    useEffect(() => {
        console.log("Hello");
        getCard();
      }, []);
      const [cards, setCards] = useState([]);
      
      const getCard = async () => {
        const response = await fetch("/api/cards", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        console.log(data);
        setCards(data);
      };
    
    return(
        <div className=" h-auto w-full flex flex-col justify-center pt-5 ">
            
             <div className="flex justify-center flex-col mx-auto">
           {cards.map((card) => (
            <>
              
              <Card
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
            </>
          ))}
             </div>

        </div>

    )};
