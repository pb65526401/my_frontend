// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo1 from '../assets/logo.bmp';
import menu_icon from '../assets/menu_icon.svg';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileMainDropdown, setMobileMainDropdown] = useState(null);
  const [isFoodCourtOpen, setIsFoodCourtOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState({});
  const hoverTimeouts = useRef({});

  const OPEN_DELAY = 50;
  const CLOSE_DELAY = 50;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const menuData = [
    { title: 'Home', href: '/', items: [] },
    { title: 'Testimonials', href: '#Testimonials', items: [] },
    {
      title: 'Info',
      href: '#Info',
      items: [
        { label: 'CEO', page: '/ceo-message' },
        'TEAM',
        'NEWS/BLOG'
      ],
    },
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
      href: '/contact',
      items: ['INFO', 'CAREER'],
    },
  ];

  const navigateToSection = (targetHref) => {
    if (targetHref.startsWith('#')) {
      window.history.pushState(null, '', targetHref);
      const el = document.querySelector(targetHref);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToLogin = () => {
    window.location.href = '/login';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileMainDropdown(null);
    setIsFoodCourtOpen(false);
  };

  const toggleMainDropdown = (index) => {
    if (mobileMainDropdown === index) {
      setMobileMainDropdown(null);
      setIsFoodCourtOpen(false);
    } else {
      setMobileMainDropdown(index);
      setIsFoodCourtOpen(false);
    }
  };

  const toggleFoodCourt = () => {
    setIsFoodCourtOpen(!isFoodCourtOpen);
  };

  const isHomePage = location.pathname === '/';

  return (
    <>
      {/* Desktop Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo + Pakistan / Hungary (LEFT SIDE) */}
            <div className="flex items-center space-x-3">
              <Link to="/">
                <img src={logo1} alt="Orczy Group Logo" className="h-7 sm:h-8" />
              </Link>
              {/* White-themed, subtle "Pakistan / Hungary" label */}
              <span className="text-xs font-medium text-gray-500 hidden sm:block">
                Pakistan / Hungary
              </span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuData.slice(0, -1).map((menu, i) => {
                const hasDropdown = menu.items.length > 0;
                const handleMouseEnter = () => {
                  if (!hasDropdown) return;
                  if (hoverTimeouts.current[i]) clearTimeout(hoverTimeouts.current[i]);
                  if (hoverTimeouts.current[`close-${i}`]) {
                    clearTimeout(hoverTimeouts.current[`close-${i}`]);
                    delete hoverTimeouts.current[`close-${i}`];
                  }
                  hoverTimeouts.current[i] = setTimeout(() => {
                    setDropdownVisible(prev => ({ ...prev, [i]: true }));
                  }, OPEN_DELAY);
                };

                const handleMouseLeave = () => {
                  if (hoverTimeouts.current[i]) clearTimeout(hoverTimeouts.current[i]);
                  const closeTimer = setTimeout(() => {
                    setDropdownVisible(prev => {
                      const updated = { ...prev };
                      delete updated[i];
                      return updated;
                    });
                  }, CLOSE_DELAY);
                  hoverTimeouts.current[`close-${i}`] = closeTimer;
                };

                return (
                  <div
                    key={i}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {menu.href.startsWith('/') ? (
                      <Link
                        to={menu.href}
                        className="px-3.5 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-lg"
                      >
                        {menu.title}
                      </Link>
                    ) : isHomePage ? (
                      <button
                        className="px-3.5 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-lg"
                        onClick={() => navigateToSection(menu.href)}
                      >
                        {menu.title}
                      </button>
                    ) : (
                      <Link
                        to="/"
                        className="px-3.5 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-lg"
                      >
                        {menu.title}
                      </Link>
                    )}

                    {hasDropdown && (
                      <div
                        className={`absolute top-full left-0 mt-2 w-60 bg-white rounded-lg shadow-lg border border-gray-200 z-40 transition-opacity duration-200 ${
                          dropdownVisible[i] ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`}
                      >
                        <div className="p-2">
                          {menu.items.map((item, idx) => {
                            if (typeof item === 'string') {
                              return (
                                <button
                                  key={idx}
                                  className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                                  onClick={() => {
                                    if (isHomePage) navigateToSection(menu.href, item);
                                    else window.location.href = '/';
                                  }}
                                >
                                  {item}
                                </button>
                              );
                            } else if (item.title === 'Food Court') {
                              return (
                                <div key="fc" className="relative group">
                                  <button className="w-full flex justify-between items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                                    {item.title}
                                    <svg className="w-3 h-3 ml-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                  </button>
                                  <div className="absolute left-full top-0 mt-0 w-48 bg-white rounded-r-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-50">
                                    <div className="p-2">
                                      {item.subItems.map((sub) => (
                                        <button
                                          key={sub}
                                          className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                                          onClick={() => {
                                            if (isHomePage) navigateToSection(menu.href, sub);
                                            else window.location.href = '/';
                                          }}
                                        >
                                          {sub}
                                        </button>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              );
                            } else if (item.label && item.page) {
                              return (
                                <Link
                                  key={item.label}
                                  to={item.page}
                                  className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                                  onClick={closeMobileMenu}
                                >
                                  {item.label}
                                </Link>
                              );
                            }
                            return null;
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                onClick={navigateToLogin}
              >
                Sign In
              </button>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Contact
              </Link>
            </div>

            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <img src={menu_icon} className="w-6 h-6" alt="Menu" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        <div
          className={`absolute inset-0 bg-white transform transition-transform duration-400 ease-out ${
            isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <Link to="/">
                <img src={logo1} alt="Logo" className="h-8" />
              </Link>
              <span className="text-xl font-bold text-gray-800">Menu</span>
            </div>
            <button onClick={closeMobileMenu} className="p-2 rounded-full hover:bg-gray-100">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="overflow-y-auto h-[calc(100vh-180px)] px-6 py-8">
            {menuData.map((menu, index) => (
              <div key={index} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                {menu.items.length === 0 ? (
                  menu.href.startsWith('/') ? (
                    <Link
                      to={menu.href}
                      className="block w-full text-left text-xl font-medium text-gray-800 py-3 hover:text-blue-600"
                      onClick={closeMobileMenu}
                    >
                      {menu.title}
                    </Link>
                  ) : (
                    <button
                      className="block w-full text-left text-xl font-medium text-gray-800 py-3 hover:text-blue-600"
                      onClick={() => {
                        navigateToSection(menu.href);
                        closeMobileMenu();
                      }}
                    >
                      {menu.title}
                    </button>
                  )
                ) : (
                  <>
                    <button
                      className="flex items-center justify-between w-full text-left text-xl font-medium text-gray-800 py-3"
                      onClick={() => toggleMainDropdown(index)}
                    >
                      {menu.title}
                      <svg
                        className="w-5 h-5 text-gray-500 transition-transform"
                        style={{ transform: mobileMainDropdown === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>

                    {mobileMainDropdown === index && (
                      <div className="mt-3 space-y-2 pl-4 border-l-2 border-gray-200">
                        {menu.items.map((item, itemIdx) => {
                          if (typeof item === 'string') {
                            return (
                              <button
                                key={itemIdx}
                                className="block w-full text-left text-lg text-gray-600 hover:text-blue-600 py-2"
                                onClick={() => {
                                  navigateToSection(menu.href, item);
                                  closeMobileMenu();
                                }}
                              >
                                {item}
                              </button>
                            );
                          } else if (item.title === 'Food Court') {
                            return (
                              <div key="food-court-mobile" className="relative">
                                <button
                                  className="flex justify-between items-center w-full text-left text-lg text-gray-600 py-2"
                                  onClick={toggleFoodCourt}
                                >
                                  {item.title}
                                  <svg
                                    className="w-4 h-4 text-gray-500 transition-transform ml-2"
                                    style={{ transform: isFoodCourtOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                                </button>
                                {isFoodCourtOpen && (
                                  <div className="mt-2 space-y-1 pl-5 border-l border-gray-200">
                                    {item.subItems.map((sub, si) => (
                                      <button
                                        key={si}
                                        className="block w-full text-left text-lg text-gray-600 hover:text-blue-600 py-1.5"
                                        onClick={() => {
                                          navigateToSection(menu.href, sub);
                                          closeMobileMenu();
                                        }}
                                      >
                                        {sub}
                                      </button>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          } else if (item.label && item.page) {
                            return (
                              <Link
                                key={item.label}
                                to={item.page}
                                className="block w-full text-left text-lg text-gray-600 hover:text-blue-600 py-2"
                                onClick={closeMobileMenu}
                              >
                                {item.label}
                              </Link>
                            );
                          }
                          return null;
                        })}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-50 border-t border-gray-200 space-y-3">
            <button
              className="w-full bg-gray-200 text-gray-800 py-4 rounded-xl text-lg font-semibold hover:bg-gray-300 transition-colors"
              onClick={() => {
                navigateToLogin();
                closeMobileMenu();
              }}
            >
              Sign In
            </button>
            <Link
              to="/contact"
              className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16 lg:h-16"></div>
    </>
  );
};

export default Navbar;