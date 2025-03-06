import React from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      {/* Top bar with contact info */}
      <div className="bg-primary-purple text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone size={16} className="mr-2" />
              <span>+91 9999461226</span>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="mr-2" />
              <span>mauryadigitalprint@gmail.com</span>
            </div>
          </div>
          <button className="bg-primary-orange hover:bg-opacity-90 px-4 py-1 rounded">
            Get Quote
          </button>
        </div>
      </div>

      {/* Main navigation */}
     {/* Main navigation */}
<div className="container mx-auto px-4">
  <div className="flex justify-between items-center py-4">
    <Link to="/" className="flex items-center">
      <img src="./assets/mdp.png" className="h-10 mr-4" alt="Logo" />
      <span className="text-3xl font-bold font-black">
        Maurya Digital Print
      </span>
    </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-primary-purple">Home</Link>
            <Link to="/about" className="hover:text-primary-purple">About</Link>
            <Link to="/services" className="hover:text-primary-purple">Services</Link>
            <Link to="/portfolio" className="hover:text-primary-purple">Portfolio</Link>
            <Link to="/contact" className="hover:text-primary-purple">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 hover:bg-primary-purple hover:text-white rounded">Home</Link>
              <Link to="/about" className="block px-3 py-2 hover:bg-primary-purple hover:text-white rounded">About</Link>
              <Link to="/services" className="block px-3 py-2 hover:bg-primary-purple hover:text-white rounded">Services</Link>
              <Link to="/portfolio" className="block px-3 py-2 hover:bg-primary-purple hover:text-white rounded">Portfolio</Link>
              <Link to="/contact" className="block px-3 py-2 hover:bg-primary-purple hover:text-white rounded">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}