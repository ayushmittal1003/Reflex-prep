import React from 'react';
import { Download, ExternalLink, Star } from 'lucide-react';
import { APP_LINKS } from '../utils/constants';

interface HeroProps {
  onShowLogin?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShowLogin }) => {
  return (
    <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 lg:pb-24 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjUiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFYwYzkuOTQgMCAxOCA4LjA2IDE4IDE4aC0yeiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left text-white mb-8 lg:mb-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 px-2 sm:px-0">
              Master NEET PG with High-Yield Previous Year Questions
            </h1>
            <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
              Unlock your dream medical specialization with Reflex Prep's unmatched question bank! Learn smarter, not harder with concise notes and 7000+ PYQs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-3 mb-6 px-2 sm:px-0">
              <button
                onClick={onShowLogin}
                className="bg-white text-blue-700 hover:bg-gray-100 transition-colors px-4 sm:px-6 py-3 rounded-lg font-semibold flex items-center justify-center w-full sm:w-auto text-sm sm:text-base"
              >
                <ExternalLink size={18} className="mr-2" />
                Practice Questions Now
              </button>
              
              <div className="flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto">
                <a 
                  href={APP_LINKS.GOOGLE_PLAY}
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors border border-white/30 text-white px-3 sm:px-4 py-2 rounded-lg flex items-center flex-1 sm:flex-none justify-center text-xs sm:text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={16} className="mr-1 sm:mr-2" />
                  Google Play
                </a>
                <a 
                  href={APP_LINKS.APP_STORE}
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors border border-white/30 text-white px-3 sm:px-4 py-2 rounded-lg flex items-center flex-1 sm:flex-none justify-center text-xs sm:text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={16} className="mr-1 sm:mr-2" />
                  App Store
                </a>
              </div>
            </div>

            {/* Stats boxes - Reduced size */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-xs sm:max-w-md mx-auto lg:mx-0 px-2 sm:px-0">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-2 sm:p-3 text-center">
                <div className="text-sm sm:text-lg font-bold text-white mb-0.5">100K+</div>
                <div className="text-xs text-white/80">Downloads</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-2 sm:p-3 text-center">
                <div className="flex items-center justify-center mb-0.5">
                  <span className="text-sm sm:text-lg font-bold text-white mr-1">4.5</span>
                  <Star size={14} className="text-yellow-400 fill-current" />
                </div>
                <div className="text-xs text-white/80">Rating</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-2 sm:p-3 text-center">
                <div className="text-sm sm:text-lg font-bold text-white mb-0.5">3K+</div>
                <div className="text-xs text-white/80">Reviews</div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-8 lg:mt-0">
            {/* Review Images - Positioned beside the phone mockup */}
            <div className="hidden xl:flex flex-col space-y-6 mr-16 mt-8">
              {/* First Review Image */}
              <div className="transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-2xl shadow-2xl">
                  <img 
                    src="https://reflex-banners.s3.ap-south-1.amazonaws.com/image+%281%29.png" 
                    alt="User Review 1" 
                    className="w-64 h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
              
              {/* Second Review Image */}
              <div className="transform rotate-12 hover:rotate-0 transition-transform duration-500 ml-4">
                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-2xl shadow-2xl">
                  <img 
                    src="https://reflex-banners.s3.ap-south-1.amazonaws.com/image.png" 
                    alt="User Review 2" 
                    className="w-64 h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Phone mockup */}
            <div className="relative max-w-xs sm:max-w-sm">
              {/* Phone mockup with app screenshot */}
              <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl rotate-3 transform transition-transform hover:rotate-0 duration-500">
                <div className="bg-white rounded-2xl overflow-hidden h-[400px] sm:h-[500px] w-52 sm:w-64 relative">
                  <div className="absolute inset-0 flex flex-col">
                    <div className="bg-teal-500 text-white p-3 sm:p-4">
                      <div className="text-base sm:text-lg font-semibold">NEET PG Preparation</div>
                      <div className="text-xs sm:text-sm opacity-80">7000+ PYQs</div>
                    </div>
                    <div className="flex-1 bg-white p-2 sm:p-3">
                      <div className="bg-gray-100 rounded-lg p-3 mb-3">
                        <div className="text-xs sm:text-sm font-medium text-gray-800">Question 1/20</div>
                        <div className="mt-2 text-xs sm:text-sm text-gray-700">Most helpful novel mantle cell lymphoma marker in Cyclin D1 absence:</div>
                        <div className="mt-3 space-y-2">

                          <div className="bg-teal-50 p-1.5 sm:p-2 rounded border-2 border-teal-500 text-xs sm:text-sm">A. SOX11</div>
                          <div className="bg-white p-1.5 sm:p-2 rounded border border-gray-200 text-xs sm:text-sm">B. Annexin V</div>
                          <div className="bg-white p-1.5 sm:p-2 rounded border border-gray-200 text-xs sm:text-sm">C. MYD88</div>
                          <div className="bg-white p-1.5 sm:p-2 rounded border border-gray-200 text-xs sm:text-sm">D. ITRA 1</div>
                        </div>
                      </div>
                      <div className="flex justify-between mt-2">
                        <button className="bg-gray-200 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm">Previous</button>
                        <button className="bg-blue-500 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm">Next</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -top-6 -right-6 w-12 sm:w-20 h-12 sm:h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-50 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave shape divider */}
    <div className="absolute bottom-0 left-0 right-0">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" className="w-full h-auto">
    <path
      fill="#ffffff"
      fillOpacity="1"
      d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,90.7C672,107,768,117,864,112C960,107,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,150L0,150Z"
    />
  </svg>
</div>

    </section>
  );
};

export default Hero;
