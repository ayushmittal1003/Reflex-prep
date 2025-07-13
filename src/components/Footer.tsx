import React from 'react';
import { Download, Instagram, Mail, MessageCircle, Phone, Youtube } from 'lucide-react';
import { APP_LINKS, LEGAL_LINKS, SOCIAL_LINKS } from '../utils/constants';

const Footer: React.FC = () => {
  // Function to render the appropriate social icon
  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Youtube':
        return <Youtube size={16} />;
      case 'Instagram':
        return <Instagram size={16} />;
      case 'MessageCircle':
        return <MessageCircle size={16} />;
      default:
        return <Youtube size={16} />;
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-gray-700">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 flex items-center justify-center mr-2">
                <img 
                  src="/image.png" 
                  alt="Reflex Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-lg">Reflex</span>
            </div>
            <p className="text-gray-400 mb-4">
              India's premier NEET PG preparation platform with a focus on high-yield previous year questions and concise notes.
            </p>
            <div className="flex space-x-3">
              {SOCIAL_LINKS.map((social) => (
                <SocialButton 
                  key={social.id}
                  icon={renderSocialIcon(social.icon)} 
                  href={social.url} 
                />
              ))}
            </div>
          </div>
          
          {/* Column 2 - Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <Mail size={16} className="text-teal-400" />
                </div>
                <a 
                  href="mailto:supportpg@neetprep.com"
                  className="hover:text-teal-400 transition-colors"
                >
                  supportpg@neetprep.com
                </a>
              </div>
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <Phone size={16} className="text-teal-400" />
                </div>
                <div>
                  <a 
                    href={APP_LINKS.WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-400 transition-colors"
                  >
                    +91-7835083689
                  </a>
                  <div className="text-xs mt-1">10 AM–8 PM, All Days</div>
                </div>
              </div>
              <p className="pt-2">
                S-15, 2nd Floor, Uphar Cinema Market, Green Park Extension, New Delhi, 110016
              </p>
            </div>
          </div>
          
          {/* Column 3 - Download */}
          <div>
            <h3 className="font-bold text-lg mb-4">Download</h3>
            <p className="text-gray-400 mb-4">
              Get our app for a better experience on mobile
            </p>
            <div className="space-y-3">
              <a 
                href={APP_LINKS.GOOGLE_PLAY}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-800 hover:bg-gray-700 transition-colors px-4 py-2 rounded"
              >
                <Download size={16} className="mr-2" />
                <span>Google Play</span>
              </a>
              <a 
                href={APP_LINKS.APP_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-800 hover:bg-gray-700 transition-colors px-4 py-2 rounded"
              >
                <Download size={16} className="mr-2" />
                <span>App Store</span>
              </a>
            </div>
          </div>
          
          {/* Column 4 - Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-teal-400 transition-colors">Features</a></li>
              <li><a href="#plans" className="hover:text-teal-400 transition-colors">Plans</a></li>
              <li><a href="#testimonials" className="hover:text-teal-400 transition-colors">Testimonials</a></li>
              <li><a href="#why-reflex" className="hover:text-teal-400 transition-colors">Why Choose Us</a></li>
              
              <li className="pt-2">
                <button
                  onClick={() => window.open(APP_LINKS.WEB_APP, '_blank')}
                  className="bg-teal-500 hover:bg-teal-600 text-white transition-colors px-4 py-2 rounded inline-block mt-2"
                >
                  Sign In
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Reflex. All rights reserved.
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <a 
                key={link.id}
                href={link.url}
                className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialButtonProps {
  icon: React.ReactNode;
  href: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, href }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-800 hover:bg-gray-700 p-2 rounded transition-colors"
  >
    {icon}
  </a>
);

export default Footer;