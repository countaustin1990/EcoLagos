import  { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Recycle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center space-x-2">
            <Recycle className="w-8 h-8 text-green-600" />
            <span className="text-xl font-bold text-green-600">EcoLagos</span>
          </NavLink>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link-active  text-green-600' : 'nav-link text-green-600'}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link-active  text-green-500' : 'nav-link text-green-600'}>
              About
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link-active  text-green-500' : 'nav-link text-green-600'}>
              Services
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link-active  text-green-500' : 'nav-link text-green-600'}>
              Contact
            </NavLink>
            <a href="tel:+2348133715097" className="btn-primary">
              Get a Quote
            </a>
          </div>

          <button 
            className="md:hidden text-white" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4">
            <div className="flex flex-col space-y-4 px-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
              <NavLink 
                to="/services" 
                className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
                onClick={() => setIsOpen(false)}
              >
                Services
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
              <a 
                href="tel:+2349012345678" 
                className="btn-primary w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
 
