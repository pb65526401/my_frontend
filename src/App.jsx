// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { About } from './components/About';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import Vision from './components/Vision';
import Mission from './components/Mission';
import CEOMessage from './components/CeoMessage';
const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <ToastContainer />
      <Navbar />
      <Hero />
      <About />
      <Vision /> 
      <Mission/>
      <CEOMessage/>
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;