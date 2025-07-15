import React from 'react';
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
  Share2
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
  }
];

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const BlogSection: React.FC = () => {
  const featuredPosts = BLOG_POSTS.filter(post => post.featured);
  const trendingPosts = BLOG_POSTS.filter(post => post.trending).slice(0, 2);

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

        {/* Featured Posts */}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <FeaturedPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Trending Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="mr-2 text-red-500" size={24} />
              Trending Now
            </h3>
            <div className="space-y-6">
              {trendingPosts.map((post) => (
                <TrendingPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
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
                <QuickLink href="https://app.reflexprep.com/" text="Practice Questions" />
                <QuickLink href="https://app.reflexprep.com/" text="Mock Tests" />
                <QuickLink href="https://app.reflexprep.com/" text="Study Notes" />
                <QuickLink href="https://reflexprep.blog/" text="All Articles" />
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
}

const FeaturedPostCard: React.FC<PostCardProps> = ({ post }) => (
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
          className="text-blue-600 hover:text-blue-700 font-medium flex items-center text-sm"
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
      <div className="relative overflow-hidden w-32 h-24 flex-shrink-0">
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
      
      <div className="p-4 flex-1">
        <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h4>
        
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
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
          className="text-blue-600 hover:text-blue-700 font-medium flex items-center text-sm"
        >
          Read Article <ArrowRight size={12} className="ml-1" />
        </a>
      </div>
    </div>
  </div>
);

const QuickLink: React.FC<{ href: string; text: string }> = ({ href, text }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
  >
    <span className="text-gray-700 group-hover:text-blue-600">{text}</span>
    <ArrowRight size={14} className="text-gray-400 group-hover:text-blue-600" />
  </a>
);

export default BlogSection;