import React from 'react';
import { Brain, Stethoscope, GraduationCap, CheckCircle2, Play, ArrowRight, Sparkles, Zap, Target, TrendingUp, Award, Clock, Star } from 'lucide-react';

const AIForDoctors: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-4 rounded-2xl shadow-xl">
                  <Brain size={48} className="text-white" />
                </div>
                <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-1">
                  <Sparkles size={16} className="text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-6">
              AI for Doctors
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 font-medium">
              🚀 Revolutionize the Way You Practice Medicine with AI!
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 max-w-3xl mx-auto">
              <p className="text-lg text-gray-600">
                Transform your medical journey with AI-powered tools and insights. 
                <span className="font-semibold text-blue-600"> The future of medicine is here!</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Cards Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Elevate Card */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden transform hover:scale-105 transition-all duration-300">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white relative">
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
                    <div className="text-blue-100 text-sm">One-time payment</div>
                  </div>
                </div>
                
                <div className="bg-yellow-400 rounded-lg px-4 py-2 inline-flex items-center">
                  <Star size={16} className="mr-2 text-white" />
                  <span className="text-white font-bold text-sm">🔥 MOST POPULAR</span>
                </div>
              </div>
              
              {/* Sessions Led By */}
              <div className="p-6 border-b border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 text-center">Sessions are led by</h4>
                
                <div className="space-y-4">
                  {/* AI Expert */}
                  <div className="flex items-center space-x-3 bg-blue-50 rounded-xl p-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">PG</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900">AI Expert and Trainer</h5>
                      <p className="text-blue-600 font-semibold">Parveen Goribidnur</p>
                      <p className="text-sm text-gray-600">Founder, United Regulation</p>
                      <p className="text-xs text-gray-500 mt-1">Seasoned AI expert with pioneering work in Speech Recognition at Microsoft's Global Product Activation. Extensive experience at Microsoft, Oracle, and EMC Corporation.</p>
                    </div>
                  </div>

                  {/* Doctor Entrepreneur */}
                  <div className="flex items-center space-x-3 bg-teal-50 rounded-xl p-4">
                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">UB</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900">Doctor turned Entrepreneur</h5>
                      <p className="text-teal-600 font-semibold">Dr. Utsav Bhattacharjee</p>
                      <p className="text-sm text-gray-600">CEO, Reflex</p>
                      <p className="text-xs text-gray-500 mt-1">Medical graduate from Calcutta Medical College (2013), former Junior Resident in Cardiology and Pediatric Surgery. Ex-AstraZeneca Medical Science Liaison, IIM Ahmedabad alumnus (2017).</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Course Content */}
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="bg-blue-50 rounded-xl p-4">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                      <Target size={16} className="mr-2 text-blue-600" />
                      Course 1: AI Fundamentals for Medicos
                    </h4>
                    <p className="text-sm text-gray-600">🧠 Unlock the secrets of AI — from its origins to how it's transforming diagnosis, imaging & patient care today.</p>
                  </div>
                  
                  <div className="bg-teal-50 rounded-xl p-4">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                      <TrendingUp size={16} className="mr-2 text-teal-600" />
                      Course 2: Advanced AI Tools for Doctors
                    </h4>
                    <p className="text-sm text-gray-600">⚡ Supercharge your daily workflow, sharpen your clinical edge, and deliver next-level care using real AI tools.</p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-xl p-4">
                    <h5 className="font-bold text-purple-900 mb-2 flex items-center">
                      <Sparkles size={16} className="mr-2" />
                      🎯 Included in Both Courses:
                    </h5>
                    <p className="text-sm text-purple-800">Harness AI for personal growth, mental clarity, and work-life balance — because smarter doctors build stronger futures.</p>
                  </div>
                </div>
                
                {/* Features List */}
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center"><CheckCircle2 size={16} className="text-blue-600 mr-2 flex-shrink-0" />AI Fundamentals for Medicos - Complete foundation course</li>
                  <li className="flex items-center"><CheckCircle2 size={16} className="text-blue-600 mr-2 flex-shrink-0" />Advanced AI Tools for Doctors - Practical implementation</li>
                  <li className="flex items-center"><CheckCircle2 size={16} className="text-blue-600 mr-2 flex-shrink-0" />Personal growth & mental clarity modules</li>
                  <li className="flex items-center"><CheckCircle2 size={16} className="text-blue-600 mr-2 flex-shrink-0" />Work-life balance optimization</li>
                  <li className="flex items-center"><CheckCircle2 size={16} className="text-blue-600 mr-2 flex-shrink-0" />2 recorded webinar sessions</li>
                  <li className="flex items-center"><CheckCircle2 size={16} className="text-blue-600 mr-2 flex-shrink-0" />Lifetime access to course materials</li>
                  <li className="flex items-center"><CheckCircle2 size={16} className="text-blue-600 mr-2 flex-shrink-0" />Certificate of completion</li>
                </ul>
                
                <div className="flex items-center justify-center mb-6">
                  <div className="flex items-center bg-blue-50 rounded-lg px-4 py-2 border border-blue-200">
                    <Play size={16} className="mr-2 text-blue-600" />
                    <Clock size={16} className="mr-2 text-teal-600" />
                    <span className="font-medium text-gray-700 text-sm">📹 2 Recorded Webinar Sessions</span>
                  </div>
                </div>
                
                <a
                  href="https://www.neetprep.com/PayNow?courseOfferId=ELEVATE_DOCTORS&app=reflex&courseId=AI_DOCTORS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  <div className="flex items-center justify-center">
                    <span className="mr-2">🚀 Enroll in Elevate</span>
                    <ArrowRight size={18} />
                  </div>
                </a>
              </div>
            </div>

            {/* Accelerate Card */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden transform hover:scale-105 transition-all duration-300">
              {/* Header */}
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-6 text-white relative">
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
                    <div className="text-teal-100 text-sm">One-time payment</div>
                  </div>
                </div>
                
                <div className="bg-green-400 rounded-lg px-4 py-2 inline-flex items-center">
                  <GraduationCap size={16} className="mr-2 text-white" />
                  <span className="text-white font-bold text-sm">🎓 STUDENT SPECIAL</span>
                </div>
              </div>
              
              {/* Sessions Led By */}
              <div className="p-6 border-b border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 text-center">Sessions are led by</h4>
                
                <div className="flex items-center space-x-3 bg-teal-50 rounded-xl p-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">UB</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Doctor turned Entrepreneur</h5>
                    <p className="text-teal-600 font-semibold">Dr. Utsav Bhattacharjee</p>
                    <p className="text-sm text-gray-600">CEO, Reflex</p>
                    <p className="text-xs text-gray-500 mt-1">Medical graduate from Calcutta Medical College (2013), former Junior Resident in Cardiology and Pediatric Surgery. Ex-AstraZeneca Medical Science Liaison, IIM Ahmedabad alumnus (2017). Serial entrepreneur with experience at Reculta, PickMywork, and Zolve. Currently CEO of Reflex and independent business consultant.</p>
                  </div>
                </div>
              </div>
              
              {/* Course Content */}
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="bg-teal-50 rounded-xl p-4">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                      <Target size={16} className="mr-2 text-teal-600" />
                      Course 1: AI Fundamentals for Medical Students
                    </h4>
                    <p className="text-sm text-gray-600">📚 Build a strong foundation in AI concepts tailored specifically for medical students preparing for their future careers.</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-xl p-4">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                      <TrendingUp size={16} className="mr-2 text-green-600" />
                      Course 2: Future-Ready Medical Practice
                    </h4>
                    <p className="text-sm text-gray-600">🔮 Learn how AI will shape the future of medicine and prepare yourself to be at the forefront of healthcare innovation.</p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-xl p-4">
                    <h5 className="font-bold text-blue-900 mb-2 flex items-center">
                      <Sparkles size={16} className="mr-2" />
                      🎯 Included in Both Courses:
                    </h5>
                    <p className="text-sm text-blue-800">Personal development modules focused on study optimization, career guidance, and building a successful medical career with AI integration.</p>
                  </div>
                </div>
                
                {/* Features List */}
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center"><CheckCircle2 size={16} className="text-teal-600 mr-2 flex-shrink-0" />AI Fundamentals for Medical Students - Tailored content</li>
                  <li className="flex items-center"><CheckCircle2 size={16} className="text-teal-600 mr-2 flex-shrink-0" />Future-ready skills for medical practice</li>
                  <li className="flex items-center"><CheckCircle2 size={16} className="text-teal-600 mr-2 flex-shrink-0" />Personal development & study optimization</li>
                  <li className="flex items-center"><CheckCircle2 size={16} className="text-teal-600 mr-2 flex-shrink-0" />Career guidance with AI integration</li>
                  <li className="flex items-center"><CheckCircle2 size={16} className="text-teal-600 mr-2 flex-shrink-0" />2 recorded webinar sessions</li>
                  <li className="flex items-center"><CheckCircle2 size={16} className="text-teal-600 mr-2 flex-shrink-0" />Lifetime access to course materials</li>
                  <li className="flex items-center"><CheckCircle2 size={16} className="text-teal-600 mr-2 flex-shrink-0" />Certificate of completion</li>
                </ul>
                
                <div className="flex items-center justify-center mb-6">
                  <div className="flex items-center bg-teal-50 rounded-lg px-4 py-2 border border-teal-200">
                    <Play size={16} className="mr-2 text-teal-600" />
                    <Clock size={16} className="mr-2 text-green-600" />
                    <span className="font-medium text-gray-700 text-sm">📹 2 Recorded Webinar Sessions</span>
                  </div>
                </div>
                
                <a
                  href="https://www.neetprep.com/PayNow?courseOfferId=ACCELERATE_STUDENTS&app=reflex&courseId=AI_STUDENTS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white py-4 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  <div className="flex items-center justify-center">
                    <span className="mr-2">🎓 Enroll in Accelerate</span>
                    <ArrowRight size={18} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Training Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              🚀 Why AI Training is Essential for Healthcare Professionals
            </h2>
            <p className="text-lg text-gray-600">
              The future of medicine is here. Stay ahead of the curve with comprehensive AI education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Brain size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 Enhanced Diagnosis</h3>
              <p className="text-gray-600">
                Learn how AI can improve diagnostic accuracy by up to 40% and speed up patient care decisions significantly.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                <Zap size={28} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">⚡ Workflow Optimization</h3>
              <p className="text-gray-600">
                Streamline your daily practice with AI-powered tools and automation, saving up to 3 hours per day.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <TrendingUp size={28} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">🔮 Future-Ready Skills</h3>
              <p className="text-gray-600">
                Prepare for the evolving healthcare landscape where 80% of medical tasks will involve AI by 2030.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              🚀 Ready to Transform Your Medical Practice?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join <span className="font-bold text-yellow-300">500+</span> healthcare professionals who are already leveraging AI.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                📚 View Course Details
              </a>
              <a
                href="mailto:supportpg@neetprep.com"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
              >
                💬 Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIForDoctors;