// ServiceSection.js

import React from 'react';

const services = [
  {
    id: 1,
    title: 'Interior Design Consultation',
    description: 'Get expert advice and recommendations tailored to your space and style.',
    icon: 'interior-design.png',
  },
  {
    id: 2,
    title: 'Space Planning',
    description: 'Optimize your space with our professional space planning solutions.',
    icon: 'space-planing.png',
  },
  {
    id: 3,
    title: 'Color Palette Selection',
    description: 'Choose the perfect color scheme to enhance the ambiance of your space.',
    icon: 'color-palette.png',
  },
  {
    id: 4,
    title: 'Furniture Selection',
    description: 'Discover stylish and functional furniture pieces for your home or office.',
    icon: 'wallpaper.png',
  },
  {
    id: 5,
    title: 'Lighting Design',
    description: 'Illuminate your space with our innovative lighting design solutions.',
    icon: 'lighting.png',
  },
  {
    id: 6,
    title: 'Custom Decor Solutions',
    description: 'Personalize your space with custom decor solutions tailored to your taste.',
    icon: 'furniture.png',
  },
];

const Service = () => {
  return (
    <section className="py-24 w-full h-auto md:h-[45rem] flex justify-center items-center bg-slate-100 px-4 sm:px-44">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-20">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.id} className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-950 rounded-full flex justify-center items-center relative hover:bg-rotate">
                <img src={`/images/${service.icon}`} alt={service.title} className="w-14 h-14 mb-4 absolute top-5 transition-transform transform hover:rotate-90" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
