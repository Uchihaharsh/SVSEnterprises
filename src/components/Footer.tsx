import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-red-500 dark:text-red-400 mb-4">SVS Enterprises</h3>
            <p className="text-gray-400 dark:text-gray-300">
              Your trusted partner in fire safety solutions. Protecting lives and property with advanced
              fire ball technology.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white dark:text-gray-100">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-red-500 dark:text-red-400 mt-1 mr-2" />
                <p className="text-gray-400 dark:text-gray-300">
                  Shop no. C001, Juinagar Station Complex,<br />
                  Juinagar, Navi Mumbai
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-red-500 dark:text-red-400 mr-2" />
                <a href="tel:+918850413525" className="text-gray-400 dark:text-gray-300 hover:text-white">
                  +91 8850413525
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-red-500 dark:text-red-400 mr-2" />
                <a href="tel:+919167150521" className="text-gray-400 dark:text-gray-300 hover:text-white">
                  +91 9167150521
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-red-500 dark:text-red-400 mr-2" />
                <a href="mailto:agnikawach.maharastra@gmail.com" className="text-gray-400 dark:text-gray-300 hover:text-white">
                  agnikawach.maharastra@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">About</a>
              </li>
              <li>
                <a href="#technical" className="text-gray-400 hover:text-white">Technical Comparison</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-white">How It Works</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Saturday: 9:00 AM - 7:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} SVS Enterprises. All rights reserved.
          </p>
          <a 
            href="https://agnikawach.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block mt-2 text-red-500 hover:text-red-400 transition-colors duration-200"
          >
            agnikawach site
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;