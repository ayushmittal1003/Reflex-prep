import React from 'react';
import { Brain, Stethoscope, GraduationCap, CheckCircle2, Play, ArrowRight, Sparkles, Zap, Target, TrendingUp, Award, Clock } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header Section with Enhanced Design */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Animated Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-blue-500 to-teal-500 p-6 rounded-full transform hover:scale-110 transition-all duration-500 shadow-2xl">
                  <Brain size={56} className="text-white animate-pulse" />
                </div>
                <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-2 animate-bounce">
                  <Sparkles size={20} className="text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-6 animate-fade-in">
              AI for Doctors
            </h1>
            
            <div className="relative mb-8">
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-4 font-medium">
                🚀 Revolutionize the Way You Practice Medicine with AI!
              </p>
              <div className="flex justify-center">
                <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/50 transform hover:scale-105 transition-all duration-500">
              <div className="flex items-center justify-center mb-6">
                <Zap size={24} className="text-yellow-500 mr-2 animate-pulse" />
                <span className="text-lg font-semibold text-gray-800">Transform Your Medical Journey</span>
                <Zap size={24} className="text-yellow-500 ml-2 animate-pulse" />
              </div>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Join the AI revolution in healthcare! Whether you're a practicing doctor or medical student, 
                unlock the power of artificial intelligence to enhance patient care, streamline workflows, 
                and accelerate your career growth. 
                <span className="font-semibold text-blue-600"> The future of medicine is here!</span>
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Doctors Trained</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-teal-600">95%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Access</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-pink-600">∞</div>
                <div className="text-sm text-gray-600">Lifetime Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Offerings with Enhanced Design */}
      <section className="py-16 sm:py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Choose Your AI Transformation Path
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored courses designed for your specific needs and career stage
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
            
            {/* Elevate - For Doctors */}
            <div className="group relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative bg-white rounded-3xl shadow-2xl border-2 border-blue-200 overflow-hidden transform transition-all duration-500 hover:-translate-y-4 hover:shadow-3xl">
                {/* Header with Gradient */}
                <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="bg-white/20 p-3 rounded-2xl mr-4">
                          <Stethoscope size={32} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold">Elevate</h3>
                          <p className="text-blue-100 text-lg">For Practicing Doctors</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-4xl font-bold">₹499</div>
                        <div className="text-blue-100">One-time payment</div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl p-4 mb-4 transform hover:scale-105 transition-all duration-300">
                      <div className="flex items-center justify-center">
                        <Award size={20} className="mr-2 text-white" />
                        <div className="text-white font-bold">🔥 MOST POPULAR</div>
                        <Award size={20} className="ml-2 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Instructors Section for Elevate */}
                <div className="p-8 border-t border-blue-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Sessions are led by</h4>
                  
                  <div className="space-y-6">
                    {/* AI Expert */}
                    <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-lg">PG</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h5 className="text-lg font-bold text-gray-900 mb-1">AI Expert and Trainer</h5>
                          <h6 className="text-blue-600 font-semibold mb-2">Parveen Goribidnur</h6>
                          <p className="text-sm text-gray-600 mb-2 font-medium">Founder, United Regulation</p>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            Seasoned AI expert with pioneering work in Speech Recognition at Microsoft's Global Product Activation. 
                            Extensive experience at Microsoft, Oracle, and EMC Corporation. B.Tech in Computer Systems from UBC. 
                            Algorithms, AI, and Civil Liberties Fellow with Friedrich Naumann Foundation, Berlin.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Doctor Entrepreneur */}
                    <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-lg">UB</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h5 className="text-lg font-bold text-gray-900 mb-1">Doctor turned Entrepreneur</h5>
                          <h6 className="text-teal-600 font-semibold mb-2">Dr. Utsav Bhattacharjee</h6>
                          <p className="text-sm text-gray-600 mb-2 font-medium">CEO, Reflex</p>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            Medical graduate from Calcutta Medical College (2013), former Junior Resident in Cardiology and Pediatric Surgery. 
                            Ex-AstraZeneca Medical Science Liaison, IIM Ahmedabad alumnus (2017). Serial entrepreneur with experience at 
                            Reculta, PickMywork, and Zolve. Currently CEO of Reflex and independent business consultant.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="mb-8">
                    <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-6 mb-6 transform hover:scale-105 transition-all duration-300">
                      <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                        <Target size={20} className="mr-2 text-blue-600" />
                        Course 1: AI Fundamentals for Medicos
                      </h4>
                      <p className="text-gray-600 mb-4">
                        🧠 Unlock the secrets of AI — from its origins to how it's transforming diagnosis, imaging & patient care today.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-6 mb-6 transform hover:scale-105 transition-all duration-300">
                      <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                        <TrendingUp size={20} className="mr-2 text-teal-600" />
                        Course 2: Advanced AI Tools for Doctors
                      </h4>
                      <p className="text-gray-600 mb-4">
                        ⚡ Supercharge your daily workflow, sharpen your clinical edge, and deliver next-level care using real AI tools.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mb-6">
                      <h5 className="font-bold text-purple-900 mb-3 flex items-center">
                        <Sparkles size={18} className="mr-2" />
                        🎯 Included in Both Courses:
                      </h5>
                      <p className="text-purple-800">
                        Harness AI for personal growth, mental clarity, and work-life balance — because smarter doctors build stronger futures.
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {elevateFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start group">
                        <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1 group-hover:bg-blue-200 transition-colors">
                          <CheckCircle2 size={16} className="text-blue-600" />
                        </div>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-center mb-8">
                    <div className="flex items-center bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl px-6 py-3 border border-blue-200">
                      <Play size={18} className="mr-3 text-blue-600" />
                      <Clock size={18} className="mr-2 text-teal-600" />
                      <span className="font-medium text-gray-700">2 Recorded Webinar Sessions</span>
                    </div>
                  </div>
                  
                  <a
                    href="https://www.neetprep.com/PayNow?courseOfferId=ELEVATE_DOCTORS&app=reflex&courseId=AI_DOCTORS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white py-5 px-8 rounded-2xl font-bold transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl text-center relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <div className="relative flex items-center justify-center text-lg">
                      <span className="mr-3">🚀 Enroll in Elevate</span>
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Accelerate - For Medical Students */}
            <div className="group relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative bg-white rounded-3xl shadow-2xl border-2 border-teal-200 overflow-hidden transform transition-all duration-500 hover:-translate-y-4 hover:shadow-3xl">
                {/* Header with Gradient */}
                <div className="bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="bg-white/20 p-3 rounded-2xl mr-4">
                          <GraduationCap size={32} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold">Accelerate</h3>
                          <p className="text-teal-100 text-lg">For Medical Students</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-4xl font-bold">₹399</div>
                        <div className="text-teal-100">One-time payment</div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-400 to-emerald-400 rounded-xl p-4 mb-4 transform hover:scale-105 transition-all duration-300">
                      <div className="flex items-center justify-center">
                        <GraduationCap size={20} className="mr-2 text-white" />
                        <div className="text-white font-bold">🎓 STUDENT SPECIAL</div>
                        <GraduationCap size={20} className="ml-2 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Instructors Section for Accelerate */}
                <div className="p-8 border-t border-teal-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Sessions are led by</h4>
                  
                  <div className="space-y-6">
                    {/* Doctor Entrepreneur */}
                    <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-2xl p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-lg">UB</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h5 className="text-lg font-bold text-gray-900 mb-1">Doctor turned Entrepreneur</h5>
                          <h6 className="text-teal-600 font-semibold mb-2">Dr. Utsav Bhattacharjee</h6>
                          <p className="text-sm text-gray-600 mb-2 font-medium">CEO, Reflex</p>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            Medical graduate from Calcutta Medical College (2013), former Junior Resident in Cardiology and Pediatric Surgery. 
                            Ex-AstraZeneca Medical Science Liaison, IIM Ahmedabad alumnus (2017). Serial entrepreneur with experience at 
                            Reculta, PickMywork, and Zolve. Currently CEO of Reflex and independent business consultant.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="mb-8">
                    <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-2xl p-6 mb-6 transform hover:scale-105 transition-all duration-300">
                      <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                        <Target size={20} className="mr-2 text-teal-600" />
                        Course 1: AI Fundamentals for Medical Students
                      </h4>
                      <p className="text-gray-600 mb-4">
                        📚 Build a strong foundation in AI concepts tailored specifically for medical students preparing for their future careers.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 mb-6 transform hover:scale-105 transition-all duration-300">
                      <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                        <TrendingUp size={20} className="mr-2 text-green-600" />
                        Course 2: Future-Ready Medical Practice
                      </h4>
                      <p className="text-gray-600 mb-4">
                        🔮 Learn how AI will shape the future of medicine and prepare yourself to be at the forefront of healthcare innovation.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-6">
                      <h5 className="font-bold text-blue-900 mb-3 flex items-center">
                        <Sparkles size={18} className="mr-2" />
                        🎯 Included in Both Courses:
                      </h5>
                      <p className="text-blue-800">
                        Personal development modules focused on study optimization, career guidance, and building a successful medical career with AI integration.
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {accelerateFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start group">
                        <div className="bg-teal-100 rounded-full p-1 mr-3 mt-1 group-hover:bg-teal-200 transition-colors">
                          <CheckCircle2 size={16} className="text-teal-600" />
                        </div>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-center mb-8">
                    <div className="flex items-center bg-gradient-to-r from-teal-50 to-green-50 rounded-xl px-6 py-3 border border-teal-200">
                      <Play size={18} className="mr-3 text-teal-600" />
                      <Clock size={18} className="mr-2 text-green-600" />
                      <span className="font-medium text-gray-700">2 Recorded Webinar Sessions</span>
                    </div>
                  </div>
                  
                  <a
                    href="https://www.neetprep.com/PayNow?courseOfferId=ACCELERATE_STUDENTS&app=reflex&courseId=AI_STUDENTS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block w-full bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 hover:from-teal-600 hover:via-teal-700 hover:to-teal-800 text-white py-5 px-8 rounded-2xl font-bold transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl text-center relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <div className="relative flex items-center justify-center text-lg">
                      <span className="mr-3">🎓 Enroll in Accelerate</span>
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AI Training Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-sm relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              🚀 Why AI Training is Essential for Healthcare Professionals
            </h2>
            <p className="text-xl text-gray-600">
              The future of medicine is here. Stay ahead of the curve with comprehensive AI education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group text-center transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all duration-300">
                <Brain size={36} className="text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Enhanced Diagnosis</h3>
              <p className="text-gray-600">
                Learn how AI can improve diagnostic accuracy by up to 40% and speed up patient care decisions significantly.
              </p>
            </div>
            
            <div className="group text-center transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-teal-100 to-teal-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all duration-300">
                <Stethoscope size={36} className="text-teal-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">⚡ Workflow Optimization</h3>
              <p className="text-gray-600">
                Streamline your daily practice with AI-powered tools and automation, saving up to 3 hours per day.
              </p>
            </div>
            
            <div className="group text-center transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all duration-300">
                <GraduationCap size={36} className="text-purple-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">🔮 Future-Ready Skills</h3>
              <p className="text-gray-600">
                Prepare for the evolving healthcare landscape where 80% of medical tasks will involve AI by 2030.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/50 to-teal-600/50"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              🚀 Ready to Transform Your Medical Practice?
            </h2>
            <p className="text-xl sm:text-2xl mb-8 opacity-90 leading-relaxed">
              Join <span className="font-bold text-yellow-300">500+</span> healthcare professionals who are already leveraging AI to provide better patient care and advance their careers.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-300">24/7</div>
                  <div className="text-white/80">Lifetime Access</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-300">100%</div>
                  <div className="text-white/80">Money Back Guarantee</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-300">∞</div>
                  <div className="text-white/80">Updates Included</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <div className="flex items-center">
                  <span className="mr-2">📚 View Course Details</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </a>
              <a
                href="mailto:supportpg@neetprep.com"
                className="group border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center">
                  <span className="mr-2">💬 Contact Support</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIForDoctors;