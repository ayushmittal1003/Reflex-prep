import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import MovingBanner from './components/MovingBanner';
import Hero from './components/Hero';
import Plans from './components/Plans';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import WhyReflex from './components/WhyReflex';
import CTA from './components/CTA';
import Footer from './components/Footer';
import TestKnowledge from './components/TestKnowledge';
import AIForDoctors from './components/AIForDoctors';

// Import your TOS page component
import TosPage from '.././src/tos/page' // create this component as a separate file

function HomePage() {
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
  }, []);

  return (
    <div className="font-['Inter',sans-serif] text-gray-800">
      <Header />
      <Hero />
      <MovingBanner />
      <Features />
      <TestKnowledge />
      <Plans />
      <Testimonials />
      <WhyReflex />
      <CTA />
      <Footer />
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

        {/* You can add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
