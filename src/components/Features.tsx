import React from 'react';
import { BookText, Layout, TestTubes, FileText } from 'lucide-react';
import { FEATURES } from '../utils/constants';

const Features: React.FC = () => {
  // Function to render the appropriate icon
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'TestTubes':
        return <TestTubes size={40} className="text-teal-500" />;
      case 'Layout':
        return <Layout size={40} className="text-teal-500" />;
      case 'BookText':
        return <BookText size={40} className="text-teal-500" />;
      case 'FileText':
        return <FileText size={40} className="text-teal-500" />;
      default:
        return <TestTubes size={40} className="text-teal-500" />;
    }
  };

  return (
    <section id="features" className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Master NEET PG with Our Powerful Features
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-4 sm:px-0">
            Tools designed specifically for medical students to excel in their exams
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id}
              className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-teal-200"
            >
              <div className="bg-teal-50 w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center rounded-full mb-4 sm:mb-6">
                <div className="scale-75 sm:scale-100">
                  {renderIcon(feature.icon)}
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Feature highlight section */}
        <div className="mt-16 sm:mt-20 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Why PYQs Are Game-Changers
              </h3>
              <p className="text-gray-700 mb-6 text-base sm:text-lg">
                Over 70% of NEET PG questions often repeat. Reflex includes 7000+ PYQs from NEET PG & INICET — curated to help you ace the exam.
              </p>
              <ul className="space-y-3">
                <Feature icon="📊" text="Organized by subjects and topics" />
                <Feature icon="🎯" text="Focus on high-yield concepts" />
                <Feature icon="🔄" text="Repeating patterns identified" />
                <Feature icon="📱" text="Practice anytime, anywhere" />
              </ul>
            </div>
            
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-0">
              <div className="relative">
                {/* Mock UI of the app */}
                <div className="bg-white rounded-xl shadow-2xl p-3 sm:p-4 max-w-xs sm:max-w-sm mx-auto">
                  <div className="bg-blue-500 text-white p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-sm sm:text-base">NEET PG Question Bank</h4>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded whitespace-nowrap">7000+ Questions</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-xs sm:text-sm font-medium">NEET PG 2021 - Medicine</div>
                      <div className="mt-1 text-xs text-gray-500">357 Questions</div>
                      <div className="mt-2 w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-teal-500 h-full rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-xs sm:text-sm font-medium">NEET PG 2022 - Surgery</div>
                      <div className="mt-1 text-xs text-gray-500">289 Questions</div>
                      <div className="mt-2 w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-teal-500 h-full rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-xs sm:text-sm font-medium">INICET 2023 - Pathology</div>
                      <div className="mt-1 text-xs text-gray-500">214 Questions</div>
                      <div className="mt-2 w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-teal-500 h-full rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      // This would trigger the login dashboard if we had access to the function
                      window.open('https://app.reflexprep.com/', '_blank');
                    }}
                    className="mt-4 w-full bg-teal-500 text-white py-2 rounded-lg font-medium block text-center hover:bg-teal-600 transition-colors text-sm"
                  >
                    Start Practicing
                  </a>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -z-10 -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-full h-full bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
         
{/* Interactive CTA Section - Positioned after PYQ section */}
{/*         <div className="mt-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Test Your Knowledge?
          </h3>
          <p className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto">
            Challenge yourself with our specialized quiz formats and free grand tests designed to boost your confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="https://app.reflexprep.com/hammer-quiz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-teal-400 to-green-500 hover:from-teal-500 hover:to-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🔨 Hammer Quiz
              <div className="text-sm opacity-90 mt-1">Quick & Focused Practice</div>
            </a>
            
            <a 
              href="https://app.reflexprep.com/free-grand-test"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-white/20"
            >
              📝 Attempt Free GT
              <div className="text-sm opacity-90 mt-1">Full-Length Mock Exam</div>
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

interface FeatureProps {
  icon: string;
  text: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, text }) => (
  <li className="flex items-start text-sm sm:text-base">
    <span className="mr-2 text-xl">{icon}</span>
    <span className="text-gray-700">{text}</span>
  </li>
);

export default Features;
