import React, { useEffect, useState } from 'react';

interface HeaderProps {
  onPlanSelect?: (planId: number) => void;
  onShowLogin?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onPlanSelect, onShowLogin }) => {
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
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <div className="w-8 h-8 flex items-center justify-center">
            <img 
              src="/image.png" 
              alt="Reflex Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className={`font-bold text-xl transition-colors duration-300 ${
            isScrolled ? 'text-gray-800' : 'text-white'
          }`}>
            Reflex
          </span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink href="#features" isScrolled={isScrolled}>Features</NavLink>
          <NavLink href="#plans" isScrolled={isScrolled}>Plans</NavLink>
          <NavLink href="#testimonials" isScrolled={isScrolled}>Testimonials</NavLink>
          <ExternalNavLink href="https://reflexprep.blog/" isScrolled={isScrolled}>Blogs</ExternalNavLink>
          <NavLink href="#why-reflex" isScrolled={isScrolled}>Why Us</NavLink>
          <button
            onClick={onShowLogin}
            className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            Sign In
          </button>
        </nav>
        
        <button className="block md:hidden">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className={`w-6 h-6 transition-colors duration-300 ${
              isScrolled ? 'stroke-gray-800' : 'stroke-white'
            }`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isScrolled }) => {
  return (
    <a 
      href={href} 
      className={`font-medium hover:text-teal-500 transition-colors duration-300 ${
        isScrolled ? 'text-gray-700' : 'text-white'
      }`}
    >
      {children}
    </a>
  );
};

interface ExternalNavLinkProps {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
}

const ExternalNavLink: React.FC<ExternalNavLinkProps> = ({ href, children, isScrolled }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`font-medium hover:text-teal-500 transition-colors duration-300 ${
        isScrolled ? 'text-gray-700' : 'text-white'
      }`}
    >
      {children}
    </a>
  );
};

export default Header;