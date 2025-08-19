import React, { useState } from 'react';
import { Search, Calendar, Clock, User, ArrowRight, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 'shadow-under-stethoscope',
      title: 'Shadow Under The Stethoscope',
      excerpt: 'Exploring the hidden challenges and untold stories of medical professionals in their journey through healthcare.',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Dr. Reflex Team',
      date: '15/01/2025 14:30',
      readTime: '8 min read',
      views: '1.2k views',
      category: 'Medical Journey',
      tags: ['medical', 'journey', 'challenges']
    },
    {
      id: 'second-shot',
      title: 'Second Shot: Your Path to NEET PG Success',
      excerpt: 'A comprehensive guide for those taking their second attempt at NEET PG, with strategies, mindset tips, and success stories.',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Dr. Reflex Team',
      date: '10/01/2025 09:15',
      readTime: '12 min read',
      views: '2.1k views',
      category: 'NEET PG Strategy',
      tags: ['neet-pg', 'strategy', 'second-attempt']
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Blog</h1>
            <p className="text-lg text-gray-600 mb-8">
              Here you can find all our articles about medicine and NEET PG preparation
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article 
                key={post.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Tags Overlay */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span 
                        key={tag}
                        className="bg-black/70 text-white text-xs px-2 py-1 rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>

                  {/* Meta Info */}
                  <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center">
                      <Eye size={14} className="mr-1" />
                      <span>{post.views}</span>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="text-sm font-medium text-gray-900 mb-3">
                    {post.date}
                  </div>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors group/link"
                  >
                    <span>Read More</span>
                    <ArrowRight size={14} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try searching with different keywords</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;