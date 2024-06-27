import { useRef } from 'react';
import Hero from './Hero'
import About from './About'
import Counter from './Counter'
import Services from './Services'
import Highlighted from './Highlighted'
import ImageCard from './ImageCard'
import TestimonialSlider from './TestimonialSlider'
import Contact from './Contact'



const Home = () => {
  const contactRef = useRef(null);
  return (
    <>
      <Hero />
      <About />
      <Counter />
      <Services />
      <Highlighted contactRef={contactRef}/>
      <ImageCard />
      <TestimonialSlider />
      <Contact ref={contactRef}/>
    </>
  )
}

export default Home
