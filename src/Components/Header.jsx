import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 40) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="bg-yellow-700 text-white py-3 px-4 flex justify-between items-center">
  <div className='hidden md:flex justify-between gap-8'>
    <p><FontAwesomeIcon icon={faMapMarkerAlt} className='text-yellow-500 px-4 text-xl'/>123 Main St, Hometown, USA</p>
    <p><FontAwesomeIcon icon={faPhone} className='text-yellow-500 px-4 text-xl'/>+1 (555) 123-4567</p>
  </div>
  <div className="hidden md:flex gap-4">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
      <FontAwesomeIcon icon={faFacebookF} className='text-yellow-500 px-2 text-xl' />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
      <FontAwesomeIcon icon={faTwitter} className='text-yellow-500 px-2 text-xl'/>
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
      <FontAwesomeIcon icon={faInstagram} className='text-yellow-500 px-2 text-xl'/>
    </a>
  </div>
</div>

<nav className={`w-full text-white fixed top-0 sm:top-10 z-10 transition-colors duration-300 ${scrolled ? 'bg-black md:top-0' : 'bg-black md:bg-black '}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo and brand name */}
          <div className="flex items-center">
            <a href="/" className="flex items-center py-5 px-2">
              <img src="/images/work-from-home.png" alt="Logo" className="h-14 w-14 mr-2" />
              <span className="font-bold text-white text-4xl ml-4">Homely</span>
            </a>
          </div>
          <div className="md:flex md:items-center md:space-x-10 font-normal text-xl hidden">
          <a href="/" className="py-5 px-3 hover:text-yellow-400 block">Home</a>
          <a href="/about" className="py-5 px-3 hover:text-yellow-400 block">About</a>
          <a href="/services" className="py-5 px-3 hover:text-yellow-400 block">Service</a>
          <a href="/imagecard" className="py-5 px-3 hover:text-yellow-400 block">Gallery</a>
          <a href="/testimonialslider" className="py-5 px-3 hover:text-yellow-400 block">Testimonial</a>
          <a href="contact" className="py-5 px-3 hover:text-yellow-400 block">Contact</a>
        </div>
          {/* Toggle button */}
          <div className="md:hidden">
            <button onClick={() => setIsNavOpen((prev) => !prev)}>
              <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} className="text-3xl"/>
            </button>
          </div>
        </div>

        {/* Toggled menu */}
        <div className={`md:hidden ${isNavOpen ? 'flex flex-col items-start mt-1 text-lg py-4' : 'hidden'}`}>
          <a href="/" className="py-4 px-3 hover:text-yellow-400 block">Home</a>
          <a href="/about" className="py-4 px-3 hover:text-yellow-400 block">About</a>
          <a href="/services" className="py-4 px-3 hover:text-yellow-400 block">Service</a>
          <a href="/imagecard" className="py-4 px-3 hover:text-yellow-400 block">Gallery</a>
          <a href="/testimonialslider" className="py-5 px-3 hover:text-yellow-400 block">Testimonial</a>
          <a href="contact" className="py-4 px-3 hover:text-yellow-400 block">Contact</a>
        </div>

        {/* Desktop menu */}
        
      </div>
    </nav>
    </>
  )
}

export default Header;
