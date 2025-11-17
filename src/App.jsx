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
<<<<<<< HEAD
import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
=======
>>>>>>> fc8d9cd00782a615263fe055e87ceaaced48fcf4

const App = () => {
 
  useEffect(() => {
		createChat({
			webhookUrl: 'https://ahmadkhan526401.app.n8n.cloud/webhook/e104e40e-6134-4825-a6f0-8a646d882662/chat'
		});
	}, []);
 
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