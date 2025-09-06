import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      isActive ? 'bg-accent text-primary font-semibold' : 'text-content-secondary hover:bg-secondary hover:text-content'
    }`;

  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
      isActive ? 'bg-accent text-primary font-semibold' : 'text-content-secondary hover:bg-secondary hover:text-content'
    }`;

  return (
    <header className="bg-secondary/80 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-border-color">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <Logo />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={navLinkClasses}>Beranda</NavLink>
              <NavLink to="/tentang-kami" className={navLinkClasses}>Tentang Kami</NavLink>
              <NavLink to="/brand-kami" className={navLinkClasses}>Brand Kami</NavLink>
              <NavLink to="/kontak" className={navLinkClasses}>Kontak</NavLink>
              <NavLink to="/member" className="bg-accent text-primary px-4 py-2 rounded-md text-sm font-bold hover:bg-accent-hover transition-all duration-300 transform hover:scale-105">Daftar Member</NavLink>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-secondary inline-flex items-center justify-center p-2 rounded-md text-content-secondary hover:text-content hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Buka menu utama</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>Beranda</NavLink>
            <NavLink to="/tentang-kami" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>Tentang Kami</NavLink>
            <NavLink to="/brand-kami" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>Brand Kami</NavLink>
            <NavLink to="/kontak" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>Kontak</NavLink>
            <NavLink to="/member" className="bg-accent text-primary block px-3 py-2 rounded-md text-base font-medium hover:bg-accent-hover transition-colors duration-300 text-center mt-2" onClick={() => setIsMenuOpen(false)}>Daftar Member</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;