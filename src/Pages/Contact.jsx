import React from 'react';

function Contact() {
  return (
    <>
    <div className="sm:flex flex-row w-full bg-gray-100 justify-center sm:px-24 px-4 py-28 gap-8 h-auto">
  
      <div className="sm:w-5/12 w-full">
      <div className="h-0.5 w-16 bg-yellow-500 mr-4 font-bold mb-8"></div>
        <h1 className="text-3xl font-bold text-gray-800 mb-8">CONTACT DETAILS</h1>
        <div className="sm:flex flex-row mb-6">
          <p className="text-xl font-medium text-gray-700 mr-4">ADDRESS:</p>
          <p className="flex-grow text-lg text-gray-600">4578 Marmora Road, Glasgow, D04 89GR</p>
        </div>
        <div className="sm:flex flex-row mb-6">
          <p className="text-xl font-medium text-gray-700 mr-4">PHONES:</p>
          <p className="flex-grow text-lg text-gray-600">(800) 123-0045 / (800) 123-0045</p>
        </div>
        <div className="sm:flex flex-row">
          <p className="text-xl font-medium text-gray-700 mr-4">WE ARE OPEN:</p>
          <p className="flex-grow text-lg text-gray-600">Mon-Fri: 10 am-8 pm</p>
        </div>
      </div>

      <div className="sm:w-3/4 w-full flex flex-col sm:mt-0 mt-12">
      <div className="h-0.5 w-16 bg-yellow-500 mr-4 font-bold mb-8"></div>
      <h1 className="text-3xl font-bold text-gray-800 mb-10">Get In Touch</h1>

       
        <form className="flex flex-col space-y-8">
          <input type="text" id="name" name="name" placeholder='Your Name' className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          <input type="email" id="email" name="email" placeholder='Email' className="mb-10 px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          <textarea id="message" name="message" rows={5} placeholder='Message' className="mt-8 px-3 py-4 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"></textarea>
          <button type="submit" className="w-full md:w-4/12 px-2 py-3 text-xl font-semibold text-black rounded bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-2">Send Message</button>
        </form>
      </div>
      </div>
    </>
  );
}

export default Contact;
