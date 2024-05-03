import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample testimonial data (replace with your actual data)
const testimonials = [
  {
    name: 'John Doe',
    company: 'Awesome Company',
    quote: 'This product is amazing! It has revolutionized my workflow.',
    image: 'images/client1.png',
  },
  {
    name: 'Jane Smith',
    company: 'Fantastic Inc.',
    quote: 'I highly recommend this service. The support team is top-notch.',
    image: 'images/client2.png',
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
    <div className="relative bg-[url('/images/highlighted.jpg')] overflow-hidden bg-fixed bg-cover bg-center py-72 text-white h-80 sm:h-96 z-0 flex flex-col item-center justify-center text-center">
    <div className="absolute inset-0 bg-black opacity-65"></div>
    <h2 className='text-3xl sm:text-5xl mb-16 text-white z-10'>What Client Say?</h2>
    <Slider {...settings}>
      {testimonials.map((testimonial) => (
        <div key={testimonial.name} className="sm:px-40 text-center">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="rounded-full w-24 h-24 mx-auto mb-4"
          />
          <p className="text-xl font-medium">{testimonial.name}</p>
          <p className="text-gray-400">{testimonial.company}</p>
          <p className="mt-4 text-lg">"{testimonial.quote}"</p>
        </div>
      ))}
    </Slider>
    </div>
    </>
  );
};

export default TestimonialSlider;
