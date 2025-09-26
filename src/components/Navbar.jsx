import React, { useState, useEffect } from 'react';
import logo1 from '../assets/logo1.svg';
import menu_icon from '../assets/menu_icon.svg';
import { testimonialsData, background1, background2, cardLogo1, cardLogo2, cardLogo3, cheifBackground, map } from '../assets/assets';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  const menuData = [
    {
      title: "Home",
      href: "#Home",
      items: []
    },
    {
      title: "Info",
      href: "#Info",
      items: ["CEO", "TEAM", "NEWS/BLOG"]
    },
    {
      title: "Project",
      href: "#Project",
      items: ["ORCZY MALL", "RESIDENTIAL", "COMMERCIAL", "APARTMENT"]
    },
    {
      title: "Retails",
      href: "#Retails",
      items: ["ORCZY CASH & CARRY", "CAFÉ BUDAPEST", "IMSAAL", "PEPPERY BURGER & PIZZA"]
    },
    {
      title: "Buy & Sales",
      href: "#Buy & Sales",
      items: ["RENT", "SALE", "PURCHASE", "PLOT", "INSTALLMENT HOUSE"]
    },
    {
      title: "Media/Library",
      href: "#Media/Library",
      items: ["PICTURE", "VIDEO", "EVENT SPACE", "CLIENT'S REVIEW"]
    },
    {
      title: "Contact",
      href: "#Contact",
      items: ["INFO", "CAREER"]
    }
  ];

  // Generate unique ID for submenu items: #info-ceo, #project-orczy-mall, etc.
  const generateItemId = (parentHref, itemLabel) => {
    const parentKey = parentHref.replace('#', '').toLowerCase();
    const itemKey = itemLabel.toLowerCase().replace(/[^a-z0-9]/g, '-');
    return `${parentKey}-${itemKey}`;
  };

  const navigateToSection = (href, itemLabel = null) => {
    let targetHref = href;
    if (itemLabel) {
      targetHref = `#${generateItemId(href, itemLabel)}`;
    }

    // Update URL
    window.history.pushState(null, '', targetHref);

    // Scroll to target
    const element = document.querySelector(targetHref);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback to parent section if item not found
      const parentElement = document.querySelector(href);
      if (parentElement) {
        parentElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleMouseEnter = (index) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
    setDropdownTimeout(timeoutId);
  };

  const toggleMobileDropdown = (index) => {
    setMobileDropdown(mobileDropdown === index ? null : index);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
    setMobileDropdown(null);
  };

  return (
    <div className='absolute top-0 left-0 w-full z-10 backdrop-blur-sm'>
      <div className='container mx-auto flex justify-between items-center px-4 sm:px-6 py-3 md:px-8 lg:px-12 xl:px-20 bg-transparent'>
        <img src={logo1} alt="Orczy Group Logo" className="h-6 sm:h-7" />
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-wrap justify-center gap-4 lg:gap-7 text-white">
          {menuData.map((menu, index) => (
            <li 
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <a 
                href={menu.href} 
                className="text-white font-medium hover:text-gray-300 whitespace-nowrap flex items-center gap-1"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection(menu.href);
                }}
              >
                {menu.title}
                {menu.items.length > 0 && (
                  <svg 
                    className="w-3 h-3 transition-transform duration-200"
                    style={{ transform: activeDropdown === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </a>
              
              {/* Desktop Dropdown */}
              {menu.items.length > 0 && activeDropdown === index && (
                <div 
                  className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-lg shadow-lg overflow-hidden"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="py-2">
                    {menu.items.map((item, itemIndex) => (
                      <a
                        key={itemIndex}
                        href="#"
                        className="block px-4 py-2.5 text-sm text-gray-800 hover:bg-gray-100 hover:text-black transition-colors duration-150"
                        onClick={(e) => {
                          e.preventDefault();
                          navigateToSection(menu.href, item);
                        }}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <button className='hidden md:block bg-white text-black px-4 py-1.5 sm:px-6 sm:py-2 rounded-full font-medium text-sm sm:text-base hover:bg-gray-100 transition-colors'>
          Sign Up
        </button>

        {/* Mobile menu toggle */}
        {!showMobileMenu && (
          <button
            onClick={() => setShowMobileMenu(true)}
            className='md:hidden p-1.5 rounded-md hover:bg-black/20 transition-colors'
            aria-label="Open menu"
          >
            <img
              src={menu_icon}
              className='w-6 h-6'
              alt="Menu"
            />
          </button>
        )}
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-20 transition-opacity duration-300 ease-in-out ${showMobileMenu ? 'opacity-100 block' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMobileMenu}
      >
        <div 
          className='flex justify-end p-4 sm:p-5'
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={closeMobileMenu}
            className='p-1.5 rounded-md hover:bg-white/20 transition-colors'
            aria-label="Close menu"
          >
            <svg
              className='w-5 h-5 text-white'
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        
        <ul 
          className='flex flex-col items-center gap-3 sm:gap-4 px-4 sm:px-6 mt-8 max-h-[70vh] overflow-y-auto pb-12'
          onClick={(e) => e.stopPropagation()}
        >
          {menuData.map((menu, index) => (
            <li key={index} className="w-full">
              <div className="w-full">
                <button
                  className="flex items-center justify-between w-full px-4 py-3 text-center rounded-xl text-white text-lg sm:text-xl font-medium hover:bg-white/10 transition-colors"
                  onClick={() => {
                    if (menu.items.length > 0) {
                      toggleMobileDropdown(index);
                    } else {
                      navigateToSection(menu.href);
                      closeMobileMenu();
                    }
                  }}
                >
                  <span className="flex-1">{menu.title}</span>
                  {menu.items.length > 0 && (
                    <svg 
                      className="w-4 h-4 transition-transform duration-200 ml-2"
                      style={{ transform: mobileDropdown === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
                
                {/* Mobile Dropdown */}
                {menu.items.length > 0 && mobileDropdown === index && (
                  <div className="mt-2 ml-4 mr-4 rounded-lg bg-white/10 backdrop-blur-sm overflow-hidden">
                    {menu.items.map((item, itemIndex) => (
                      <a
                        key={itemIndex}
                        href="#"
                        className="block px-4 py-2.5 text-white/90 text-base hover:bg-white/10 hover:text-white transition-colors border-b border-white/5 last:border-b-0"
                        onClick={(e) => {
                          e.preventDefault();
                          navigateToSection(menu.href, item);
                          closeMobileMenu();
                        }}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;