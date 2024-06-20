"use client";

import { useState } from "react";
import Navbar from "../components/navbar";
import Title from "../components/heroTitle";
import SearchBar from "../components/searchBar";
import CardsArea from "../components/cardsArea";
import Footer from "../components/footer";
import dynamic from 'next/dynamic';

// Example of dynamically importing a component
const DynamicComponent = dynamic(() => import('../components/cardsArea'), {
  loading: () => <p>Loading...</p>,
  ssr: false, // Disable server-side rendering
});



export default function Home() {

  const [filterOption, setFilterOption] = useState("all");
  const [sortOption, setSortOption] = useState("default"); // Default sort option
  const [month,setMonth] = useState("default");
  const [searchKey,setSearchKey] = useState("");

  const handleSearch = (query) => {
    setSearchKey(query);
    console.log("Search query:", query);
  };

  const handleMonthChange = (month) =>{
    setMonth(month);
    console.log(month)
  }

  const handleLocation = (filter) => {
    setFilterOption(filter);
    console.log(filter);
  };

  const handleSortChange = (sort) => {
    setSortOption(sort);
    console.log(sort);
  };

  return (
    <div>
      <Navbar />
      <Title />
      <SearchBar   handleSearch={handleSearch} handleLocation={handleLocation} handleSortChange={handleSortChange} handleMonthChange={handleMonthChange} />
      {/* <CardsArea  /> */} 
      <DynamicComponent searchKey={searchKey} filterOption={filterOption} sortOption={sortOption} month={month} />
      <Footer />
    </div>
  );
}
