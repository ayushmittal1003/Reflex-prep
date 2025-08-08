import React from 'react';

const MovingBanner: React.FC = () => {
  return (
    <div className="bg-black text-white py-3 overflow-hidden relative">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-lg font-medium mx-8">
          Limited Time Offer - Use Coupon Code: GRAB500 to get ₹500 off on 2/3/4 year plans
        </span>
        <span className="text-lg font-medium mx-8">
          Limited Time Offer - Use Coupon Code: GRAB500 to get ₹500 off on 2/3/4 year plans
        </span>
        <span className="text-lg font-medium mx-8">
          Limited Time Offer - Use Coupon Code: GRAB500 to get ₹500 off on 2/3/4 year plans
        </span>
        <span className="text-lg font-medium mx-8">
          Limited Time Offer - Use Coupon Code: GRAB500 to get ₹500 off on 2/3/4 year plans
        </span>
      </div>
    </div>
  );
};

export default MovingBanner;