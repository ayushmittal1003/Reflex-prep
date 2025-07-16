import React, { useState, useMemo } from 'react';
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
  Search,
  Filter,
  X
} from 'lucide-react';

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
    trending: true
  },
  {
    id: 2,
    title: "10 Proven Tips to Revise Effectively for INI CET",
    excerpt: "Discover evidence-based revision techniques that maximize retention and boost your confidence for the INI CET examination.",
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
    trending: true
  },
  {
    id: 3,
    title: "Complete Guide to Ace INI CET: Tips, Syllabus and Strategy",
    excerpt: "Your comprehensive roadmap to INI CET success, covering everything from syllabus analysis to advanced preparation strategies.",
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
    trending: false
  },
  {
    id: 4,
    title: "Subject-wise Preparation Strategy for NEET PG 2025",
    excerpt: "Master each subject with our detailed preparation strategy tailored for NEET PG 2025 syllabus and exam pattern.",
    author: "Dr. Anita Sharma",
    authorImage: "https://images.pexels.com/photos/5452275/pexels-photo-5452275.jpeg?auto=compress&cs=tinysrgb&w=100",
    publishDate: "2025-01-08",
    readTime: "15 min read",
    category: "Subject Strategy",
    tags: ["NEET PG", "Subject-wise", "Strategy", "Preparation"],
    image: "https://images.pexels.com/photos/4226085/pexels-photo-4226085.jpeg?auto=compress&cs=tinysrgb&w=800",
    views: 14200,
    likes: 789,
    featured: false,
    trending: false
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
    trending: true
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
    trending: false
  }
];

