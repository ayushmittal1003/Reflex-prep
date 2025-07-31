import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onPlanSelect?: (planId: number) => void;
  onShowLogin?: () => void;
  onShowBlog?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onPlanSelect, onShowLogin, onShowBlog }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleBlogClick = () => {
    setIsMobileMenuOpen(false);
    if (onShowBlog) {
      onShowBlog();
    }
  };

  const handleLoginClick = () => {
    setIsMobileMenuOpen(false);
    if (onShowLogin) {
      onShowLogin();
    }
  };

  return (
    <>
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
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <NavLink href="#features" isScrolled={isScrolled}>Features</NavLink>
            <NavLink href="#plans" isScrolled={isScrolled}>Plans</NavLink>
            <NavLink href="#testimonials" isScrolled={isScrolled}>Testimonials</NavLink>
            <button
              onClick={onShowBlog}
              className={`font-medium hover:text-teal-500 transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Blogs
            </button>
            <NavLink href="#why-reflex" isScrolled={isScrolled}>Why Us</NavLink>
            <button
              onClick={onShowLogin}
              className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              Sign In
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="mobile-menu-container lg:hidden">
            <button 
              onClick={handleMobileMenuToggle}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-800 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="mobile-menu-container fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 scrollbar-hide">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <img 
                      src="/image.png" 
                      alt="Reflex Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-bold text-xl text-gray-800">Reflex</span>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                  aria-label="Close mobile menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Mobile Menu Content */}
              <div className="flex-1 overflow-y-auto py-6 scrollbar-hide">
                <nav className="space-y-2 px-6">
                  <MobileNavLink 
                    href="#features" 
                    onClick={() => handleNavClick('#features')}
                  >
                    Features
                  </MobileNavLink>
                  <MobileNavLink 
                    href="#plans" 
                    onClick={() => handleNavClick('#plans')}
                  >
                    Plans
                  </MobileNavLink>
                  <MobileNavLink 
                    href="#testimonials" 
                    onClick={() => handleNavClick('#testimonials')}
                  >
                    Testimonials
                  </MobileNavLink>
                  <MobileNavLink 
                    href="#" 
                    onClick={handleBlogClick}
                  >
                    Blogs
                  </MobileNavLink>
                  <MobileNavLink 
                    href="https://reflexprep.blog/" 
                    onClick={() => handleNavClick('#why-reflex')}
                  >
                    Why Us
                  </MobileNavLink>
                </nav>

                {/* Mobile Menu Actions */}
                <div className="px-6 mt-8 space-y-4">
                  <button
                    onClick={handleLoginClick}
                    className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    Sign In
                  </button>
                  
                  {/* Quick Links */}
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-medium text-gray-500 mb-3">Quick Links</h4>
                    <div className="space-y-2">
                      <a
                        href="https://app.reflexprep.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ zIndex: 9999, position: 'relative' }}
                        className="block text-sm text-gray-600 hover:text-teal-600 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                      Practice Questions Now
                      </a>

                      <a
                        href="https://play.google.com/store/apps/details?id=com.gooded.pgpyqs&hl=en_IN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-gray-600 hover:text-teal-600 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Download Android App
                      </a>
                      <a
                        href="https://apps.apple.com/in/app/reflex-neet-pg-preparation/id6449163339"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-gray-600 hover:text-teal-600 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Download iOS App
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isScrolled }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <a 
      href={href}
      onClick={handleClick}
      className={`font-medium hover:text-teal-500 transition-colors duration-300 ${
        isScrolled ? 'text-gray-700' : 'text-white'
      }`}
    >
      {children}
    </a>
  );
};

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, children, onClick }) => {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className="block py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-teal-600 rounded-lg transition-colors font-medium"
    >
      {children}
    </a>
  );
};

export default Header;
