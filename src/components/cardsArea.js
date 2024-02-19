"use client";
import Card from "./card";







export default function CardsArea(){
    
    
    return(
        <div className=" h-auto w-full flex flex-col justify-center pt-10 ">
            
             <div className="flex justify-center flex-col mx-auto">
                <Card/>
                <br />
                <Card/>
                <br />
                <Card/>
                <br />
                <Card/>
             </div>

        </div>

    )};