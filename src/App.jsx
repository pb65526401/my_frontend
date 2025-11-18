// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { About } from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Vision from './components/Vision';
import Mission from './components/Mission';
import CEOMessage from './components/CEOMessage';
import ContactUs from './components/ContactUs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <Navbar />
    <Hero />
    <About />
    <Vision /> 
    <Mission />
    <Projects />
    <Testimonials />
    <Footer />
  </div>
);

const StandalonePage = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-white">
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ceo-message" element={<StandalonePage><CEOMessage /></StandalonePage>} />
        <Route path="/contact" element={<StandalonePage><ContactUs /></StandalonePage>} />
      </Routes>
    </Router>
  );
};

export default App;