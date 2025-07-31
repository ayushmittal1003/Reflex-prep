import React from 'react';
import { Brain, LineChart, Smartphone, Trophy } from 'lucide-react';
import { WHY_REFLEX } from '../utils/constants';

const WhyReflex: React.FC = () => {
  // Function to render the appropriate icon
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy':
        return <Trophy size={32} className="text-blue-600" />;
      case 'Smartphone':
        return <Smartphone size={32} className="text-blue-600" />;
      case 'LineChart':
        return <LineChart size={32} className="text-blue-600" />;
      default:
        return <Brain size={32} className="text-blue-600" />;
    }
  };

  return (
    <section id="why-reflex" className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Reflex?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-4 sm:px-0">
            Our platform is designed specifically for medical students preparing for NEET PG
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {WHY_REFLEX.map((item) => (
            <div 
              key={item.id}
              className="bg-gray-50 rounded-xl p-6 sm:p-8 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-blue-200"
            >
              <div className="bg-blue-100 w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center rounded-full mb-4 sm:mb-6">
                <div className="scale-75 sm:scale-100">
                  {renderIcon(item.icon)}
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Stats section */}
        <div className="mt-16 sm:mt-20 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 sm:p-8 text-white shadow-lg transform transition-transform duration-300 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">7000+</div>
              <div className="text-lg sm:text-xl font-medium">Previous Year Questions</div>
              <p className="mt-2 text-blue-100">Categorized and explained</p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl p-6 sm:p-8 text-white shadow-lg transform transition-transform duration-300 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg sm:text-xl font-medium">Access</div>
              <p className="mt-2 text-teal-100">Study anytime, anywhere</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-700 to-teal-700 rounded-xl p-6 sm:p-8 text-white shadow-lg transform transition-transform duration-300 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">125+</div>
              <div className="text-lg sm:text-xl font-medium">Repeated Questions</div>
              <p className="mt-2 text-blue-100">In NEET PG exams</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyReflex;
