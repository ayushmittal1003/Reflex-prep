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
import PaymentPage from './components/PaymentPage';

function App() {
  const [showPaymentPage, setShowPaymentPage] = useState(false);
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
  };

  // Function to redirect to practice app
  const handleShowPractice = () => {
    window.open('https://app.reflexprep.com/', '_blank');
  };

  // Function to redirect to blog
  const handleShowBlogPage = () => {
    window.open('https://reflexprep.blog/', '_blank');
  };

  // If payment page is shown, render only the payment page
  if (showPaymentPage) {
    return <PaymentPage planId={selectedPlanId} onBack={handleBackToMain} />;
  }

  return (
    <div className="font-['Inter',sans-serif] text-gray-800">
      <Header onPlanSelect={handlePlanSelect} onShowLogin={handleShowPractice} onShowBlog={handleShowBlogPage} />
      <Hero onShowLogin={handleShowPractice} />
      <Features />
      <TestKnowledge />
      <Plans onPlanSelect={handlePlanSelect} />
      <Testimonials />
      <WhyReflex />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;