import React, { useState } from 'react';
import { ArrowLeft, Shield, Star, Trophy, Users, CheckCircle2, Lock, CreditCard } from 'lucide-react';

interface PaymentPageProps {
  planId?: number;
  onBack?: () => void;
}

const PaymentPage: React.FC<PaymentPageProps> = ({ planId = 1, onBack }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    pincode: '',
    couponCode: ''
  });

  const [showCouponField, setShowCouponField] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState('');

  // Plan data based on your existing plans
  const planDetails = {
    1: { title: '6 Months Plan', price: 999, originalPrice: 1299, duration: 6 },
    2: { title: '12 Months Plan', price: 1799, originalPrice: 2399, duration: 12 },
    3: { title: '24 Months Plan', price: 2099, originalPrice: 2799, duration: 24 },
    4: { title: '36 Months Plan', price: 2399, originalPrice: 3199, duration: 36 },
    5: { title: '48 Months Plan', price: 2999, originalPrice: 3999, duration: 48 }
  };

  const currentPlan = planDetails[planId as keyof typeof planDetails] || planDetails[1];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCouponApply = () => {
    if (formData.couponCode.trim()) {
      setAppliedCoupon(formData.couponCode);
      // Here you would typically validate the coupon with your backend
    }
  };

  const handlePayment = () => {
    // Here you would integrate with your payment gateway
    console.log('Processing payment...', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 font-['Inter',sans-serif]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {onBack && (
                <button 
                  onClick={onBack}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ArrowLeft size={20} className="text-gray-600" />
                </button>
              )}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img 
                    src="/image.png" 
                    alt="Reflex Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-bold text-xl text-gray-800">Reflex</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Shield size={16} className="text-green-500" />
              <span>100% Secure Payments</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6">
                  <h1 className="text-2xl font-bold mb-2">Complete Your Purchase</h1>
                  <p className="opacity-90">Join thousands of medical students who trust Reflex</p>
                </div>

                <div className="p-6 space-y-6">
                  {/* Course Details */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">NEET PG {currentPlan.duration} Months Access</h3>
                        <p className="text-sm text-gray-600 mt-1">Complete access to all features and content</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">₹{currentPlan.price}</div>
                        <div className="text-sm text-gray-500 line-through">₹{currentPlan.originalPrice}</div>
                      </div>
                    </div>
                  </div>

                  {/* Coupon Section */}
                  <div className="border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900">Have a coupon code?</h4>
                      <button
                        onClick={() => setShowCouponField(!showCouponField)}
                        className="text-teal-500 hover:text-teal-600 text-sm font-medium"
                      >
                        {showCouponField ? 'Hide' : 'Add Coupon'}
                      </button>
                    </div>
                    
                    {showCouponField && (
                      <div className="flex gap-3">
                        <input
                          type="text"
                          name="couponCode"
                          value={formData.couponCode}
                          onChange={handleInputChange}
                          placeholder="Enter coupon code"
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        />
                        <button
                          onClick={handleCouponApply}
                          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                        >
                          Apply
                        </button>
                      </div>
                    )}
                    
                    {appliedCoupon && (
                      <div className="mt-3 flex items-center text-green-600">
                        <CheckCircle2 size={16} className="mr-2" />
                        <span className="text-sm">Coupon "{appliedCoupon}" applied successfully!</span>
                      </div>
                    )}
                  </div>

                  {/* Student Information */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Student Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email ID *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Mobile Number *
                        </label>
                        <div className="flex">
                          <select className="px-3 py-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50">
                            <option>+91</option>
                          </select>
                          <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            placeholder="Enter phone number"
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Pincode *
                        </label>
                        <input
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          placeholder="Enter pincode"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Total Amount */}
                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-gray-900">Total Amount</span>
                      <span className="text-2xl font-bold text-gray-900">₹{currentPlan.price}</span>
                    </div>
                  </div>

                  {/* Payment Button */}
                  <button
                    onClick={handlePayment}
                    className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    <Lock size={20} className="mr-2" />
                    PAY NOW & START LEARNING NOW
                  </button>

                  <div className="text-center text-sm text-gray-500">
                    <Shield size={16} className="inline mr-1" />
                    100% Secure Payments
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Course Access Info */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                    <Trophy size={20} className="text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Course Access</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  On successful payment, you will receive a confirmation in your registered email. You can login with your registered email ID using the Reflex mobile app or{' '}
                  <a href="https://app.reflexprep.com" className="text-teal-500 hover:text-teal-600">
                    app.reflexprep.com
                  </a>
                </p>
              </div>

              {/* NEET PG 2024 Results */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <Star size={20} className="text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">NEET PG 2024 Results</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Trophy size={16} className="text-yellow-500 mr-2" />
                    <span className="text-sm text-gray-700">50+ Ranks in top 1000</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-700">50%+ Hit Rate from Qbank</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">2500+ Admissions in Leading Medical Institutions</span>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <CreditCard size={20} className="text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Secure Payment</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  We accept all major payment methods including UPI, Net Banking, Credit/Debit Cards, and Wallets.
                </p>
                <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                  <Shield size={14} />
                  <span>256-bit SSL Encryption</span>
                </div>
              </div>

              {/* Company Info */}
              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <p className="text-sm text-gray-600 mb-2">© 2025 GoodEd Technologies Pvt Ltd</p>
                <p className="text-xs text-gray-500">
                  S-15, 2nd Floor, Uphar Cinema Market,<br />
                  Green Park Extension, New Delhi - 110016
                </p>
                <div className="mt-4">
                  <a href="#" className="text-xs text-teal-500 hover:text-teal-600">Terms & Conditions</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;