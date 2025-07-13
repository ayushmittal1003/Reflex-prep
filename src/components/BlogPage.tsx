import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Search, 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  TrendingUp, 
  Star,
  Eye,
  Heart,
  Share2,
  Filter,
  Play,
  Download,
  Bookmark,
  Tag,
  ExternalLink
} from 'lucide-react';

interface BlogPageProps {
  onBack?: () => void;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  authorImage: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  views: number;
  likes: number;
  featured: boolean;
  trending: boolean;
  type: 'article' | 'video' | 'guide' | 'tips';
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Last 1-Month Strategy to Crack INI CET: Your Final Sprint to Success",
    excerpt: "Master the final month before the INI CET exam with our proven strategy that has helped thousands of students achieve their dream ranks.",
    author: "Dr. Aditya Sharma",
    authorImage: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=100",
    publishDate: "2025-01-15",
    readTime: "8 min read",
    category: "Strategy",
    tags: ["INI CET", "Last Month", "Strategy", "Preparation"],
    image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800",
    views: 15420,
    likes: 892,
    featured: true,
    trending: true,
    type: 'article'
  },
  {
    id: 2,
    title: "Complete Guide to Ace INI CET: Tips, Syllabus and Strategy",
    excerpt: "Your comprehensive roadmap to INI CET success, covering everything from syllabus analysis to advanced preparation strategies.",
    author: "Dr. Rajesh Kumar",
    authorImage: "https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=100",
    publishDate: "2025-01-12",
    readTime: "12 min read",
    category: "Complete Guide",
    tags: ["INI CET", "Complete Guide", "Syllabus", "Strategy"],
    image: "https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&w=800",
    views: 18750,
    likes: 1234,
    featured: true,
    trending: false,
    type: 'guide'
  },
  {
    id: 3,
    title: "Subject-wise Preparation Strategy for NEET PG 2025",
    excerpt: "Master each subject with our detailed preparation strategy tailored for NEET PG 2025 syllabus and exam pattern.",
    author: "Dr. Anita Sharma",
    authorImage: "https://images.pexels.com/photos/5452275/pexels-photo-5452275.jpeg?auto=compress&cs=tinysrgb&w=100",
    publishDate: "2025-01-10",
    readTime: "15 min read",
    category: "Subject Strategy",
    tags: ["NEET PG", "Subject-wise", "Strategy", "Preparation"],
    image: "https://images.pexels.com/photos/4226085/pexels-photo-4226085.jpeg?auto=compress&cs=tinysrgb&w=800",
    views: 14200,
    likes: 789,
    featured: true,
    trending: false,
    type: 'guide'
  },
  {
    id: 4,
    title: "10 Proven Tips to Revise Effectively for INI CET",
    excerpt: "Discover evidence-based revision techniques that maximize retention and boost your confidence for the INI CET examination.",
    author: "Dr. Priya Mehta",
    authorImage: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=100",
    publishDate: "2025-01-08",
    readTime: "6 min read",
    category: "Study Tips",
    tags: ["Revision", "INI CET", "Study Tips", "Memory"],
    image: "https://images.pexels.com/photos/4226263/pexels-photo-4226263.jpeg?auto=compress&cs=tinysrgb&w=800",
    views: 12350,
    likes: 567,
    featured: false,
    trending: true,
    type: 'tips'
  },
  {
    id: 5,
    title: "NEET PG Exam Pattern 2025: Everything You Need to Know",
    excerpt: "Stay updated with the latest NEET PG exam pattern, marking scheme, and important changes for 2025.",
    author: "Dr. Sneha Patel",
    authorImage: "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=100",
    publishDate: "2025-01-05",
    readTime: "7 min read",
    category: "Exam Updates",
    tags: ["NEET PG", "Exam Pattern", "2025", "Updates"],
    image: "https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=800",
    views: 22100,
    likes: 1456,
    featured: false,
    trending: true,
    type: 'article'
  },
  {
    id: 6,
    title: "How High-Yield Questions Can Transform Your NEET PG Preparation",
    excerpt: "Learn why focusing on high-yield questions is the most effective strategy for NEET PG success and how to identify them.",
    author: "Dr. Vikram Singh",
    authorImage: "https://images.pexels.com/photos/5452299/pexels-photo-5452299.jpeg?auto=compress&cs=tinysrgb&w=100",
    publishDate: "2025-01-03",
    readTime: "9 min read",
    category: "Study Strategy",
    tags: ["High-Yield", "NEET PG", "Strategy", "Questions"],
    image: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=800",
    views: 16890,
    likes: 923,
    featured: false,
    trending: false,
    type: 'article'
  }
];