const CATEGORIES = ["All", "Strategy", "Study Tips", "Complete Guide", "Exam Updates", "Subject Strategy", "Study Strategy"];

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const BlogSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  // Filter and search logic
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch = searchTerm === "" || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const trendingPosts = filteredPosts.filter(post => post.trending);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
  };

  const hasActiveFilters = searchTerm !== "" || selectedCategory !== "All";

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen size={16} className="mr-2" />
            Knowledge Hub
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">
            Master NEET PG with Expert Insights
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-4 sm:px-0">
            Stay ahead with the latest strategies, tips, and insights from top medical educators and successful NEET PG rankers
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6 mb-8 sm:mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 w-full lg:max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles, tips, strategies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base scrollbar-hide"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                showFilters || selectedCategory !== "All"
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } text-sm sm:text-base`}
            >
              <Filter size={20} />
              <span>Filters</span>
              {selectedCategory !== "All" && (
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">1</span>
              )}
            </button>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-red-500 hover:text-red-600 font-medium flex items-center space-x-1 text-sm sm:text-base"
              >
                <X size={16} />
                <span>Clear</span>
              </button>
            )}
          </div>

          {/* Category Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-3">Categories</h4>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm ${
                      selectedCategory === category
                        ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Search Results Info */}
          {(searchTerm || selectedCategory !== "All") && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs sm:text-sm text-gray-600">
                {filteredPosts.length === 0 ? (
                  <span className="text-red-500">No articles found matching your criteria</span>
                ) : (
                  <>
                    Found <span className="font-semibold text-blue-600">{filteredPosts.length}</span> article{filteredPosts.length !== 1 ? 's' : ''}
                    {searchTerm && <span> for "<span className="font-medium">{searchTerm}</span>"</span>}
                    {selectedCategory !== "All" && <span> in <span className="font-medium">{selectedCategory}</span></span>}
                  </>
                )}
              </p>
            </div>
          )}
        </div>

        {/* No Results State */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 sm:w-24 h-16 sm:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">No Articles Found</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-md mx-auto px-4">
              We couldn't find any articles matching your search criteria. Try adjusting your filters or search terms.
            </p>
            <button
              onClick={clearFilters}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-colors text-sm sm:text-base"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <>
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <div className="mb-16">
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900 flex items-center">
                    <Star className="mr-2 text-yellow-500" size={24} />
                    Featured Articles
                  </h3>
                  <a 
                    href="https://reflexprep.blog/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center text-sm sm:text-base"
                  >
                    View All <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {featuredPosts.slice(0, 2).map((post) => (
                    <FeaturedPostCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            )}

            {/* All Posts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {trendingPosts.length > 0 && (
                  <div className="mb-8 sm:mb-12">
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                      <TrendingUp className="mr-2 text-red-500" size={24} />
                      Trending Now
                    </h3>
                    <div className="space-y-4 sm:space-y-6">
                      {trendingPosts.map((post) => (
                        <TrendingPostCard key={post.id} post={post} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Regular Posts */}
                {regularPosts.length > 0 && (
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">More Articles</h3>
                    <div className="grid grid-cols-1 gap-4 sm:gap-6">
                      {regularPosts.map((post) => (
                        <RegularPostCard key={post.id} post={post} />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-4 sm:space-y-6 mt-8 lg:mt-0">
                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl p-6 text-white">
                  <h4 className="text-lg sm:text-xl font-bold mb-3">Stay Updated</h4>
                  <p className="text-blue-100 mb-4 text-sm">
                    Get the latest NEET PG strategies and tips delivered to your inbox
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 sm:px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                    />
                    <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base">
                      Subscribe
                    </button>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Quick Links</h4>
                  <div className="space-y-3">
                    <QuickLink href="https://app.reflexprep.com/" text="Practice Questions" />
                    <QuickLink href="https://app.reflexprep.com/" text="Mock Tests" />
                    <QuickLink href="https://app.reflexprep.com/" text="Study Notes" />
                    <QuickLink href="https://reflexprep.blog/" text="All Articles" />
                  </div>
                </div>

                {/* Popular Categories */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Popular Categories</h4>
                  <div className="space-y-2">
                    {CATEGORIES.slice(1).map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left p-2 rounded-lg transition-colors text-sm sm:text-base ${
                          selectedCategory === category
                            ? 'bg-blue-50 text-blue-600 font-medium'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* CTA Section */}
        <div className="mt-16 sm:mt-20 bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-6 sm:p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your NEET PG Preparation?
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
            Join thousands of medical students who are already using our proven strategies and resources
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <a
              href="https://app.reflexprep.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center text-sm sm:text-base"
            >
              Start Practicing Now
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a
              href="https://reflexprep.blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center text-sm sm:text-base"
            >
              Explore All Articles
              <BookOpen size={18} className="ml-2" />
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
}

const FeaturedPostCard: React.FC<PostCardProps> = ({ post }) => (
  <div className="group bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
    <div className="relative overflow-hidden">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute top-4 left-4 flex items-center space-x-2">
        <span className="bg-blue-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
          {post.category}
        </span>
        {post.trending && (
          <span className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium flex items-center">
            <TrendingUp size={12} className="mr-1" />
            Trending
          </span>
        )}
      </div>
    </div>
    
    <div className="p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
        {post.title}
      </h3>
      
      <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2">
        {post.excerpt}
      </p>
      
      <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-4">
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
          <div className="flex items-center">
            <Heart size={14} className="mr-1" />
            {post.likes}
          </div>
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
          className="text-blue-600 hover:text-blue-700 font-medium flex items-center text-xs sm:text-sm"
        >
          Read More <ArrowRight size={14} className="ml-1" />
        </a>
      </div>
    </div>
  </div>
);

const TrendingPostCard: React.FC<PostCardProps> = ({ post }) => (
  <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
    <div className="flex">
      <div className="relative overflow-hidden w-24 sm:w-32 h-20 sm:h-24 flex-shrink-0">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2">
          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
            <TrendingUp size={10} className="mr-1" />
            Hot
          </span>
        </div>
      </div>
      
      <div className="p-3 sm:p-4 flex-1">
        <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h4>
        
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2 flex-wrap gap-2">
          <div className="flex items-center space-x-3">
            <span>{formatDate(post.publishDate)}</span>
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <Eye size={12} className="mr-1" />
              {post.views.toLocaleString()}
            </div>
            <div className="flex items-center">
              <Heart size={12} className="mr-1" />
              {post.likes}
            </div>
          </div>
        </div>
        
        <a
          href="https://reflexprep.blog/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 font-medium flex items-center text-xs sm:text-sm"
        >
          Read Article <ArrowRight size={12} className="ml-1" />
        </a>
      </div>
    </div>
  </div>
);

const RegularPostCard: React.FC<PostCardProps> = ({ post }) => (
  <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
    <div className="flex">
      <div className="relative overflow-hidden w-20 sm:w-24 h-16 sm:h-20 flex-shrink-0">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-3 sm:p-4 flex-1">
        <div className="flex items-center space-x-2 mb-2">
          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap">
            {post.category}
          </span>
        </div>
        
        <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h4>
        
        <div className="flex items-center justify-between text-xs text-gray-500 flex-wrap gap-2">
          <span>{formatDate(post.publishDate)}</span>
          <a
            href="https://reflexprep.blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
          >
            Read <ArrowRight size={10} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

const QuickLink: React.FC<{ href: string; text: string }> = ({ href, text }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-between p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition-colors group"
  >
    <span className="text-gray-700 group-hover:text-blue-600 text-sm sm:text-base">{text}</span>
    <ArrowRight size={14} className="text-gray-400 group-hover:text-blue-600" />
  </a>
);

export default BlogSection;