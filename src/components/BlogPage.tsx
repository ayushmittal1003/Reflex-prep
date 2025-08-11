import React from 'react';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 'shadow-under-stethoscope',
      title: 'Shadow Under The Stethoscope',
      excerpt: 'Exploring the hidden challenges and untold stories of medical professionals in their journey through healthcare.',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Dr. Reflex Team',
      date: 'January 15, 2025',
      readTime: '8 min read',
      category: 'Medical Journey'
    },
    {
      id: 'second-shot',
      title: 'Second Shot: Your Path to NEET PG Success',
      excerpt: 'A comprehensive guide for those taking their second attempt at NEET PG, with strategies, mindset tips, and success stories.',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Dr. Reflex Team',
      date: 'January 10, 2025',
      readTime: '12 min read',
      category: 'NEET PG Strategy'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Header Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Reflex Blog
            </h1>
            <p className="text-xl sm:text-2xl opacity-90 mb-8">
              Insights, strategies, and stories to fuel your medical journey
            </p>
            <div className="flex justify-center">
              <div className="h-1 w-32 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {blogPosts.map((post, index) => (
                <article 
                  key={post.id}
                  className="group bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:-translate-y-4 hover:shadow-3xl border border-gray-100"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-64 sm:h-72">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 sm:p-8">
                    {/* Meta Information */}
                    <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                      <div className="flex items-center">
                        <User size={16} className="mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    {/* Read More Button */}
                    <Link
                      to={`/blog/${post.id}`}
                      className="group/btn inline-flex items-center bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <span className="mr-2">Read Full Article</span>
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-xl opacity-90 mb-8">
              Get the latest insights and strategies delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;