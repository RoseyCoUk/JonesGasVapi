import React, { useState, useEffect } from 'react';
import { Flame, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Flame 
            className={`h-8 w-8 ${isScrolled ? 'text-blue-600' : 'text-blue-500'}`} 
            strokeWidth={2}
          />
          <span className={`font-semibold text-xl ${isScrolled ? 'text-gray-800' : 'text-gray-700'}`}>
            Jones Gas Services
          </span>
        </div>
        <nav className="flex items-center gap-4">
          <a 
            href="tel:+447787396692"
            className="hidden md:flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <Phone className="h-5 w-5" />
            <span>+44 7787 396692</span>
          </a>
          <button className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Book Now
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;