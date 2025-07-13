import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Plans from './components/Plans';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import WhyReflex from './components/WhyReflex';
import CTA from './components/CTA';
import Footer from './components/Footer';
import TestKnowledge from './components/TestKnowledge';
import BlogSection from './components/BlogSection';
import BlogPage from './components/BlogPage';
import PaymentPage from './components/PaymentPage';
import LoginDashboard from './components/LoginDashboard';

function App() {
  const [showPaymentPage, setShowPaymentPage] = useState(false);
  const [showLoginDashboard, setShowLoginDashboard] = useState(false);
  const [showBlogPage, setShowBlogPage] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<number>(1);

  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  // Function to handle plan selection and show payment page
  const handlePlanSelect = (planId: number) => {
    setSelectedPlanId(planId);
    setShowPaymentPage(true);
  };

  // Function to go back to main page
  const handleBackToMain = () => {
    setShowPaymentPage(false);
    setShowLoginDashboard(false);
    setShowBlogPage(false);
  };

  // Function to show login dashboard
  const handleShowLoginDashboard = () => {
    setShowLoginDashboard(true);
  };

  // Function to show blog page
  const handleShowBlogPage = () => {
    setShowBlogPage(true);
  };

  // If payment page is shown, render only the payment page
  if (showPaymentPage) {
    return <PaymentPage planId={selectedPlanId} onBack={handleBackToMain} />;
  }

  // If login dashboard is shown, render only the login dashboard
  if (showLoginDashboard) {
    return <LoginDashboard onBack={handleBackToMain} />;
  }

  // If blog page is shown, render only the blog page
  if (showBlogPage) {
    return <BlogPage onBack={handleBackToMain} />;
  }

  return (
    <div className="font-['Inter',sans-serif] text-gray-800">
      <Header onPlanSelect={handlePlanSelect} onShowLogin={handleShowLoginDashboard} onShowBlog={handleShowBlogPage} />
      <Hero onShowLogin={handleShowLoginDashboard} />
      <Features />
      <TestKnowledge />
      <Plans onPlanSelect={handlePlanSelect} />
      <Testimonials />
      <WhyReflex />
      <BlogSection />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;