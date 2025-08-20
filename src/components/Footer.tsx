import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Wrench, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-xl font-bold">MOBILE REPAIR XYZ</span>
                <Wrench className="h-4 w-4 text-blue-400" />
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional doorstep mobile repair services. We bring expert technicians 
              right to your location for fast, reliable phone repairs.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-300">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/request" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Book Repair
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  +91 9818322072
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:info@fixmobile.com" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  info@mobilerepairxyz.in
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Serving all major cities<br />
                  Fast doorstep service
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              Made By m2hgamerz © 2025 MobileRepairXYZ. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Professional mobile repair services at your doorstep
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;