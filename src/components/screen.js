"use client";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Screen() {
    const [btnText, setBtnText] = useState('Notify');

    emailjs.init('QBon7jIOMYTFL27R2');

    const handleSubmit = async (event) => {
      event.preventDefault();
      setBtnText('Sending...');
  
      const serviceID = 'default_service';
      const templateID = 'template_86wgm78';
  
      try {
        await emailjs.sendForm(serviceID, templateID, event.target);
        setBtnText('Notify');
        alert('Sent!');
      } catch (err) {
        setBtnText('Notify');
        alert(JSON.stringify(err));
      }
    };
  
    return (
      <div>

       
      
     <div className="w-full h-screen bg-white  ">
      
     {/* <div className=" h-1/2 flex flex-col text-center justify-center items-center text-black sm:p-0 p-7 ">
          <h2 className="mb-4 text-3xl tracking-normal font-bold text-gray-900 sm:text-4xl dark:text-black">    We are launching soon...</h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-800 md:mb-12 sm:text-lg dark:text-gray-700">Stay up to date with the progress, announcements and exclusive discounts feel free to sign up with your email.</p>
          <form action="#" id="form" onSubmit={handleSubmit}>
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div className="relative w-full">
                      <label htmlFor="from_email" className="hidden mb-2 text-sm font-medium  text-gray-300">Email address</label>
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg className="w-5 h-5 text-sky-800 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      </div>
                      <input className="block p-3 pl-10 w-full text-sm text-gray-900  rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 bg-white dark:border-gray-600 dark:placeholder-sky-800 dark:text-black dark:focus:ring-primary-100 dark:focus:border-primary-100" placeholder="Enter your email" type="email" name="from_email" id="from_email" required=""/>
                  </div>
                  <div>
                      <button type="submit" id="button" value={btnText} className="py-3 px-5 w-full text-sm font-bold text-center text-white rounded-lg border cursor-pointer bg-sky-800 border-primary-600 sm:rounded-none sm:rounded-r-lg  hover:bg-sky-600 focus:ring-4 focus:ring-primary-100 dark:focus:ring-primary-100">{btnText}</button>
                  </div>
              </div>
          </form>
      </div> */}
  </div>

  </div>
  
    )
    }



