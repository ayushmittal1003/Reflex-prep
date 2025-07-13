import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  BookOpen, 
  TrendingUp, 
  Star, 
  Eye,
  Heart,
  Share2,
  Filter,
  Search,
  ChevronLeft,
  ChevronRight,
  Play,
  Download,
  Bookmark,
  Tag
} from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
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
    content: "The final month before INI CET is crucial. Here's your complete roadmap...",
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
    title: "10 Proven Tips to Revise Effectively for INI CET",
    excerpt: "Discover evidence-based revision techniques that maximize retention and boost your confidence for the INI CET examination.",
    content: "Effective revision is the key to success in INI CET...",
    author: "Dr. Priya Mehta",
    authorImage: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=100",
    publishDate: "2025-01-12",
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
    id: 3,
    title: "Complete Guide to Ace INI CET: Tips, Syllabus and Strategy",
    excerpt: "Your comprehensive roadmap to INI CET success, covering everything from syllabus analysis to advanced preparation strategies.",
    content: "INI CET requires a systematic approach...",
    author: "Dr. Rajesh Kumar",
    authorImage: "https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=100",
    publishDate: "2025-01-10",
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
    id: 4,
    title: "NEET PG Exam Pattern 2025: Everything You Need to Know",
    excerpt: "Stay updated with the latest NEET PG exam pattern, marking scheme, and important changes for 2025.",
    content: "The NEET PG 2025 exam pattern has some important updates...",
    author: "Dr. Sneha Patel",
    authorImage: "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=100",
    publishDate: "2025-01-08",
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
    id: 5,
    title: "How High-Yield Questions Can Transform Your NEET PG Preparation",
    excerpt: "Learn why focusing on high-yield questions is the most effective strategy for NEET PG success and how to identify them.",
    content: "High-yield questions are the secret weapon...",
    author: "Dr. Vikram Singh",
    authorImage: "https://images.pexels.com/photos/5452299/pexels-photo-5452299.jpeg?auto=compress&cs=tinysrgb&w=100",
    publishDate: "2025-01-05",
    readTime: "9 min read",
    category: "Study Strategy",
    tags: ["High-Yield", "NEET PG", "Strategy", "Questions"],
    image: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=800",
    views: 16890,
    likes: 923,
    featured: false,
    trending: false,
    type: 'article'
  },
  {
    id: 6,
    title: "Subject-wise Preparation Strategy for NEET PG 2025",
    excerpt: "Master each subject with our detailed preparation strategy tailored for NEET PG 2025 syllabus and exam pattern.",
    content: "Each subject in NEET PG requires a unique approach...",
    author: "Dr. Anita Sharma",
    authorImage: "https://images.pexels.com/photos/5452275/pexels-photo-5452275.jpeg?auto=compress&cs=tinysrgb&w=100",
    publishDate: "2025-01-03",
    readTime: "15 min read",
    category: "Subject Strategy",
    tags: ["NEET PG", "Subject-wise", "Strategy", "Preparation"],
    image: "https://images.pexels.com/photos/4226085/pexels-photo-4226085.jpeg?auto=compress&cs=tinysrgb&w=800",
    views: 14200,
    likes: 789,
    featured: true,
    trending: false,
    type: 'guide'
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

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'video': return <Play size={16} className="text-red-500" />;
    case 'guide': return <BookOpen size={16} className="text-blue-500" />;
    case 'tips': return <Star size={16} className="text-yellow-500" />;
    default: return <BookOpen size={16} className="text-gray-500" />;
  }
};

const BlogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  const [bookmarkedPosts, setBookmarkedPosts] = useState<Set<number>>(new Set());
  const [isLoading, setIsLoading] = useState(false);

  const postsPerPage = 6;

  // Filter posts based on category and search
  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  // Get featured and trending posts
  const featuredPosts = BLOG_POSTS.filter(post => post.featured).slice(0, 3);
  const trendingPosts = BLOG_POSTS.filter(post => post.trending).slice(0, 4);

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

  const handleBookmark = (postId: number) => {
    setBookmarkedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen size={16} className="mr-2" />
            Knowledge Hub
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Master NEET PG with Expert Insights
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Stay ahead with the latest strategies, tips, and insights from top medical educators and successful NEET PG rankers
          </p>
        </div>

        {/* Featured Posts Carousel */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <Star className="mr-2 text-yellow-500" size={24} />
              Featured Articles
            </h3>
            <a 
              href="https://reflexprep.blog/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
            >
              View All <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <FeaturedPostCard 
                key={post.id} 
                post={post} 
                onLike={handleLike}
                onBookmark={handleBookmark}
                isLiked={likedPosts.has(post.id)}
                isBookmarked={bookmarkedPosts.has(post.id)}
              />
            ))}
          </div>
        </div>

        {/* Search and Filter Section */}
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
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentPage(1);
                    }}
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
          {/* Blog Posts */}
          <div className="lg:col-span-3">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[...Array(6)].map((_, index) => (
                  <BlogPostSkeleton key={index} />
                ))}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {currentPosts.map((post) => (
                    <BlogPostCard 
                      key={post.id} 
                      post={post}
                      onLike={handleLike}
                      onBookmark={handleBookmark}
                      isLiked={likedPosts.has(post.id)}
                      isBookmarked={bookmarkedPosts.has(post.id)}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center space-x-2">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    
                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-4 py-2 rounded-lg font-medium ${
                          currentPage === index + 1
                            ? 'bg-blue-500 text-white'
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                    
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Trending Posts */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="mr-2 text-red-500" size={20} />
                Trending Now
              </h4>
              <div className="space-y-4">
                {trendingPosts.map((post, index) => (
                  <TrendingPostCard key={post.id} post={post} rank={index + 1} />
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-3">Stay Updated</h4>
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
              <h4 className="text-xl font-bold text-gray-900 mb-6">Quick Links</h4>
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
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your NEET PG Preparation?
          </h3>
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
            <a
              href="https://reflexprep.blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              Explore All Articles
              <BookOpen size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Component for featured post cards
interface PostCardProps {
  post: BlogPost;
  onLike: (id: number) => void;
  onBookmark: (id: number) => void;
  isLiked: boolean;
  isBookmarked: boolean;
}

const FeaturedPostCard: React.FC<PostCardProps> = ({ post, onLike, onBookmark, isLiked, isBookmarked }) => (
  <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
    <div className="relative overflow-hidden">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute top-4 left-4 flex items-center space-x-2">
        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
          {post.category}
        </span>
        {post.trending && (
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
            <TrendingUp size={12} className="mr-1" />
            Trending
          </span>
        )}
      </div>
      <div className="absolute top-4 right-4">
        <button
          onClick={() => onBookmark(post.id)}
          className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
            isBookmarked ? 'bg-yellow-500 text-white' : 'bg-white/80 text-gray-700 hover:bg-yellow-500 hover:text-white'
          }`}
        >
          <Bookmark size={16} />
        </button>
      </div>
    </div>
    
    <div className="p-6">
      <div className="flex items-center space-x-2 mb-3">
        {getTypeIcon(post.type)}
        <span className="text-sm text-gray-500">{post.type}</span>
      </div>
      
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
        
        <a
          href="https://reflexprep.blog/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 font-medium flex items-center text-sm"
        >
          Read More <ArrowRight size={14} className="ml-1" />
        </a>
      </div>
    </div>
  </div>
);

const BlogPostCard: React.FC<PostCardProps> = ({ post, onLike, onBookmark, isLiked, isBookmarked }) => (
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
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onLike(post.id)}
            className={`flex items-center transition-colors ${
              isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
            }`}
          >
            <Heart size={12} className={`mr-1 ${isLiked ? 'fill-current' : ''}`} />
            {post.likes + (isLiked ? 1 : 0)}
          </button>
          <button
            onClick={() => onBookmark(post.id)}
            className={`transition-colors ${
              isBookmarked ? 'text-yellow-500' : 'text-gray-500 hover:text-yellow-500'
            }`}
          >
            <Bookmark size={12} />
          </button>
        </div>
      </div>
      
      <a
        href="https://reflexprep.blog/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-700 font-medium flex items-center text-sm"
      >
        Read Article <ArrowRight size={12} className="ml-1" />
      </a>
    </div>
  </div>
);

const TrendingPostCard: React.FC<{ post: BlogPost; rank: number }> = ({ post, rank }) => (
  <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
    <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
      {rank}
    </div>
    <div className="flex-1 min-w-0">
      <h5 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
        {post.title}
      </h5>
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

const BlogPostSkeleton: React.FC = () => (
  <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden animate-pulse">
    <div className="w-full h-40 bg-gray-200"></div>
    <div className="p-5">
      <div className="h-4 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
      <div className="h-3 bg-gray-200 rounded mb-1"></div>
      <div className="h-3 bg-gray-200 rounded w-2/3 mb-3"></div>
      <div className="flex justify-between">
        <div className="h-3 bg-gray-200 rounded w-1/4"></div>
        <div className="h-3 bg-gray-200 rounded w-1/4"></div>
      </div>
    </div>
  </div>
);

export default BlogSection;