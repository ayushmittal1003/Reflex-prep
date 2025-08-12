import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Plans from './components/Plans';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import WhyReflex from './components/WhyReflex';
import CTA from './components/CTA';
import Footer from './components/Footer';
import TestKnowledge from './components/TestKnowledge';
import AIForDoctors from './components/AIForDoctors';
import PromotionalPopup from './components/PromotionalPopup';

// Import your TOS page component
import TosPage from '.././src/tos/page' // create this component as a separate file
import BlogPage from './components/BlogPage';
import BlogPost from './components/BlogPost';

function HomePage() {
  const [showPopup, setShowPopup] = React.useState(false);

  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
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

    // Show popup after a short delay
    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 2000); // Show after 2 seconds

    return () => clearTimeout(popupTimer);
  }, []);

  return (
    <div className="font-['Inter',sans-serif] text-gray-800">
      <Header />
      <Hero />
      <Plans />
      <Features />
      <TestKnowledge />
      <Testimonials />
      <WhyReflex />
      <CTA />
      <Footer />
      
      {/* Promotional Popup */}
      {showPopup && (
        <PromotionalPopup onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<HomePage />} />

        {/* TOS page route */}
        <Route path="/tos" element={<TosPage />} />

        {/* AI for Doctors page route */}
        <Route path="/ai-for-doctors" element={<AIForDoctors />} />

        {/* Blog routes */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/shadow-under-stethoscope" element={<BlogPost postId="shadow-under-stethoscope" />} />
        <Route path="/blog/second-shot" element={<BlogPost postId="second-shot" />} />

        {/* You can add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
