import React from 'react';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  postId: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ postId }) => {
  const blogContent = {
    'shadow-under-stethoscope': {
      title: 'Shadow Under The Stethoscope',
      author: 'Dr. Reflex Team',
      date: 'January 15, 2025',
      readTime: '8 min read',
      category: 'Medical Journey',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: `
        <p class="text-lg leading-relaxed mb-6">The medical profession is often romanticized in popular culture, but behind every white coat lies a complex tapestry of challenges, sacrifices, and profound human experiences that rarely see the light of day.</p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">The Hidden Struggles</h2>
        <p class="mb-6">Medical students and doctors face unique pressures that extend far beyond the academic rigor of their training. The emotional toll of dealing with life-and-death situations, the weight of responsibility, and the constant need to stay updated with evolving medical knowledge create a perfect storm of stress.</p>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
          <p class="text-blue-800 italic">"The stethoscope around our necks carries more than just the weight of the instrument – it carries the hopes, fears, and trust of every patient we encounter."</p>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">The Journey Through Medical School</h2>
        <p class="mb-6">From the first day of medical school to the final NEET PG examination, students navigate through years of intense study, clinical rotations, and personal growth. The journey is marked by:</p>
        
        <ul class="list-disc list-inside mb-6 space-y-2">
          <li>Overwhelming academic pressure and competition</li>
          <li>Financial stress and family expectations</li>
          <li>Social isolation due to demanding schedules</li>
          <li>Imposter syndrome and self-doubt</li>
          <li>The challenge of maintaining work-life balance</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Finding Light in the Shadows</h2>
        <p class="mb-6">Despite the challenges, the medical profession offers unparalleled opportunities for personal growth, meaningful impact, and the privilege of healing. Every doctor has stories of patients whose lives they've touched and who, in turn, have profoundly impacted their own perspective on life.</p>

        <p class="mb-6">The key to thriving in this demanding field lies in building resilience, seeking support when needed, and remembering the noble purpose that drew you to medicine in the first place.</p>

        <div class="bg-teal-50 border border-teal-200 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold text-teal-800 mb-3">Tips for Medical Students</h3>
          <ul class="text-teal-700 space-y-2">
            <li>• Prioritize self-care and mental health</li>
            <li>• Build a strong support network</li>
            <li>• Practice mindfulness and stress management</li>
            <li>• Celebrate small victories along the way</li>
            <li>• Remember your 'why' – the reason you chose medicine</li>
          </ul>
        </div>

        <p class="text-lg leading-relaxed">As you continue your medical journey, remember that every shadow cast by the challenges you face is proof that there's light ahead. The stethoscope you wear is not just a tool – it's a symbol of hope, healing, and the incredible privilege of serving humanity.</p>
      `
    },
    'second-shot': {
      title: 'Second Shot: Your Path to NEET PG Success',
      author: 'Dr. Reflex Team',
      date: 'January 10, 2025',
      readTime: '12 min read',
      category: 'NEET PG Strategy',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: `
        <p class="text-lg leading-relaxed mb-6">Taking a second attempt at NEET PG can feel overwhelming, but it's also an opportunity to come back stronger, wiser, and more prepared than ever before. This comprehensive guide will help you navigate your second shot with confidence and strategy.</p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Understanding the Second Attempt Mindset</h2>
        <p class="mb-6">The first step in your second attempt journey is shifting your mindset. This isn't about failure – it's about refinement. Many successful doctors have taken multiple attempts, and each attempt teaches valuable lessons that contribute to eventual success.</p>

        <div class="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
          <p class="text-green-800 font-semibold">"Success is not final, failure is not fatal: it is the courage to continue that counts." - Winston Churchill</p>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Analyzing Your Previous Attempt</h2>
        <p class="mb-6">Before diving into preparation, conduct a thorough analysis of your previous attempt:</p>
        
        <ul class="list-disc list-inside mb-6 space-y-2">
          <li>Review your score breakdown by subject</li>
          <li>Identify weak areas and knowledge gaps</li>
          <li>Analyze your time management during the exam</li>
          <li>Assess your preparation strategy and study materials</li>
          <li>Evaluate your mental and physical preparation</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Strategic Preparation Plan</h2>
        
        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">1. Focused Subject-wise Preparation</h3>
        <p class="mb-4">Based on your analysis, create a weighted study plan:</p>
        <ul class="list-disc list-inside mb-6 space-y-1 ml-4">
          <li>Allocate more time to weaker subjects</li>
          <li>Maintain strong subjects with regular revision</li>
          <li>Focus on high-yield topics with maximum weightage</li>
        </ul>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">2. Previous Year Questions (PYQs) Strategy</h3>
        <p class="mb-4">PYQs are your best friend for NEET PG preparation:</p>
        <ul class="list-disc list-inside mb-6 space-y-1 ml-4">
          <li>Solve at least 7000+ PYQs systematically</li>
          <li>Focus on repeated concepts and question patterns</li>
          <li>Time yourself while solving questions</li>
          <li>Analyze incorrect answers thoroughly</li>
        </ul>

        <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold text-blue-800 mb-3">Reflex Advantage for Second Attempts</h3>
          <p class="text-blue-700 mb-3">Our platform is specifically designed to help second-attempt candidates:</p>
          <ul class="text-blue-700 space-y-2">
            <li>• Detailed analytics to track improvement</li>
            <li>• Subject-wise weakness identification</li>
            <li>• Custom test creation for targeted practice</li>
            <li>• Progress tracking to maintain motivation</li>
            <li>• High-yield notes for quick revision</li>
          </ul>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Mental Health and Motivation</h2>
        <p class="mb-6">Second attempts can be mentally challenging. Here's how to stay motivated:</p>
        
        <ul class="list-disc list-inside mb-6 space-y-2">
          <li>Set realistic, achievable daily goals</li>
          <li>Celebrate small victories and progress</li>
          <li>Maintain a healthy study-life balance</li>
          <li>Connect with other second-attempt candidates</li>
          <li>Practice stress management techniques</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Time Management Strategy</h2>
        <p class="mb-6">Effective time management is crucial for second attempts:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div class="bg-gray-50 p-6 rounded-lg">
            <h4 class="font-semibold text-gray-800 mb-3">Daily Schedule</h4>
            <ul class="text-sm space-y-1">
              <li>• 6-8 hours focused study</li>
              <li>• 2-3 hours PYQ practice</li>
              <li>• 1 hour revision</li>
              <li>• Regular breaks and exercise</li>
            </ul>
          </div>
          <div class="bg-gray-50 p-6 rounded-lg">
            <h4 class="font-semibold text-gray-800 mb-3">Weekly Goals</h4>
            <ul class="text-sm space-y-1">
              <li>• Complete 2-3 chapters</li>
              <li>• Solve 500+ PYQs</li>
              <li>• Take 2 mock tests</li>
              <li>• Review weak areas</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Success Stories</h2>
        <p class="mb-6">Many of our successful candidates are second or third attempt students. Their stories prove that persistence pays off. Dr. Aritra Panda, who secured Rank 79 in INI CET 2025, credits his success to systematic PYQ practice and never giving up on his dreams.</p>

        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold text-yellow-800 mb-3">Final Words of Encouragement</h3>
          <p class="text-yellow-700">Your second shot is not a sign of weakness – it's a testament to your determination. Every day you choose to continue is a victory. Trust the process, stay consistent, and remember that your medical journey is unique to you.</p>
        </div>

        <p class="text-lg leading-relaxed">Your second attempt is your opportunity to show that resilience, not perfection, defines a great doctor. Embrace this journey with confidence, and let your determination be the driving force that leads you to success.</p>
      `
    }
  };

  const post = blogContent[postId as keyof typeof blogContent];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-blue-600 hover:text-blue-800">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              to="/blog"
              className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Blog
            </Link>

            {/* Category Badge */}
            <div className="mb-4">
              <span className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center text-blue-200 mb-8 space-x-6">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>{post.readTime}</span>
              </div>
              <button className="flex items-center hover:text-white transition-colors">
                <Share2 size={18} className="mr-2" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto -mt-16 relative z-10">
            <div className="bg-white p-4 rounded-2xl shadow-2xl">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <div 
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Found this helpful?</h3>
                  <p className="text-gray-600">Share it with your fellow medical students</p>
                </div>
                <button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center">
                  <Share2 size={18} className="mr-2" />
                  Share Article
                </button>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Link 
                to="/blog"
                className="inline-flex items-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                <ArrowLeft size={18} className="mr-2" />
                Back to All Articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;