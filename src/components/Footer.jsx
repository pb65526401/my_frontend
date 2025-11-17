// src/components/Footer.jsx
import React from 'react';
import { toast } from 'react-toastify';
import dark_logo from '../assets/logo1.svg'; // or your actual logo filename

const Footer = () => {
  const [result, setResult] = React.useState("");
  
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a8b98def-8a5f-4991-bb39-2b470402d967");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult(data.message || "Error submitting form");
    }
  };

  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto'>
        
        <div className='flex flex-col lg:flex-row justify-between items-start'>
         
          <div className='w-full lg:w-1/4 mb-8 lg:mb-0'>
            <div className='text-center lg:text-left mb-6'>
              <img 
                src={dark_logo} 
                alt="Orczy Group Logo" 
                className="h-10 w-auto mx-auto lg:mx-0 mb-4"
              />
              <p className="text-gray-300 text-sm max-w-xs mx-auto lg:mx-0">
                Crafting spaces, building legacies. Premium real estate solutions with a focus on quality, innovation, and customer satisfaction.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className='grid grid-cols-3 md:grid-cols-3 gap-0  mb-8 lg:mb-0'>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#Home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#Info" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#Project" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
                <li><a href="#Testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#Retails" className="text-gray-300 hover:text-white transition-colors">Retails</a></li>
                <li><a href="#Buy & Sales" className="text-gray-300 hover:text-white transition-colors">Buy & Sales</a></li>
                <li><a href="#Media/Library" className="text-gray-300 hover:text-white transition-colors">Media</a></li>
                <li><a href="#Contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-300">
                <li>123 Business Street</li>
                <li>Budapest, Hungary</li>
                <li>contact@orczygroup.com</li>
                <li>+1 234 567 8900</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className='px-6 w-full lg:w-1/3'>
            <h3 className="text-white font-semibold mb-4 text-center lg:text-left">Get In Touch</h3>
            <form onSubmit={onSubmit} className='text-gray-600'>
              <div className='flex flex-col space-y-4'>
                <input 
                  className='w-full border border-gray-600 rounded py-2 px-4 bg-gray-800 text-white placeholder-gray-400' 
                  type="text" 
                  name='Name' 
                  placeholder='Your Name' 
                  required
                />
                <input 
                  className='w-full border border-gray-600 rounded py-2 px-4 bg-gray-800 text-white placeholder-gray-400' 
                  type="email" 
                  name='Email' 
                  placeholder='Your Email' 
                  required
                />
                <textarea 
                  className='w-full border border-gray-600 rounded py-2 px-4 bg-gray-800 text-white placeholder-gray-400 h-24 resize-none' 
                  name="Message" 
                  placeholder='Your Message'
                  required
                ></textarea>
                <button 
                  className='bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors'
                  type="submit"
                >
                  {result ? result : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-gray-700 mt-12 pt-8 text-center'>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Orczy Group. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;