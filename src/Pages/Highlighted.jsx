import { useNavigate, useLocation } from 'react-router-dom';

const Highlighted = ({ contactRef }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    if (location.pathname === '/Homely-Interior/contact') {
      // Scroll to contactRef if it exists
      if (contactRef && contactRef.current) {
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/Homely-Interior/contact');
    }
  };

  return (
    <>
      <section className="relative bg-[url('/images/bg-for-testimonial.jpg')] bg-fixed bg-cover bg-center py-32 text-white h-80 sm:h-60 z-0">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="flex flex-col justify-center items-center -mt-16 mx-auto relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-4">Homely Interior Designs</h2>
          <p className="text-lg mb-8">Transforming houses into homes with warmth and style</p>
          <button onClick={handleContactClick} className="bg-white text-gray-800 py-3 px-6 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
            Contact Us
          </button>
        </div>
      </section>
    </>
  );
};

export default Highlighted;