import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../utils/constants';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [activeIndex, isAutoPlaying]);

  // Handle smooth transitions
  const handleTransition = (newIndex: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex(newIndex);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const handleNext = () => {
    const nextIndex = activeIndex === TESTIMONIALS.length - 1 ? 0 : activeIndex + 1;
    handleTransition(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = activeIndex === 0 ? TESTIMONIALS.length - 1 : activeIndex - 1;
    handleTransition(prevIndex);
  };

  const handleDotClick = (index: number) => {
    if (index !== activeIndex) {
      handleTransition(index);
    }
  };

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Doctors Trust Reflex
          </h2>
          <p className="text-base sm:text-lg opacity-90 px-4 sm:px-0">
            Hear from medical professionals who have transformed their NEET PG preparation
          </p>
        </div>
        
        <div 
          className="max-w-5xl mx-auto relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main carousel container */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-all duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${activeIndex * 100}%)`,
                filter: isTransitioning ? 'blur(1px)' : 'blur(0px)'
              }}
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-2 sm:px-4"
                >
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl shadow-2xl">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 sm:gap-6">
                      {/* Profile section */}
                      <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-shrink-0">
                        <div className="relative mb-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 rounded-full object-cover border-3 border-teal-300 shadow-lg"
                            loading="lazy"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=200';
                            }}
                          />
                          <div className="absolute -top-2 -right-2 bg-teal-400 rounded-full p-1">
                            <Quote size={16} className="text-white" />
                          </div>
                        </div>
                        <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2 text-teal-100">
                          {testimonial.name}
                        </h3>
                        <div className="bg-teal-500/30 px-3 py-1 rounded-full">
                          <span className="text-sm font-medium text-teal-200">Medical Student</span>
                        </div>
                      </div>
                      
                      {/* Testimonial content */}
                      <div className="flex-1">
                        <div className="relative">
                          <Quote size={40} className="absolute -top-4 -left-2 opacity-20 text-teal-300" />
                          <p className="text-base sm:text-lg lg:text-xl leading-relaxed pl-6 sm:pl-8 italic">
                            "{testimonial.text}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={handlePrev}
            disabled={isTransitioning}
            className="absolute top-1/2 left-2 sm:-left-4 md:-left-8 -translate-y-1/2 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 backdrop-blur-sm border border-white/30 p-2 sm:p-3 rounded-full group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
          </button>
          
          <button 
            onClick={handleNext}
            disabled={isTransitioning}
            className="absolute top-1/2 right-2 sm:-right-4 md:-right-8 -translate-y-1/2 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 backdrop-blur-sm border border-white/30 p-2 sm:p-3 rounded-full group"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
          </button>
          
          {/* Circular dots indicator */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                disabled={isTransitioning}
                className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-teal-400 scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                {/* Active dot with animated ring */}
                {index === activeIndex && (
                  <div className="absolute inset-0 rounded-full border-2 border-teal-300 animate-ping opacity-75"></div>
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* Auto-play indicator */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors flex items-center justify-center gap-2 mx-auto"
          >
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-teal-400 animate-pulse' : 'bg-white/40'}`} />
            {isAutoPlaying ? 'Auto-playing' : 'Paused'} • Click to {isAutoPlaying ? 'pause' : 'resume'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
