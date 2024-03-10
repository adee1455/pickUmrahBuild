"use client";
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "../components/ui/card";
import { TableCell, TableRow, TableBody, Table } from "../components/ui/table";
import { Input } from "../components/ui/input";

import { React, useState, useEffect } from "react";
import emailjs from 'emailjs-com';


export default function PriceBox({ twoShare, threeShare, fourShare, childBed, infant, tourName }) {
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
                <p className="md:text-sm text-xs text-gray-500 mt-2">All Prices are Per Person </p>
                <p className="md:text-sm text-xs text-gray-500">* Child without bed -  {childBed}, Infant - {infant}</p>
            </CardContent>
            <div className={isFormVisible ? '' : 'hidden'} id="form">
                <Form tourName={tourName} hideForm={() => setIsFormVisible(false)} />
            </div>
            <CardFooter className="flex justify-center mt-2">
                <button onClick={toggleFormVisibility} className={`bg-black text-white py-3 px-5 rounded-lg font-semibold ${isFormVisible ? 'hidden' : ''}`}> Book Now </button>
            </CardFooter>
        </Card>
    );
}

export function Form({hideForm,tourName}) {

    const [isSubmitting, setIsSubmitting] = useState(false);

    emailjs.init('QBon7jIOMYTFL27R2');

    function handleSubmit(event) {
        event.preventDefault();
        setIsSubmitting(true);
       
        const templateParams = {
            name: event.target.elements[0].value,
            
            message: `No. Of People: ${event.target.elements[1].value}, Phone Number: ${event.target.elements[2].value}, Choice: ${event.target.elements['choice'].value}`,
            tour_name: event.target.elements['tourChoice'].value,

            
        };

        const serviceID = 'service_p71nwfd';
        const templateID = 'template_imxb3dc';

        emailjs.send(serviceID, templateID, templateParams, 'QBon7jIOMYTFL27R2')
            .then((response) => {
                console.log('Email successfully sent!', response);
                setIsSubmitting(false);
                alert('Email successfully sent!');
                hideForm();
            }, (error) => {
                console.error('Email sending failed:', error);
                setIsSubmitting(false);
                alert('Email sending failed. Please try again later.');
            });
    }

console.log(tourName);


    return (
        <div>
            <form onSubmit={handleSubmit} >
            <div className="md:w-[400px] border-black border md:mx-auto mx-4 mt-10 bg-white rounded-xl shadow-md">
                <div className="grid grid-cols-2 gap-2 pt-2 mb-1 w-full">
                    <Input type="text" name="name" placeholder="Name" required className="w-full rounded-none border-r border-black" />
                    <Input type="text" name="no_of_people" placeholder="No. Of People" required className="w-full" />
                </div>
                <div className="flex items-center ">
                    <Input type="tel" name="phone_number" placeholder="Phone Number" required pattern="^\+?[0-9]{10,13}$" className="mb-4 w-full border-t border-b py-6 rounded-none  border-black" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-md font-semibold">How Likely are you to go?</span>
                </div>
                <div className="flex items-center justify-center gap-2  mb-4">
                    <Input id="country-option-1" type="radio" name="choice" value="less likely" className="w-4 h-4 focus:outline-none dark:focus:outline-none   dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="country-option-1" className="block ms-1  text-sm font-medium text-black dark:text-black ">
                        Less Likely
                    </label>

                    <Input id="country-option-2" type="radio" name="choice" value="likely" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="country-option-2" className="block ms-1  text-sm font-medium text-black dark:text-black ">
                        Likely
                    </label>

                    <Input id="country-option-3" type="radio" name="choice" value="very likely" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="country-option-3" className="block ms-1  text-sm font-medium text-black dark:text-black ">
                       Very Likely
                    </label>
                </div>

                <div className="hidden">
                    <Input  type="radio" name="tourChoice"  value={tourName} className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked />
                    <label htmlFor="country-option-4" className="block ms-1  text-sm font-medium text-black dark:text-black ">
                    {tourName}
                    </label>
                </div>
            </div>
                <div className="flex justify-center pt-6">
                    <button type="submit" className="bg-black text-white py-3 px-5 rounded-lg font-semibold" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Book Now'}
                    </button>
                </div>
            </form>
        </div>
    );
    

};
