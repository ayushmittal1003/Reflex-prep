import React, { useState, useEffect } from 'react';
import { X, Copy, Check } from 'lucide-react';

interface PromotionalPopupProps {
  onClose: () => void;
}

const PromotionalPopup: React.FC<PromotionalPopupProps> = ({ onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Auto-close after 5 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText('GRAB500');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Popup Content */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 overflow-hidden animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
          aria-label="Close popup"
        >
          <X size={20} className="text-gray-600" />
        </button>

        {/* Header with gradient background */}
        <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-teal-600 text-white p-8 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10">
            <div className="text-sm font-medium text-blue-100 mb-2">LIMITED TIME OFFER</div>
            <div className="text-4xl font-bold mb-2">₹500 OFF</div>
            <div className="text-lg text-blue-100">On 2 Year, 3 Year & 4 Year Plans</div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 text-center">
          <div className="mb-6">
            <div className="text-lg font-semibold text-gray-800 mb-4">Use Coupon Code:</div>
            
            <div className="flex items-center justify-center gap-3">
              <div className="bg-blue-50 border-2 border-dashed border-blue-300 rounded-xl px-6 py-3">
                <span className="text-2xl font-bold text-blue-600">GRAB500</span>
              </div>
              
              <button
                onClick={handleCopyCode}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                {copied ? (
                  <>
                    <Check size={18} />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="text-center">
            <div className="text-lg font-semibold text-gray-800 mb-2">Don't miss out!</div>
            <div className="text-gray-600">Offer expires soon</div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="h-2 bg-gradient-to-r from-blue-500 to-teal-500"></div>
      </div>
    </div>
  );
};

export default PromotionalPopup;