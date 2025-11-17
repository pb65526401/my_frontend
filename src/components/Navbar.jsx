// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import logo1 from '../assets/logo.bmp';
import menu_icon from '../assets/menu_icon.svg';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [foodCourtOpenIndex, setFoodCourtOpenIndex] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  const menuData = [
    { title: 'Home', href: '#Home', items: [] },
    { title: 'Testimonials', href: '#Testimonials', items: [] },
    { title: 'Info', href: '#Info', items: ['CEO', 'TEAM', 'NEWS/BLOG'] },
    {
      title: 'Project',
      href: '#Project',
      items: ['ORCZY MALL', 'RESIDENTIAL', 'COMMERCIAL', 'APARTMENT'],
    },
    {
      title: 'Retails',
      href: '#Retails',
      items: [
        'Orczy Cash & Carry',
        "Imsaal's",
        {
          title: 'Food Court',
          subItems: [
            'Cafe Budapest',
            'Chill R Grill',
            'Peppery Chicken & Pizza',
            'Bawarchi',
          ],
        },
      ],
    },
    {
      title: 'Buy & Sales',
      href: '#Buy-Sales',
      items: ['RENT', 'SALE', 'PURCHASE', 'PLOT', 'INSTALLMENT HOUSE'],
    },
    {
      title: 'Media/Library',
      href: '#Media-Library',
      items: ['PICTURE', 'VIDEO', 'EVENT SPACE', "CLIENT'S REVIEW"],
    },
    {
      title: 'Contact',
      href: '#Contact',
      items: ['INFO', 'CAREER'],
    },
  ];

  const isFoodCourtItem = (item) => typeof item === 'object' && item.title;

  const generateItemId = (parentHref, itemLabel) => {
    const parentKey = parentHref.replace('#', '').toLowerCase();
    const itemKey = itemLabel.toLowerCase().replace(/[^a-z0-9\s]/g, '-').replace(/\s+/g, '-');
    return `${parentKey}-${itemKey}`;
  };

  const navigateToSection = (href, itemLabel = null) => {
    let targetHref = href;
    if (itemLabel) targetHref = `#${generateItemId(href, itemLabel)}`;

    window.history.pushState(null, '', targetHref);

    const element = document.querySelector(targetHref);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      const parentElement = document.querySelector(href);
      if (parentElement) parentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMouseEnter = (index) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  const toggleMobileDropdown = (index) => {
    setMobileDropdown(mobileDropdown === index ? null : index);
    if (mobileDropdown !== index) setFoodCourtOpenIndex(null);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
    setMobileDropdown(null);
    setFoodCourtOpenIndex(null);
  };

  // Render dropdown items (desktop & mobile)
  const renderDropdownItem = (menu, item, itemIndex, isMobile = false) => {
    if (typeof item === 'string') {
      return (
        <a
          key={itemIndex}
          href="#"
          className={`block px-4 py-3 text-sm transition-all duration-200 ${
            isMobile 
              ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-l-2 border-transparent hover:border-blue-500' 
              : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md'
          }`}
          onClick={(e) => {
            e.preventDefault();
            navigateToSection(menu.href, item);
            if (isMobile) closeMobileMenu();
          }}
        >
          <span className="flex items-center">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            {item}
          </span>
        </a>
      );
    } else if (isFoodCourtItem(item)) {
      return (
        <div key={itemIndex} className="relative">
          {isMobile ? (
            <>
              <button
                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex justify-between items-center transition-colors duration-200 border-l-2 border-transparent hover:border-blue-500"
                onClick={() => setFoodCourtOpenIndex(foodCourtOpenIndex === itemIndex ? null : itemIndex)}
              >
                <span className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></div>
                  {item.title.trim()}
                </span>
                <svg
                  className="w-4 h-4 transition-transform duration-200"
                  style={{ transform: foodCourtOpenIndex === itemIndex ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  foodCourtOpenIndex === itemIndex ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="ml-8 mt-1 space-y-1 border-l border-blue-100 pl-4">
                  {item.subItems.map((sub, si) => (
                    <a
                      key={si}
                      href="#"
                      className="block text-sm text-gray-600 hover:text-blue-600 py-2 transition-colors pl-2 hover:pl-4 border-l-2 border-transparent hover:border-blue-400"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToSection(menu.href, sub);
                        closeMobileMenu();
                      }}
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              </div>
            </>
          ) : (
            // Desktop: Food Court submenu - FIXED POSITIONING
            <div className="relative">
              <button
                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex justify-between items-center transition-colors duration-200 rounded-md group"
                onMouseEnter={() => {
                  if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                  setFoodCourtOpenIndex(itemIndex);
                }}
                onMouseLeave={() => {
                  dropdownTimeoutRef.current = setTimeout(() => setFoodCourtOpenIndex(null), 150);
                }}
              >
                <span className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></div>
                  {item.title.trim()}
                </span>
                <svg
                  className="w-3 h-3 text-gray-400 transition-transform duration-200"
                  style={{ transform: foodCourtOpenIndex === itemIndex ? 'rotate(90deg)' : 'rotate(0deg)' }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Food Court Submenu - Fixed positioning to appear below */}
              <div
                className={`absolute left-0 top-full w-56 bg-white rounded-lg shadow-xl border border-gray-100 z-30 transition-all duration-300 ease-out ${
                  foodCourtOpenIndex === itemIndex
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
                onMouseEnter={() => {
                  if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                  setFoodCourtOpenIndex(itemIndex);
                }}
                onMouseLeave={() => {
                  dropdownTimeoutRef.current = setTimeout(() => setFoodCourtOpenIndex(null), 150);
                }}
              >
                <div className="p-2">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-3 py-2 border-b border-gray-100">
                    Restaurant Partners
                  </div>
                  {item.subItems.map((sub, si) => (
                    <a
                      key={si}
                      href="#"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors group/item"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToSection(menu.href, sub);
                      }}
                    >
                      <span className="flex items-center">
                        <div className="w-1 h-1 bg-gray-300 rounded-full mr-3 group-hover/item:bg-blue-400 transition-colors"></div>
                        {sub}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-white/90 backdrop-blur-sm shadow-sm'
    }`}>
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo1} alt="Orczy Group Logo" className="h-7 sm:h-8 md:h-9 transition-all duration-300" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-1">
          {menuData.map((menu, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={menu.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-1 ${
                  activeDropdown === index
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection(menu.href);
                }}
              >
                <span>{menu.title}</span>
                {menu.items.length > 0 && (
                  <svg
                    className="w-3 h-3 transition-transform duration-200"
                    style={{
                      transform: activeDropdown === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </a>

              {/* Desktop Dropdown */}
              {menu.items.length > 0 && activeDropdown === index && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-30 animate-in fade-in-0 zoom-in-95"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="p-2">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-3 py-2 border-b border-gray-100 mb-1">
                      {menu.title} Menu
                    </div>
                    {menu.items.map((item, itemIndex) =>
                      renderDropdownItem(menu, item, itemIndex, false)
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <button className="hidden lg:block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setShowMobileMenu(true)}
          className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200 group"
          aria-label="Open menu"
        >
          <img src={menu_icon} className="w-6 h-6 transition-transform group-hover:scale-110" alt="Menu" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ease-out ${
          showMobileMenu
            ? 'opacity-100 visible backdrop-blur-sm'
            : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={closeMobileMenu}
      >
        <div 
          className={`absolute inset-y-0 right-0 w-80 max-w-full bg-white shadow-2xl transform transition-transform duration-300 ${
            showMobileMenu ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-gray-50">
            <div className="flex items-center space-x-3">
              <img src={logo1} alt="Orczy Group Logo" className="h-8" />
              <span className="text-lg font-bold text-gray-800">Orczy Group</span>
            </div>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-200"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="h-full overflow-y-auto pb-20">
            <ul className="p-4 space-y-2">
              {menuData.map((menu, index) => (
                <li key={index} className="w-full">
                  <div className="w-full">
                    <button
                      className={`flex items-center justify-between w-full px-4 py-4 text-left rounded-xl transition-all duration-200 ${
                        mobileDropdown === index
                          ? 'bg-blue-50 text-blue-600 shadow-sm'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => {
                        if (menu.items.length > 0) {
                          toggleMobileDropdown(index);
                        } else {
                          navigateToSection(menu.href);
                          closeMobileMenu();
                        }
                      }}
                    >
                      <span className="font-medium">{menu.title}</span>
                      {menu.items.length > 0 && (
                        <svg
                          className="w-4 h-4 transition-transform duration-200"
                          style={{
                            transform: mobileDropdown === index ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </button>

                    {/* Mobile Dropdown */}
                    {menu.items.length > 0 && mobileDropdown === index && (
                      <div className="mt-2 ml-2 mr-2 rounded-lg bg-white shadow-inner border border-gray-100 overflow-hidden animate-in fade-in-0 slide-in-from-top-2">
                        {menu.items.map((item, itemIndex) =>
                          renderDropdownItem(menu, item, itemIndex, true)
                        )}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Mobile CTA Section */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white to-gray-50 border-t border-gray-100">
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3.5 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95">
                Contact Sales
              </button>
              <p className="text-center text-xs text-gray-500 mt-3">
                Premium Real Estate & Retail Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;