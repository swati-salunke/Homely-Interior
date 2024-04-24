import React from 'react';

const About = () => {
  return (
    <div className="flex items-center justify-center py-10 px-4 md:px-8 lg:px-12  bg-slate-100">
      <div className="w-full md:w-3xl rounded-lg md:p-8 md:flex items-center justify-center">
        <div className="flex flex-col items-start mb-4">
          <div className="h-0.5 w-16 bg-yellow-500 mr-4 font-bold"></div>
          <h2 className="text-3xl tracking-wider uppercase font-bold text-black mt-6 mb-6 text-monteserrat">About Us</h2>
       
        <h3 className="text-lg uppercase font-light tracking-wider leading-6 text-black mb-4 text-monteserrat">Bring home beautiful interiors that fit your budget. Experience unmatched quality & timely delivery with Homely

</h3>
        <p className="text-base leading-loose text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio
          mauris. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Suspendisse potenti. Morbi leo risus,
          porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur
          est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia
          quam venenatis vestibulum.
        </p>
        <button className="uppercase font-bold text-base mt-7 px-10 py-3 bg-amber-400 text-black md:font-semibold rounded-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50">
          Contact Us
        </button>
        </div>
        <img
          className="mt-8 rounded-lg object-cover"
          src="images/about-interior.jpg" // Replace with your image path
          alt="About Us Image"
        />
      </div>
    </div>
  );
};

export default About;
