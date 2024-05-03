import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './Components/Services';
import Counter from './Components/Counter';
import Footer from './Components/Footer';
import ImageCard from './Components/ImageCard';
import TestimonialSlider from './Components/TestimonialSlider';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Header from './Components/Header';


const App = () => {
  return (
    <>
  <Router>
      <Header/> 
      <Routes>
  <Route path="/homely-interior/" element={<Home />} />
  <Route path="/homely-interior/about" element={<About />} />
  <Route path="/homely-interior/counter" element={<Counter />} />
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
