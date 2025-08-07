import React, { useState, useEffect } from 'react';
import { X, Copy, Check } from 'lucide-react';

interface LimitedTimeBannerProps {
  onPlanSelect?: (planId: number) => void;
}

const LimitedTimeBanner: React.FC<LimitedTimeBannerProps> = ({ onPlanSelect }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState(5);
  const [isAnimating, setIsAnimating] = useState(false);
  const [copied, setCopied] = useState(false);

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

  const handleCopyCode = () => {
    navigator.clipboard.writeText('GRAB500');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          isAnimating ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      />
      
      {/* Banner - Much Larger Size */}
      <div 
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-300 ${
          isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 w-full max-w-6xl mx-4 overflow-hidden">
          
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition-colors z-10 group"
            aria-label="Close banner"
          >
            <X size={24} className="text-gray-600 group-hover:scale-110 transition-transform" />
          </button>

          {/* Content */}
          <div className="relative p-12 sm:p-16 lg:p-20 text-center">
            {/* Header */}
            <div className="mb-12">
              <h2 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-gray-800 mb-6">LIMITED TIME OFFER</h2>
              <div className="text-6xl sm:text-8xl lg:text-9xl font-bold text-blue-600 mb-6">₹500 OFF</div>
              <p className="text-gray-600 text-2xl sm:text-3xl lg:text-4xl">
                On 2 Year, 3 Year & 4 Year Plans
              </p>
            </div>

            {/* Coupon Code Section */}
            <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 lg:p-16 mb-12 border border-gray-200">
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-6">Use Coupon Code:</p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
                <div className="bg-white border-2 border-dashed border-blue-300 rounded-xl px-8 py-6 font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600">
                  GRAB500
                </div>
                <button
                  onClick={handleCopyCode}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl transition-colors flex items-center space-x-3 text-xl sm:text-2xl"
                >
                  {copied ? (
                    <>
                      <Check size={28} />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={28} />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Footer message */}
            <div className="text-xl sm:text-2xl lg:text-3xl text-gray-600">
              <p className="font-medium">Don't miss out!</p>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 mt-3">Offer expires soon</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LimitedTimeBanner;