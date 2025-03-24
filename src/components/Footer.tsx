import  { NavLink } from 'react-router-dom';
import { Recycle, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Recycle className="w-8 h-8 text-green-500" />
              <span className="text-xl font-bold text-white">EcoLagos</span>
            </div>
            <p className="text-gray-400 mb-4">
              Leading the way in sustainable waste management solutions across Lagos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                <a href="/services#waste-collection">Waste Collection</a>
              </li>
              <li className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                <a href="/services#recycling">Recycling Programs</a>
              </li>
              <li className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                <a href="/services#environmental">Environmental Consulting</a>
              </li>
              <li className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                <a href="/services#commercial">Commercial Solutions</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Victoria Island, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-green-500 flex-shrink-0" />
                <a href="tel:+2349012345678" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                  +234 901 234 5678
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-green-500 flex-shrink-0" />
                <a href="mailto:info@ecolagos.com" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                  info@ecolagos.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EcoLagos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 