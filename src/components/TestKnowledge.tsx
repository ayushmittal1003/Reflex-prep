import React from 'react';
import { Hammer, FileText } from 'lucide-react';

const TestKnowledge: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Test Your Knowledge?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
            Challenge yourself with our specialized quiz formats and free grand tests designed to boost your confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            {/* Hammer Quiz CTA */}
            <a 
              href="https://reflex-hammer-769d6zo.gamma.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto sm:min-w-[260px]"
            >
              <div className="flex items-center justify-center mb-1">
                <Hammer size={18} className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-base sm:text-lg">Hammer Quiz</span>
              </div>
              <div className="text-xs sm:text-sm opacity-90 font-normal">
                Quick & Focused Practice
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full opacity-80 animate-bounce"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-white/30 rounded-full"></div>
            </a>
            
            {/* Free Grand Test CTA */}
            <a 
              href="https://app.reflexprep.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-white/20 w-full sm:w-auto sm:min-w-[260px]"
            >
              <div className="flex items-center justify-center mb-1">
                <FileText size={18} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-base sm:text-lg">Attempt Free GT</span>
              </div>
              <div className="text-xs sm:text-sm opacity-90 font-normal">
                Full-Length Mock Exam
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-orange-400 rounded-full opacity-80 animate-bounce"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-white/30 rounded-full"></div>
            </a>
          </div>
          
          {/* Additional info */}
          <div className="mt-6 text-center">
            <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto px-4 sm:px-0">
              Practice with real exam patterns and get instant feedback to improve your performance
            </p>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full opacity-10 blur-xl"></div>
        <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-10 blur-xl"></div>
      </div>
    </section>
  );
};

export default TestKnowledge;
