import React from 'react';
import { Brain, Stethoscope, GraduationCap, CheckCircle2, Play, ArrowRight } from 'lucide-react';

const AIForDoctors: React.FC = () => {
  const elevateFeatures = [
    'AI Fundamentals for Medicos - Complete foundation course',
    'Advanced AI Tools for Doctors - Practical implementation',
    'Personal growth & mental clarity modules',
    'Work-life balance optimization',
    '2 recorded webinar sessions',
    'Lifetime access to course materials',
    'Certificate of completion'
  ];

  const accelerateFeatures = [
    'AI Fundamentals for Medical Students - Tailored content',
    'Future-ready skills for medical practice',
    'Personal development & study optimization',
    'Career guidance with AI integration',
    '2 recorded webinar sessions',
    'Lifetime access to course materials',
    'Certificate of completion'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      {/* Header Section */}
      <section className="pt-20 pb-12 sm:pt-24 sm:pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-4 rounded-full">
                <Brain size={48} className="text-white" />
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI for Doctors
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
              Revolutionize the Way You Practice Medicine with AI!
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/50">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Transform your medical practice and career with cutting-edge AI knowledge. 
                Whether you're a practicing doctor or medical student, we have the perfect 
                course to elevate your skills and prepare you for the future of healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Offerings */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            
            {/* Elevate - For Doctors */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-200 overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Stethoscope size={32} className="mr-3" />
                    <div>
                      <h3 className="text-2xl font-bold">Elevate</h3>
                      <p className="text-blue-100">For Practicing Doctors</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">₹499</div>
                    <div className="text-sm text-blue-100">One-time payment</div>
                  </div>
                </div>
                
                <div className="bg-blue-400/30 rounded-lg p-3 mb-4">
                  <div className="text-sm font-medium opacity-90">MOST POPULAR</div>
                </div>
              </div>
              
              <div className="p-6 sm:p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Course 1: AI Fundamentals for Medicos</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Unlock the secrets of AI — from its origins to how it's transforming diagnosis, imaging & patient care today.
                  </p>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Course 2: Advanced AI Tools for Doctors</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Supercharge your daily workflow, sharpen your clinical edge, and deliver next-level care using real AI tools.
                  </p>
                  
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <h5 className="font-semibold text-blue-900 mb-2">Included in Both Courses:</h5>
                    <p className="text-blue-800 text-sm">
                      Harness AI for personal growth, mental clarity, and work-life balance — because smarter doctors build stronger futures.
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {elevateFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 size={18} className="mr-3 mt-0.5 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-center mb-6">
                  <div className="flex items-center bg-gray-50 rounded-lg px-4 py-2">
                    <Play size={16} className="mr-2 text-blue-500" />
                    <span className="text-sm text-gray-600">2 Recorded Webinar Sessions</span>
                  </div>
                </div>
                
                <a
                  href="https://www.neetprep.com/PayNow?courseOfferId=ELEVATE_DOCTORS&app=reflex&courseId=AI_DOCTORS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                >
                  <div className="flex items-center justify-center">
                    <span className="mr-2">Enroll in Elevate</span>
                    <ArrowRight size={18} />
                  </div>
                </a>
              </div>
            </div>

            {/* Accelerate - For Medical Students */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-teal-200 overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <GraduationCap size={32} className="mr-3" />
                    <div>
                      <h3 className="text-2xl font-bold">Accelerate</h3>
                      <p className="text-teal-100">For Medical Students</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">₹399</div>
                    <div className="text-sm text-teal-100">One-time payment</div>
                  </div>
                </div>
                
                <div className="bg-teal-400/30 rounded-lg p-3 mb-4">
                  <div className="text-sm font-medium opacity-90">STUDENT SPECIAL</div>
                </div>
              </div>
              
              <div className="p-6 sm:p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Course 1: AI Fundamentals for Medical Students</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Build a strong foundation in AI concepts tailored specifically for medical students preparing for their future careers.
                  </p>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Course 2: Future-Ready Medical Practice</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Learn how AI will shape the future of medicine and prepare yourself to be at the forefront of healthcare innovation.
                  </p>
                  
                  <div className="bg-teal-50 rounded-lg p-4 mb-6">
                    <h5 className="font-semibold text-teal-900 mb-2">Included in Both Courses:</h5>
                    <p className="text-teal-800 text-sm">
                      Personal development modules focused on study optimization, career guidance, and building a successful medical career with AI integration.
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {accelerateFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 size={18} className="mr-3 mt-0.5 text-teal-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-center mb-6">
                  <div className="flex items-center bg-gray-50 rounded-lg px-4 py-2">
                    <Play size={16} className="mr-2 text-teal-500" />
                    <span className="text-sm text-gray-600">2 Recorded Webinar Sessions</span>
                  </div>
                </div>
                
                <a
                  href="https://www.neetprep.com/PayNow?courseOfferId=ACCELERATE_STUDENTS&app=reflex&courseId=AI_STUDENTS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                >
                  <div className="flex items-center justify-center">
                    <span className="mr-2">Enroll in Accelerate</span>
                    <ArrowRight size={18} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AI Training Section */}
      <section className="py-12 sm:py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Why AI Training is Essential for Healthcare Professionals
            </h2>
            <p className="text-gray-600">
              The future of medicine is here. Stay ahead of the curve with comprehensive AI education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Enhanced Diagnosis</h3>
              <p className="text-gray-600 text-sm">
                Learn how AI can improve diagnostic accuracy and speed up patient care decisions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope size={32} className="text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Workflow Optimization</h3>
              <p className="text-gray-600 text-sm">
                Streamline your daily practice with AI-powered tools and automation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap size={32} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Future-Ready Skills</h3>
              <p className="text-gray-600 text-sm">
                Prepare for the evolving healthcare landscape with cutting-edge AI knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Transform Your Medical Practice?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of healthcare professionals who are already leveraging AI to provide better patient care and advance their careers.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('.container')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Course Details
            </a>
            <a
              href="mailto:supportpg@neetprep.com"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIForDoctors;