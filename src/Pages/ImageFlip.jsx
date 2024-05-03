import React from 'react';
import { Transition } from '@headlessui/react';

const ImageFlip = ({ src, alt, text, description }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <>
     
        <div
          className="relative w-72 h-72 cursor-pointer perspective-1000"
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
        >
          {/* Front side */}
          <Transition
            as="div"
            show={!isFlipped}
            enter="transition duration-500 ease-out"
            enterFrom="transform rotate-y-180 opacity-0"
            enterTo="transform rotate-y-0 opacity-100"
            leave="transition duration-500 ease-in"
            leaveFrom="transform rotate-y-0 opacity-100"
            leaveTo="transform rotate-y-180 opacity-0"
            className="absolute inset-0 w-full h-full bg-gray-200 flex items-center justify-center transform perspective-1000 **transform-style: preserve-3d**"
          >
            <div className="relative w-72 h-72 **transform-style: preserve-3d**">
              <img src={src} alt={alt} className="max-w-full h-full object-cover" />
              <div className="absolute top-0 bottom-0 left-0 w-full bg-black bg-opacity-50 font-bold text-xl text-yellow-500 inset-1 flex justify-center items-center">
                {text}
              </div>
            </div>
          </Transition>

          {/* Back side */}
          <Transition
            as="div"
            show={isFlipped}
            enter="transition duration-500 ease-out"
            enterFrom="transform rotate-y-180 opacity-0"
            enterTo="transform rotate-y-0 opacity-100"
            leave="transition duration-500 ease-in"
            leaveFrom="transform rotate-y-0 opacity-100"
            leaveTo="transform rotate-y-180 opacity-0"
            className="absolute inset-0 w-full h-full bg-gray-200 flex items-center justify-center transform perspective-1000 **transform-style: preserve-3d**" // Added here
          >
            <div className="text-white text-center p-2 bg-black bg-opacity-75 w-full h-full flex justify-center items-center">
              {description}
            </div>
          </Transition>
        </div>
  
    </>
  );
};

export default ImageFlip;

