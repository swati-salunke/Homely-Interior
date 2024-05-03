import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from './Pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './Pages/Services';
// import Counter from './Pages/Counter';
import Footer from './Components/Footer';
import ImageCard from './Pages/ImageCard';
import TestimonialSlider from './Pages/TestimonialSlider';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Header from './Components/Header';


const App = () => {
  return (
    <>
  <Router>
      <Header/> 
      <Routes>
        <Route path="/Homely-Interior/" element={<Home />} />
        <Route path="/Homely-Interior/about" element={<About />} />
        <Route path="/Homely-Interior/services" element={<Services />} />
        <Route path="/Homely-Interior/imagecard" element={<ImageCard />} />
        <Route path="/Homely-Interior/testimonialslider" element={<TestimonialSlider />} />
        <Route path="/Homely-Interior/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