const CATEGORIES = ["All", "Strategy", "Study Tips", "Complete Guide", "Exam Updates", "Subject Strategy"];

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const BlogPage: React.FC<BlogPageProps> = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

  const featuredPosts = BLOG_POSTS.filter(post => post.featured);
  const trendingPosts = BLOG_POSTS.filter(post => post.trending).slice(0, 3);

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleLike = (postId: number) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const handleReadMore = () => {
    window.open('https://reflexprep.blog/', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 font-['Inter',sans-serif]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {onBack && (
                <button 
                  onClick={onBack}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ArrowLeft size={20} className="text-gray-600" />
                </button>
              )}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img 
                    src="/image.png" 
                    alt="Reflex Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-bold text-xl text-gray-800">Reflex</span>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Knowledge Hub
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen size={16} className="mr-2" />
            Knowledge Hub
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Master NEET PG with Expert Insights
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Stay ahead with the latest strategies, tips, and insights from top medical educators and successful NEET PG rankers
          </p>
        </div>

        {/* Featured Articles Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Star className="mr-2 text-yellow-500" size={24} />
              Featured Articles
            </h2>
            <button
              onClick={handleReadMore}
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
            >
              View All <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <FeaturedArticleCard 
                key={post.id} 
                post={post} 
                onLike={handleLike}
                isLiked={likedPosts.has(post.id)}
                onReadMore={handleReadMore}
              />
            ))}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles, tips, strategies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-blue-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Articles Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {filteredPosts.map((post) => (
                <ArticleCard 
                  key={post.id} 
                  post={post}
                  onLike={handleLike}
                  isLiked={likedPosts.has(post.id)}
                  onReadMore={handleReadMore}
                />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Trending Now */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="mr-2 text-red-500" size={20} />
                Trending Now
              </h3>
              <div className="space-y-4">
                {trendingPosts.map((post, index) => (
                  <TrendingCard key={post.id} post={post} rank={index + 1} onReadMore={handleReadMore} />
                ))}
              </div>
            </div>

            {/* Stay Updated */}
            <div className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
              <p className="text-blue-100 mb-4 text-sm">
                Get the latest NEET PG strategies and tips delivered to your inbox
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500"
                />
                <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Links</h3>
              <div className="space-y-3">
                <QuickLink href="https://app.reflexprep.com/" text="Practice Questions" icon={<BookOpen size={16} />} />
                <QuickLink href="https://app.reflexprep.com/" text="Mock Tests" icon={<Play size={16} />} />
                <QuickLink href="https://app.reflexprep.com/" text="Study Notes" icon={<Download size={16} />} />
                <QuickLink href="https://reflexprep.blog/" text="All Articles" icon={<ArrowRight size={16} />} />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your NEET PG Preparation?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of medical students who are already using our proven strategies and resources
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.reflexprep.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Start Practicing Now
              <ArrowRight size={20} className="ml-2" />
            </a>
            <button
              onClick={handleReadMore}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              Explore All Articles
              <ExternalLink size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for featured article cards
interface ArticleCardProps {
  post: BlogPost;
  onLike: (id: number) => void;
  isLiked: boolean;
  onReadMore: () => void;
}

const FeaturedArticleCard: React.FC<ArticleCardProps> = ({ post, onLike, isLiked, onReadMore }) => (
  <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
    <div className="relative overflow-hidden">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute top-4 left-4">
        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
          {post.category}
        </span>
      </div>
      {post.trending && (
        <div className="absolute top-4 right-4">
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
            <TrendingUp size={12} className="mr-1" />
            Trending
          </span>
        </div>
      )}
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
        {post.title}
      </h3>
      
      <p className="text-gray-600 mb-4 line-clamp-2">
        {post.excerpt}
      </p>
      
      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {formatDate(post.publishDate)}
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            {post.readTime}
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center">
            <Eye size={14} className="mr-1" />
            {post.views.toLocaleString()}
          </div>
          <button
            onClick={() => onLike(post.id)}
            className={`flex items-center transition-colors ${
              isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
            }`}
          >
            <Heart size={14} className={`mr-1 ${isLiked ? 'fill-current' : ''}`} />
            {post.likes + (isLiked ? 1 : 0)}
          </button>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={post.authorImage} 
            alt={post.author}
            className="w-8 h-8 rounded-full mr-3"
          />
          <span className="text-sm font-medium text-gray-700">{post.author}</span>
        </div>
        
        <button
          onClick={onReadMore}
          className="text-blue-600 hover:text-blue-700 font-medium flex items-center text-sm"
        >
          Read More <ArrowRight size={14} className="ml-1" />
        </button>
      </div>
    </div>
  </div>
);

const ArticleCard: React.FC<ArticleCardProps> = ({ post, onLike, isLiked, onReadMore }) => (
  <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
    <div className="relative overflow-hidden">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute top-3 left-3">
        <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
          {post.category}
        </span>
      </div>
    </div>
    
    <div className="p-5">
      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
        {post.title}
      </h3>
      
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
        {post.excerpt}
      </p>
      
      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
        <div className="flex items-center space-x-3">
          <span>{formatDate(post.publishDate)}</span>
          <span>{post.readTime}</span>
        </div>
        <button
          onClick={() => onLike(post.id)}
          className={`flex items-center transition-colors ${
            isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
          }`}
        >
          <Heart size={12} className={`mr-1 ${isLiked ? 'fill-current' : ''}`} />
          {post.likes + (isLiked ? 1 : 0)}
        </button>
      </div>
      
      <button
        onClick={onReadMore}
        className="text-blue-600 hover:text-blue-700 font-medium flex items-center text-sm"
      >
        Read Article <ArrowRight size={12} className="ml-1" />
      </button>
    </div>
  </div>
);

const TrendingCard: React.FC<{ post: BlogPost; rank: number; onReadMore: () => void }> = ({ post, rank, onReadMore }) => (
  <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer" onClick={onReadMore}>
    <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
      {rank}
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
        {post.title}
      </h4>
      <div className="flex items-center text-xs text-gray-500 space-x-2">
        <span>{post.readTime}</span>
        <span>•</span>
        <span>{post.views.toLocaleString()} views</span>
      </div>
    </div>
  </div>
);

const QuickLink: React.FC<{ href: string; text: string; icon: React.ReactNode }> = ({ href, text, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
  >
    <div className="flex items-center">
      <div className="text-blue-500 mr-3">{icon}</div>
      <span className="text-gray-700 group-hover:text-blue-600">{text}</span>
    </div>
    <ArrowRight size={14} className="text-gray-400 group-hover:text-blue-600" />
  </a>
);

export default BlogPage;