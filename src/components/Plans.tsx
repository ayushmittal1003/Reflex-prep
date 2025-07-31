import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PLANS } from '../utils/constants';

interface PlansProps {
  onPlanSelect?: (planId: number) => void;
}

const Plans: React.FC<PlansProps> = ({ onPlanSelect }) => {
  const handlePlanClick = (planId: number, originalLink: string) => {
    if (onPlanSelect) {
      onPlanSelect(planId);
    } else {
      // Fallback to original behavior
      window.open(originalLink, '_blank');
    }
  };

  return (
    <section id="plans" className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Learning Journey
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-4 sm:px-0">
            Select the plan that fits your preparation timeline and goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 max-w-8xl mx-auto">
          {PLANS.map((plan) => (
            <div 
              key={plan.id}
              className={`rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-2 border-teal-500 relative shadow-xl' 
                  : plan.dealOfDay
                  ? 'border-2 border-blue-500 relative shadow-xl'
                  : 'border border-gray-200 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-teal-500 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              {plan.dealOfDay && (
                <div className="absolute top-0 right-0">
                  <div className="bg-blue-500 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-bl-lg">
                    BEST DEAL
                  </div>
                </div>
              )}
              
              <div className={`p-6 ${
                plan.popular 
                  ? 'bg-teal-50' 
                  : plan.dealOfDay 
                  ? 'bg-blue-50' 
                  : 'bg-white'
              }`}>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                <div className="mb-4">
                  <span className="text-2xl sm:text-3xl font-bold text-gray-900">₹{plan.price}</span>
                  <span className="text-sm sm:text-base text-gray-500 ml-1">/ {plan.duration} months</span>
                </div>
                
                <ul className="space-y-2 sm:space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 size={18} className={`mr-2 mt-0.5 flex-shrink-0 ${
                        plan.popular 
                          ? 'text-teal-500' 
                          : plan.dealOfDay 
                          ? 'text-blue-500' 
                          : 'text-teal-500'
                      }`} />
                      <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePlanClick(plan.id, plan.link);
                  }}
                  className={`block w-full text-center py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-colors text-sm sm:text-base ${
                    plan.popular
                      ? 'bg-teal-500 hover:bg-teal-600 text-white'
                      : plan.dealOfDay
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-white hover:bg-gray-100 text-gray-800 border border-gray-300'
                  }`}
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
