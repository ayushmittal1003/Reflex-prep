import React, { useState, useEffect } from 'react';
import { X, Clock, Copy, Check } from 'lucide-react';

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
      {/* Backdrop - removed blur */}
      <div 
        className={`fixed inset-0 bg-black/30 z-50 transition-opacity duration-300 ${
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
        <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 max-w-sm sm:max-w-md mx-4 overflow-hidden">
          
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors z-10 group"
            aria-label="Close banner"
          >
            <X size={18} className="text-gray-600 group-hover:scale-110 transition-transform" />
          </button>

          {/* Auto-close timer */}
          <div className="absolute top-3 left-3 bg-blue-100 rounded-full px-3 py-1 flex items-center">
            <Clock size={14} className="text-blue-600 mr-1" />
            <span className="text-blue-600 text-xs font-medium">{timeLeft}s</span>
          </div>

          {/* Content */}
          <div className="relative p-6 sm:p-8 text-center">
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">LIMITED TIME OFFER</h2>
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">₹500 OFF</div>
              <p className="text-gray-600 text-sm sm:text-base">
                On 2 Year, 3 Year & 4 Year Plans
              </p>
            </div>

            {/* Coupon Code Section */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-200">
              <p className="text-sm text-gray-600 mb-3">Use Coupon Code:</p>
              <div className="flex items-center justify-center space-x-3">
                <div className="bg-white border-2 border-dashed border-blue-300 rounded-lg px-4 py-2 font-mono text-lg font-bold text-blue-600">
                  GRAB500
                </div>
                <button
                  onClick={handleCopyCode}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
                >
                  {copied ? (
                    <>
                      <Check size={16} />
                      <span className="text-sm">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span className="text-sm">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Footer message */}
            <div className="text-sm text-gray-600">
              <p className="font-medium">Don't miss out!</p>
              <p className="text-xs text-gray-500 mt-1">Offer expires soon</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LimitedTimeBanner;