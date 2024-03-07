"use client";
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "../components/ui/card";
import { TableCell, TableRow, TableBody, Table } from "../components/ui/table";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { React, useState, useEffect } from "react";
import axios from 'axios';

export default function PriceBox({ twoShare, threeShare, fourShare, childBed, infant }) {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    return (
        <Card className="w-3xl right-10 md:flex flex-col py-5 font-sans">
            <CardHeader>
                <CardTitle className="tracking-wide">Pricing</CardTitle>
            </CardHeader>
            <CardContent>
                <Table className="mb-2">
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-semibold">2 Share</TableCell>
                            <TableCell className="text-right text-black">{twoShare}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-semibold">3 Share</TableCell>
                            <TableCell className="text-right">{threeShare}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-semibold">4 Share</TableCell>
                            <TableCell className="text-right">{fourShare}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <p className="md:text-sm text-xs text-gray-500 mt-2">All Prices are Per Person</p>
                <p className="md:text-sm text-xs text-gray-500">* Child without bed - {childBed}, Infant - {infant}</p>
            </CardContent>
            <div className={isFormVisible ? '' : 'hidden'} id="form">
                <Form hideForm={() => setIsFormVisible(false)} />
            </div>
            <CardFooter className="flex justify-center mt-2">
                <button onClick={toggleFormVisibility} className={`bg-black text-white py-3 px-5 rounded-lg font-semibold ${isFormVisible ? 'hidden' : ''}`}> Book Now </button>
            </CardFooter>
        </Card>
    );
}

export function Form({ hideForm }) {

        const handleSubmit = async (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData.entries());
        
            try {
              const response = await axios.post('/app/api/submitForm', data);
              console.log(response.data);
              hideForm(); // Hide the form after successful submission
            } catch (error) {
              console.error('Error submitting form:', error);
              // Handle errors, like displaying an error message to the user
            }
          };
  

    return (
        <div>
            <form onSubmit={handleSubmit} >
              <div className="w-[400px] border-black border mx-auto mt-10 bg-white rounded-xl shadow-md">
                <div className="grid grid-cols-2 gap-2 pt-2 mb-1 w-full">
                    <Input placeholder="Name" required className="w-full border-r border-black " />
                    <Input placeholder="No.Of People" required className="w-full" />
                </div>
                <div className="flex items-center ">
                    <Input className="mb-4 w-full border-t border-b py-6  border-black" type="tel" required pattern="^\+?[0-9]{10,13}$"  placeholder="Phone Number" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-md font-semibold">How Likely are you to go ?</span>
                </div>
                <div className="flex items-center justify-center gap-2  mb-4">
                    <input id="country-option-1" type="radio" name="choice" value="confirm" className="w-4 h-4 focus:outline-none dark:focus:outline-none   dark:bg-gray-700 dark:border-gray-600"  />
                    <label htmlFor="country-option-1" className="block ms-1  text-sm font-medium text-black dark:text-black ">
                        Confirm
                    </label>

                    <input id="country-option-2" type="radio" name="choice" value="think" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="country-option-2" className="block ms-1  text-sm font-medium text-black dark:text-black ">
                        Thinking
                    </label>

                    <input id="country-option-3" type="radio" name="choice" value="plan" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="country-option-3" className="block ms-1  text-sm font-medium text-black dark:text-black ">
                        Planning
                    </label>
                </div>
             
                  <div className="hidden">
                  <input id="country-option-4" type="radio" name="choice" value="Al-Khalid" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="country-option-4" className="block ms-1  text-sm font-medium text-black dark:text-black ">
                       AL-Khalid
                    </label>
                  </div>

                </div>
                <div className="flex justify-center pt-6">
                    <button type="submit" className="bg-black text-white py-3 px-5 rounded-lg font-semibold">
                        Book Now
                    </button>
                </div>
            </form>
        </div>
    );
    

};
