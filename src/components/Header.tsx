import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-2xl border-b border-blue-500/30' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center border border-blue-400/30">
              <Zap className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-white">Westside Welding</h1>
              <p className="text-orange-400 text-xs font-semibold">& Engineering Ltd</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">
              Services
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">
              About
            </Link>
            <Link to="/projects" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">
              Projects
            </Link>
            <Link to="/testimonials" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">
              Testimonials
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">
              Contact
            </Link>
            <Link to="/booking" className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg font-bold">
              <Phone className="w-4 h-4" />
              <span>Book Now</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-blue-500/30">
            <nav className="flex flex-col space-y-2 p-4">
              <Link to="/services" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-orange-400 transition-colors text-left font-medium">
                Services
              </Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-orange-400 transition-colors text-left font-medium">
                About
              </Link>
              <Link to="/projects" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-orange-400 transition-colors text-left font-medium">
                Projects
              </Link>
              <Link to="/testimonials" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-orange-400 transition-colors text-left font-medium">
                Testimonials
              </Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-orange-400 transition-colors text-left font-medium">
                Contact
              </Link>
              <Link to="/booking" onClick={() => setIsOpen(false)} className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-all duration-300 w-fit font-bold">
                <Phone className="w-4 h-4" />
                <span>Book Now</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;