"use client";
import { DetailsPage } from "@/components/pricingPage";
import Title from "@/components/heroTitle";
import Navbar from "@/components/navbar";
import TitleParent from "@/components/tourPage";
import TourTitle from "@/components/detailsPage";
import {React,useEffect,useState} from "react";
import { Page } from "@/components/page";
import Footer from "@/components/footer";







export default function page() {

    return (
      <div>
        <div className="border-b border-[lightgray]">
         <Navbar/>
         </div>
        
        {/* <TitleParent/> */}
        <Page/>
        <Footer/>
         
  
        
      </div>
    )
    }
    