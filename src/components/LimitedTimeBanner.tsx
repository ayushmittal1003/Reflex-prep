import React, { useState, useEffect } from 'react';
import { X, Clock, Zap, Gift } from 'lucide-react';

interface LimitedTimeBannerProps {
  onPlanSelect?: (planId: number) => void;
}

const LimitedTimeBanner: React.FC<LimitedTimeBannerProps> = ({ onPlanSelect }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState(5);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Auto-hide banner after 5 seconds
    const timer = setTimeout(() => {
      handleClose();
    }, 5000);

    // Countdown timer
    const countdownTimer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(countdownTimer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownTimer);
    };
  }, []);

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const handlePlanClick = (planId: number, originalLink: string) => {
    if (onPlanSelect) {
      onPlanSelect(planId);
    } else {
      window.open(originalLink, '_blank');
    }
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isAnimating ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      />
      
      {/* Banner */}
      <div 
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-300 ${
          isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        <div className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 rounded-2xl shadow-2xl border-4 border-yellow-400 max-w-sm sm:max-w-md md:max-w-lg mx-4 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-300/30 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/20 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-orange-300/40 rounded-full animate-ping"></div>
          </div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors z-10 group"
            aria-label="Close banner"
          >
            <X size={18} className="text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Auto-close timer */}
          <div className="absolute top-3 left-3 bg-white/20 rounded-full px-3 py-1 flex items-center">
            <Clock size={14} className="text-white mr-1" />
            <span className="text-white text-xs font-medium">{timeLeft}s</span>
          </div>

          {/* Content */}
          <div className="relative p-6 sm:p-8 text-center text-white">
            {/* Header with emojis */}
            <div className="flex items-center justify-center mb-4">
              <div className="animate-bounce mr-2">🔥</div>
              <h2 className="text-xl sm:text-2xl font-bold">LIMITED TIME OFFER</h2>
              <div className="animate-bounce ml-2">🔥</div>
            </div>

            {/* Offer details */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <Gift size={24} className="text-yellow-300 mr-2 animate-pulse" />
                <span className="text-2xl sm:text-3xl font-bold text-yellow-300">₹500 OFF</span>
                <Gift size={24} className="text-yellow-300 ml-2 animate-pulse" />
              </div>
              <p className="text-sm sm:text-base font-medium mb-2">
                🎯 On 2 Year, 3 Year & 4 Year Plans
              </p>
              <p className="text-xs sm:text-sm opacity-90">
                💪 Perfect for Long-term NEET PG Success!
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                {/* 2 Year Plan */}
                <button
                  onClick={() => handlePlanClick(3, 'https://www.neetprep.com/PayNow?courseOfferId=6934605&app=reflex&courseId=2135')}
                  className="group bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-lg p-3 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-sm font-bold mb-1">2 Year Plan</div>
                  <div className="flex items-center justify-center">
                    <span className="text-xs line-through opacity-70 mr-2">₹2999</span>
                    <span className="text-lg font-bold text-yellow-300">₹2499</span>
                  </div>
                  <div className="text-xs opacity-80 mt-1 group-hover:scale-110 transition-transform">
                    Save ₹500! 💰
                  </div>
                </button>

                {/* 3 Year Plan */}
                <button
                  onClick={() => handlePlanClick(4, 'https://www.neetprep.com/PayNow?courseOfferId=12277243&app=reflex&courseId=2135')}
                  className="group bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-lg p-3 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-sm font-bold mb-1">3 Year Plan</div>
                  <div className="flex items-center justify-center">
                    <span className="text-xs line-through opacity-70 mr-2">₹3499</span>
                    <span className="text-lg font-bold text-yellow-300">₹2999</span>
                  </div>
                  <div className="text-xs opacity-80 mt-1 group-hover:scale-110 transition-transform">
                    Save ₹500! 💰
                  </div>
                </button>

                {/* 4 Year Plan - Most Popular */}
                <button
                  onClick={() => handlePlanClick(5, 'https://www.neetprep.com/PayNow?courseOfferId=13404515&app=reflex&courseId=2135')}
                  className="group bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-orange-900 rounded-lg p-3 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-bl-lg font-bold">
                    BEST! 🏆
                  </div>
                  <div className="text-sm font-bold mb-1 mt-2">4 Year Plan</div>
                  <div className="flex items-center justify-center">
                    <span className="text-xs line-through opacity-70 mr-2">₹3999</span>
                    <span className="text-lg font-bold">₹3499</span>
                  </div>
                  <div className="text-xs mt-1 group-hover:scale-110 transition-transform">
                    Save ₹500! 💰
                  </div>
                </button>
              </div>

              {/* Additional info */}
              <div className="text-xs opacity-80 mt-4 flex items-center justify-center">
                <Zap size={14} className="mr-1 animate-pulse" />
                <span>⏰ Offer expires soon! Don't miss out on this amazing deal!</span>
              </div>
            </div>
          </div>

          {/* Decorative border animation */}
          <div className="absolute inset-0 rounded-2xl border-2 border-yellow-400 animate-pulse pointer-events-none"></div>
        </div>
      </div>
    </>
  );
};

export default LimitedTimeBanner;