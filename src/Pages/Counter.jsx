import React, { useState, useEffect, useRef } from 'react';

const Counter = () => {
  const [transformationProjects, setTransformationProjects] = useState(0);
  const [happyClients, setHappyClients] = useState(0);
  const [expertDesigners, setExpertDesigners] = useState(0);
  const [projectsDelivered, setProjectDelivered] = useState(0);

  const [countersIncremented, setCountersIncremented] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // When 50% of the target is visible
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersIncremented) {
          const target = entry.target;
          const observer = new IntersectionObserver(() => {
            const incrementTransformationProjects = () => {
              setTransformationProjects(prevCount => {
                const increment = Math.ceil(200 / 100); // Counter increases to 200
                const nextCount = Math.min(prevCount + increment, 200);
                return nextCount;
              });
            };

            const incrementHappyClients = () => {
              setHappyClients(prevCount => {
                const increment = Math.ceil(300 / 100); // Counter increases to 300
                const nextCount = Math.min(prevCount + increment, 300);
                return nextCount;
              });
            };

            const incrementExpertDesigners = () => {
              setExpertDesigners(prevCount => {
                const increment = Math.ceil(20 / 100); // Counter increases to 300
                const nextCount = Math.min(prevCount + increment, 20);
                return nextCount;
              });
            };

            const incrementProjectsDelivered = () => {
              setProjectDelivered(prevCount => {
                const increment = Math.ceil(400 / 100); // Counter increases to 300
                const nextCount = Math.min(prevCount + increment, 400);
                return nextCount;
              });
            };

            const interval = setInterval(() => {
              incrementTransformationProjects();
              incrementHappyClients();
              incrementExpertDesigners();
              incrementProjectsDelivered();
            }, 100); // Update counters every second

            return () => clearInterval(interval); // Clean up interval
          }, options);
          observer.observe(target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [countersIncremented]);

  return (
<div ref={counterRef} className="counter-section flex flex-col gap-16 bg-[url('/images/counter.jpg')] bg-fixed bg-center bg-no-repeat bg-cover px-3 md:px-32 w-full h-full py-10 md:h-96 journey-container relative overflow-hidden items-center justify-center -z-0">
          <div className="journey-overlay absolute inset-0 bg-black opacity-75"></div>
          <div className='z-10'>
            <h2 className='text-3xl md:text-5xl font-bold text-white text-center'>Explore Homely Design with Numbers</h2>
          </div>
          <div className='flex flex-col items-center md:flex-row md:justify-center md:gap-32 w-full justify-center gap-4'>
          <div className="counter text-white z-10 flex flex-col items-center gap-6">
      <div className='flex'>
        <span className='text-6xl font-bold text-yellow-500'>{transformationProjects}</span>
        <span className="text-5xl font-bold text-yellow-500">+</span>
        </div>
        <p className='text-xl'>Transformation Projects</p>
      </div>
      <div className="counter text-white z-10 flex flex-col items-center gap-6">
      <div className='flex'>
        <span className='text-6xl font-bold text-yellow-500'>{happyClients}</span>
        <span className="text-5xl font-bold text-yellow-500">+</span>
        </div>
        <p className='text-xl'>Happy Clients</p>
      </div>
      <div className="counter text-white z-10 flex flex-col items-center gap-6">
      <div className='flex'>
        <span className='text-6xl font-bold text-yellow-500'>{expertDesigners}</span>
        <span className="text-5xl font-bold text-yellow-500">+</span>
        </div>
        <p className='text-xl'>Expert Designers</p>
      </div>
      <div className="counter text-white z-10 flex flex-col items-center gap-6">
      <div className='flex'>
        <span className='text-6xl font-bold text-yellow-500'>{projectsDelivered}</span>
        <span className="text-5xl font-bold text-yellow-500">+</span>
        </div>
        <p className='text-xl'>Projects Delivered</p>
      </div>
      </div>
      </div>
  );
};

export default Counter;
