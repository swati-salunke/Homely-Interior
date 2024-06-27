import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Hero.css';
import Slider from 'react-slick';
import image1 from '/images/living-room.jpg';
import image2 from '/images/bedroom.jpg';
import image3 from '/images/kitchen.jpg';

const Hero = ({ contactRef }) => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/Homely-Interior/contact');
  
    // Scroll to contactRef if it exists
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrow:true,
  };

  return (
    <>
 <div className="bg-slate-100 relative box-border max-w-full overflow-x-hidden md:mt-0 mt-16 slider">
  <Slider {...settings} className='max-w-full overflow-x-hidden overflow-y-hidden h-[500px] md:h-auto'>
    <div className="w-full relative h-[500px] md:h-auto">
      <img src={image1} alt="living-room" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="w-4/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <p className="text-3xl sm:text-5xl font-bold text-white fadeIn">Transform your kitchen into a culinary paradise.</p>
        <button
          className="uppercase font-bold text-base mt-10 px-10 py-3 bg-amber-400 text-black rounded-none hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
          onClick={handleContactClick}
        >
          Contact Us
        </button>
      </div>
    </div>
    <div className="w-full relative h-[500px] md:h-auto">
      <img src={image2} alt="living-room" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="w-4/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <p className="text-3xl sm:text-5xl font-bold text-white fadeIn">Sleep in style with our dreamy bedroom designs.</p>
        <button
          className="uppercase font-bold text-base mt-10 px-10 py-3 bg-amber-400 text-black rounded-none hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
          onClick={handleContactClick}
        >
          Contact Us
        </button>
      </div>
    </div>
    <div className="w-full relative h-[500px] md:h-auto">
      <img src={image3} alt="living-room" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="w-4/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <p className="text-3xl sm:text-5xl font-bold text-white fadeIn">Enjoy the comfort of our modern living room arrangements.</p>
        <button
          className="uppercase font-bold text-base mt-10 px-10 py-3 bg-amber-400 text-black rounded-none hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
          onClick={handleContactClick}
        >
          Contact Us
        </button>
      </div>
    </div>
  </Slider>
</div>
    </>
  );
};

export default Hero
