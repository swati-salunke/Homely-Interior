import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faArrowUp as faArrowUpSolid } from '@fortawesome/free-solid-svg-icons'; // Import the solid arrow-up icon

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  return (
    <>
      <div className='w-full md:h-[10rem] h-[23rem] bg-black py-0 sm:py-0 relative'>
        <footer className="w-full text-white">
          <div className="container mx-auto flex flex-col md:flex items-center justify-between px-4">
            {/* Social Icons */}
            <div className="w-5/6 mb-4 md:mb-0 sm:flex flex-row justify-between items-center gap-28">
              <div className="flex items-center w-1/3 py-4">
                <a href="/" className="flex items-center py-5 px-2">
                  <img src="images/work-from-home.png" alt="Logo" className="h-16 w-16 mr-2" />
                  <span className="font-bold text-white text-5xl ml-4">Homely</span>
                </a>
              </div>
              <div className='w-5/6 grid grid-cols-2 sm:grid-cols-4 gap-5'>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 flex">
                  <FontAwesomeIcon icon={faFacebookF} className='text-white px-2 text-2xl' />
                  <p className='text-white font-bold'>Facebook</p>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 flex">
                  <FontAwesomeIcon icon={faTwitter} className='text-white px-2 text-2xl' />
                  <p className='text-white font-bold'>Twitter</p>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 flex">
                  <FontAwesomeIcon icon={faLinkedin} className='text-white px-2 text-2xl' />
                  <p className='text-white font-bold'>LinkedIn</p>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 flex">
                  <FontAwesomeIcon icon={faInstagram} className='text-white px-2 text-2xl' />
                  <p className='text-white font-bold'>Instagram</p>
                </a>
              </div>
            </div>
          </div>
        </footer>

        <div className="w-full flex justify-center items-center bg-yellow-700 h-16 text-white border-t border-white">
          <p className="text-sm">&copy; 2024 Homely.com. All rights reserved.</p>
        </div>

        {showScroll && (
          <button
            onClick={scrollTop}
            className="w-14 h-14 fixed bottom-5 right-5 bg-yellow-600 text-balck p-6 rounded-full hover:bg-black hover:text-white transition duration-300"
          >
            <FontAwesomeIcon icon={faArrowUpSolid} className="text-xl -mt-2 mb-2 -ml-1" /> {/* Use faArrowUpSolid for solid arrow */}
          </button>
        )}
      </div>
    </>
  );
};

export default Footer;
