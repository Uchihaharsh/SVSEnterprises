import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { downloadBrochure } from '../utils/download';
import logo from '../assets/images/svs-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setVisible(false);
        setIsOpen(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/technical", label: "Technical Comparison" },
    { 
      to: "#",
      label: "Brochure",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        downloadBrochure();
      }
    }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md bg-white/90 dark:bg-gray-900/90 shadow-sm
        ${visible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-between items-center py-1 text-sm border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center space-x-4">
            <a href="tel:+918850413525" className="flex items-center space-x-2 text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors">
              <Phone size={14} />
              <span>+91 8850413525</span>
            </a>
            <a href="tel:+919167150521" className="flex items-center space-x-2 text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors">
              <Phone size={14} />
              <span>+91 9167150521</span>
            </a>
          </div>
          <a href="mailto:agnikawach.maharastra@gmail.com" className="flex items-center space-x-2 text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors">
            <Mail size={14} />
            <span>agnikawach.maharastra@gmail.com</span>
          </a>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-3">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 relative flex items-center justify-center bg-white rounded-full overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={logo} 
                alt="SVS Enterprises Logo" 
                className="w-[90%] h-[90%] object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold whitespace-nowrap">
                <span className="text-red-600 dark:text-red-500">SVS</span>
                <span className="text-red-600 dark:text-red-500 ml-2">Enterprises</span>
              </h1>
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={link.onClick}
                className={`text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 text-sm font-medium transition-colors
                  ${location.pathname === link.to ? 'text-red-600 dark:text-red-400' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-gray-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <Link 
              to="/contact" 
              className="bg-red-600 text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 transition-colors shadow-sm hover:shadow-md"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-gray-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden fixed inset-x-0 top-[4.5rem] bg-white/95 dark:bg-gray-900/95 backdrop-blur-md transition-all duration-300 ease-in-out transform ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
        >
          <div className="px-4 pt-2 pb-3 space-y-1 border-t border-gray-200 dark:border-gray-800">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={(e) => {
                  if (link.onClick) link.onClick(e);
                  setIsOpen(false);
                }}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-red-400 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-base font-medium bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 rounded-lg transition-colors shadow-sm"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;