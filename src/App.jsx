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
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br">
      <ToastContainer/>
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Testimonials/>
      <Footer/>
    </div>
  );
};

export default App;