import React from 'react';

const MovingBanner: React.FC = () => {
  const bannerContent = "🔥 LIMITED TIME OFFER 🔥 Use Coupon Code: GRAB500 to get ₹500 OFF on 2/3/4 Year Plans 💰 Don't Miss Out - Save Big Today! 🎯 Thousands of Students Already Benefiting 📚 Your Success Story Starts Here ⭐";

  return (
    <div className="relative -mt-1 bg-black text-white overflow-hidden z-10">
      {/* Moving text container */}
      <div className="py-3 sm:py-4 md:py-5">
        <div className="animate-marquee whitespace-nowrap flex">
          {/* Repeat content multiple times for seamless loop */}
          {[...Array(4)].map((_, index) => (
            <span 
              key={index}
              className="inline-block text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold tracking-wide mx-8 sm:mx-12 md:mx-16 lg:mx-20"
              style={{ 
                fontFamily: 'Arial Black, Arial, sans-serif',
                textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
              }}
            >
              {bannerContent}
            </span>
          ))}
        </div>
      </div>
      
      {/* Gradient edges for smooth fade effect */}
      <div className="absolute top-0 left-0 w-8 sm:w-12 md:w-16 lg:w-20 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-8 sm:w-12 md:w-16 lg:w-20 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
    </div>
  );
};

export default MovingBanner;