import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary-purple via-primary-pink to-primary-green bg-clip-text text-transparent">
              Maurya Digital Print
            </h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for all digital printing solutions. Quality, innovation, and excellence in every print.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-orange"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary-orange"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary-orange"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary-orange"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/digital-printing" className="text-gray-400 hover:text-white">Digital Printing</Link></li>
              <li><Link to="/services/business-cards" className="text-gray-400 hover:text-white">Business Cards</Link></li>
              <li><Link to="/services/banners" className="text-gray-400 hover:text-white">Banners & Signs</Link></li>
              <li><Link to="/services/custom-apparel" className="text-gray-400 hover:text-white">Custom Apparel</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary-orange" />
                <span className="text-gray-400">+1234567890</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary-orange" />
                <span className="text-gray-400">info@mauryaprint.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-primary-orange" />
                <span className="text-gray-400">123 Print Street, Design City, 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Maurya Digital Print. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}