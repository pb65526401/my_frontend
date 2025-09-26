// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Body } from './components/Body';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-100">
      <Navbar />
      <Hero />
      <Body />
    </div>
  );
};

export default App;