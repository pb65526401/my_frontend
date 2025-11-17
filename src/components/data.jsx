
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  testimonialsData, 
  background1, 
  background2, 
  cardLogo1, 
  cardLogo2, 
  cardLogo3, 
  cheifBackground, 
  map, 
  brand_img
} from '../assets/assets';

export const Body = () => {
  const testimonialRefs = useRef(Array(testimonialsData.length).fill(null));
  const [showScrollButtons, setShowScrollButtons] = useState(
    Array(testimonialsData.length).fill(false)
  );

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const buttons = testimonialRefs.current.map((el) => {
        return el && el.scrollHeight > el.clientHeight;
      });
      setShowScrollButtons(buttons);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollDown = (index) => {
    const el = testimonialRefs.current[index];
    if (!el) return;

    const targetScroll = el.scrollHeight - el.clientHeight;
    el.scrollTo({ top: targetScroll, behavior: "smooth" });

    setTimeout(() => {
      setShowScrollButtons(prev => {
        const updated = [...prev];
        updated[index] = false;
        return updated;
      });
    }, 800);
  };

  return (
    <div className="w-full bg-white "> {/* 👈 No background here! */}
      {/* Who We Are */}
      <section id="Info" className="py-16 md:py-24 px-4 md:px-8 " data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-gray-800">About <span className="underline underline-offset-4 under font-light">Our Brand</span></h1>
          </div>
          <div>
            <p className="text-gray-800 max-w-fit text-center mb-8 flex flex-col items-center justify-center container mx-auto p-2 md:px-20 lg:px-32 w-full overflow-hidden">Passionate About Properties, Dedicated to Your Vision</p>
            <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
              <img src={brand_img} alt="" className="w-full sm:w-1/2 max-w-lg"/>
            </div>
            <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
              <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
                <div>
                <p className="text-4xl font-medium text-gray-800">10+</p>
                <p>Years of Excellence</p>
                </div>                
                <div>
                <p className="text-4xl font-medium text-gray-800">12+</p>
                <p>Projects Complete</p>
                </div>
                <div>
                <p className="text-4xl font-medium text-gray-800">20+</p>
                <p>Mn. Sq. Ft. Delivered</p>
                <div>
                <p className="text-4xl font-medium text-gray-800">25+</p>
                <p>Ongoing Projects</p>
                </div>
                </div>
              </div>
            </div>
            <p className="text-gray-800 max-w-4xl mx-auto text-lg leading-relaxed">
              Our Group is a multinational conglomerate that leverages private equity to finance a range of lifestyle projects in Pakistan and Central Eastern Europe. We recognise that uncertain times make it imperative for investors to have access to stable, credible opportunities to generate multiple income streams. We also recognise that the modern consumer demands products and services that do not compromise on quality, convenience and affordability. The missing links between investors and promising ideas are scarcity of time, knowledge and relevant professional networks. In a world where investment is becoming more institutionalised, securitised and professionalised, investors are increasingly deterred by the high transaction costs involved. Our Founding Partner, Usman Khawar, recognised this information gap in the market back in 2012.
            </p>
            <p className="text-gray-800 max-w-4xl mx-auto text-lg leading-relaxed">
              To overcome this information asymmetry, they wanted to forge long-standing partnerships with investors who want value today, tomorrow and for decades to come. Seven years on, we are finally linking investors and ideas for greater economic and social change through a platform that is trusted and universally accessible. This is the ethos of the Orczy Group, as a point of convergence for investors and ideas.<br /><br />
              Quality sells and sells well. Our completed projects have proven lucrative to their investors while the ensuing products and services are emerging as strong brands in their own right. A major positive externality are the countless jobs we are generating in the process, both in Pakistan and in Europe.<br /><br />
              The Orczy Group was founded in 2017 and currently employs over 150 staff members across four project offices and two continents.
            </p>
          </div>
        </div>
      </section>

      {/* Project */}
      <section id="Project" className="py-16 md:py-24 bg-gray-50 px-4 md:px-8" data-aos="fade-up" data-aos-delay="200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Project</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[background1, background2].map((img, idx) => (
              <div key={idx} className="aspect-[4/3] md:aspect-video overflow-hidden rounded-xl shadow-lg">
                <img
                  src={img}
                  alt={`Orczy Apartments Project View ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 md:py-24 px-4 md:px-8" data-aos="fade-up" data-aos-delay="400">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                logo: cardLogo1,
                title: "Our Line of Sight",
                text: "The Orczy Group’s mantra is ‘decisive action’ – we seek clients who know what they want and team members with a clear vision of how to get there.",
              },
              {
                logo: cardLogo2,
                title: "Our Scope",
                text: "Our project coverage is impressive – we’re the first Pakistani firm to actively explore, launch and grow an organic investment channel in Central Eastern Europe.",
              },
              {
                logo: cardLogo3,
                title: "Our Scorecard",
                text: "Our progress speaks for itself – in less than 3 years we have grown our investor base by over 10x and have launched over four major businesses across two continents.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="mb-4 flex justify-center">
                  <img
                    src={card.logo}
                    alt={card.title}
                    className="h-12 w-auto"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    <i>{card.title}</i>
                  </h3>
                  <p className="text-gray-600">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Quote */}
      <section className="py-16 md:py-24 bg-blue-50 px-4 md:px-8" data-aos="fade-up" data-aos-delay="600">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="italic text-lg md:text-xl text-gray-800 px-4">
            <p>
              Investing in the world’s oldest and largest asset class – real estate – makes even more sense today. 15 years of managing and developing residential and commercial real estate has taught me the importance of choosing the right location, at the right time. Time and time again projects that value this principle, succeed, rewarding both developers and their clients.
            </p>
            <footer className="mt-6 text-gray-700 font-medium">
              — Usman Khawar, Chief Executive Officer (CEO)
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        id="Testimonials" 
        className="py-16 md:py-24 px-4 md:px-8 relative" 
        data-aos="fade-up" 
        data-aos-delay="800"
        style={{
          backgroundImage: `url(${cheifBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-opacity-60"></div>
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Testimonials</h2>
          </div>
          <div className="space-y-8">
            {testimonialsData.map((testimonial, index) => (
              <div key={testimonial.id} className="bg-blue-50 bg-opacity-95 p-6 rounded-xl shadow-lg">
                <div className="flex flex-col md:flex-row items-start gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/64?text=Client";
                      e.target.alt = "Client Avatar";
                    }}
                  />
                  <div>
                    <h5 className="font-semibold text-gray-900">{testimonial.title}</h5>
                    <h6 className="text-gray-700">{testimonial.name}</h6>
                  </div>
                </div>
                <div className="relative">
                  <div
                    className="testimonial-content max-h-40 overflow-hidden relative"
                    ref={(el) => (testimonialRefs.current[index] = el)}
                    dangerouslySetInnerHTML={{ __html: testimonial.text }}
                  />
                  {showScrollButtons[index] && (
                    <button
                      className="mt-3 text-blue-600 font-medium hover:text-blue-800 flex items-center gap-1"
                      onClick={() => handleScrollDown(index)}
                      aria-label="Scroll down to read more"
                    >
                      ↓ Scroll Down to Read More
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section id="Coverage" className="py-16 md:py-24 bg-gray-50 px-4 md:px-8" data-aos="fade-up" data-aos-delay="1000">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Coverage</h2>
          </div>
          <div className="flex justify-center">
            <img
              src={map}
              alt="Orczy Group Global Coverage Map"
              className="w-full max-w-5xl h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};