import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PLANS } from '../utils/constants';

const CTA: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Could You Be Our Next NEET PG Champion?
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {PLANS.map((plan) => (
              <a
                key={plan.id}
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  flex items-center justify-center px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium text-center text-sm sm:text-base
                  ${plan.id === 2 
                    ? 'bg-teal-500 hover:bg-teal-600 text-white' 
                    : 'bg-white hover:bg-gray-100 text-gray-800 border border-gray-300'
                  }
                  transition-colors duration-300
                `}
              >
                {plan.duration} months
                {plan.id === 2 && <ArrowRight size={14} className="ml-1 sm:ml-2" />}
              </a>
            ))}
          </div>
        </div>
        
        {/* App screenshots with headings */}
        <div className="max-w-6xl mx-auto">
          {/* Headings */}
          <div className="hidden lg:flex justify-center items-center gap-8 mb-8">
            <div className="text-center w-64 flex-shrink-0">
              <h3 className="text-lg xl:text-xl font-bold text-gray-900 mb-2">Progress Tracker</h3>
              <p className="text-xs xl:text-sm text-gray-600">Monitor your learning journey</p>
            </div>
            <div className="text-center w-72 flex-shrink-0">
              <h3 className="text-lg xl:text-xl font-bold text-gray-900 mb-2">Custom Test Builder</h3>
              <p className="text-xs xl:text-sm text-gray-600">Create personalized tests</p>
            </div>
            <div className="text-center w-64 flex-shrink-0">
              <h3 className="text-lg xl:text-xl font-bold text-gray-900 mb-2">Notes</h3>
              <p className="text-xs xl:text-sm text-gray-600">Concise study material</p>
            </div>
          </div>
          
          {/* App screenshot cards */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8">
            {/* Mobile headings - shown only on smaller screens */}
            <div className="lg:hidden w-full text-center mb-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Our App Features</h3>
              <p className="text-sm text-gray-600">Progress Tracker • Custom Test Builder • Notes</p>
            </div>
            
            {/* Progress Tracker Card */}
            <div className="relative group">
              <div className="bg-white p-2 sm:p-3 rounded-2xl shadow-2xl rotate-3 transition-transform duration-500 hover:rotate-0">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="/Progress_Tracker.jpeg" 
                    alt="Progress Tracker" 
                    className="w-48 sm:w-56 lg:w-64 h-auto object-cover"
                    style={{ 
                      clipPath: 'inset(60px 0 80px 0)',
                      marginTop: '-60px',
                      marginBottom: '-80px'
                    }}
                  />
                </div>
              </div>
              {/* Mobile title */}
              <div className="lg:hidden text-center mt-3">
                <h4 className="text-sm font-semibold text-gray-800">Progress Tracker</h4>
              </div>
            </div>
            
            {/* Custom Test Builder Card - Center and larger */}
            <div className="relative z-10 group order-first lg:order-none">
              <div className="bg-white p-2 sm:p-3 rounded-2xl shadow-3xl lg:scale-110">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="/Custom_Test.jpeg" 
                    alt="Custom Test Builder" 
                    className="w-56 sm:w-64 lg:w-72 h-auto object-cover"
                    style={{ 
                      clipPath: 'inset(60px 0 80px 0)',
                      marginTop: '-60px',
                      marginBottom: '-80px'
                    }}
                  />
                </div>
              </div>
              {/* Mobile title */}
              <div className="lg:hidden text-center mt-3">
                <h4 className="text-sm font-semibold text-gray-800">Custom Test Builder</h4>
              </div>
            </div>
            
            {/* Notes Card */}
            <div className="relative group">
              <div className="bg-white p-2 sm:p-3 rounded-2xl shadow-2xl -rotate-3 transition-transform duration-500 hover:rotate-0">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="/3.jpg" 
                    alt="Notes" 
                    className="w-48 sm:w-56 lg:w-64 h-auto object-cover"
                    style={{ 
                      clipPath: 'inset(60px 0 80px 0)',
                      marginTop: '-60px',
                      marginBottom: '-80px'
                    }}
                  />
                </div>
              </div>
              {/* Mobile title */}
              <div className="lg:hidden text-center mt-3">
                <h4 className="text-sm font-semibold text-gray-800">Notes</h4>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-4 -left-4 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute -top-6 -right-6 w-12 sm:w-20 h-12 sm:h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 blur-xl"></div>
      </div>
    </section>
  );
};

export default CTA;
