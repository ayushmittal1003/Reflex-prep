import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  BookOpen, 
  CheckCircle2, 
  XCircle, 
  Bookmark, 
  Trophy, 
  Target, 
  Clock, 
  TrendingUp,
  Calendar,
  Award,
  Brain,
  Zap,
  Star,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';

interface LoginDashboardProps {
  onBack?: () => void;
}

const LoginDashboard: React.FC<LoginDashboardProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [animatedStats, setAnimatedStats] = useState({
    totalQuestions: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    bookmarked: 0,
    streak: 0,
    accuracy: 0
  });

  // Dummy data for the dashboard
  const targetStats = {
    totalQuestions: 2847,
    correctAnswers: 1923,
    incorrectAnswers: 924,
    bookmarked: 156,
    streak: 12,
    accuracy: 67.5
  };

  const recentActivity = [
    { subject: 'Medicine', questions: 45, correct: 32, time: '2 hours ago' },
    { subject: 'Surgery', questions: 38, correct: 28, time: '1 day ago' },
    { subject: 'Pediatrics', questions: 52, correct: 41, time: '2 days ago' },
    { subject: 'Pathology', questions: 29, correct: 24, time: '3 days ago' },
  ];

  const subjectProgress = [
    { name: 'Medicine', completed: 85, total: 100, accuracy: 72 },
    { name: 'Surgery', completed: 78, total: 100, accuracy: 68 },
    { name: 'Pediatrics', completed: 92, total: 100, accuracy: 79 },
    { name: 'Pathology', completed: 65, total: 100, accuracy: 71 },
    { name: 'Pharmacology', completed: 58, total: 100, accuracy: 64 },
    { name: 'Microbiology', completed: 73, total: 100, accuracy: 76 },
  ];

  // Animate numbers on component mount
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedStats({
        totalQuestions: Math.floor(targetStats.totalQuestions * progress),
        correctAnswers: Math.floor(targetStats.correctAnswers * progress),
        incorrectAnswers: Math.floor(targetStats.incorrectAnswers * progress),
        bookmarked: Math.floor(targetStats.bookmarked * progress),
        streak: Math.floor(targetStats.streak * progress),
        accuracy: Math.floor(targetStats.accuracy * progress * 100) / 100
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats(targetStats);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const handleGoogleSignIn = () => {
    // Simulate Google sign-in
    window.open('https://app.reflexprep.com/', '_blank');
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
              Sign in to access your personalized dashboard
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Welcome to Your NEET PG Dashboard
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Track your progress, analyze your performance, and accelerate your NEET PG preparation with detailed insights
            </p>
          </div>

          {/* Stats Overview Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            <StatCard
              icon={<BookOpen className="text-blue-500" size={24} />}
              title="Total Questions"
              value={animatedStats.totalQuestions.toLocaleString()}
              subtitle="Attempted"
              color="blue"
            />
            <StatCard
              icon={<CheckCircle2 className="text-green-500" size={24} />}
              title="Correct Answers"
              value={animatedStats.correctAnswers.toLocaleString()}
              subtitle="Well done!"
              color="green"
            />
            <StatCard
              icon={<XCircle className="text-red-500" size={24} />}
              title="Incorrect"
              value={animatedStats.incorrectAnswers.toLocaleString()}
              subtitle="Learn from these"
              color="red"
            />
            <StatCard
              icon={<Bookmark className="text-yellow-500" size={24} />}
              title="Bookmarked"
              value={animatedStats.bookmarked.toLocaleString()}
              subtitle="For revision"
              color="yellow"
            />
            <StatCard
              icon={<Zap className="text-purple-500" size={24} />}
              title="Current Streak"
              value={`${animatedStats.streak} days`}
              subtitle="Keep it up!"
              color="purple"
            />
            <StatCard
              icon={<Target className="text-teal-500" size={24} />}
              title="Accuracy"
              value={`${animatedStats.accuracy}%`}
              subtitle="Overall"
              color="teal"
            />
          </div>

          {/* Tab Navigation */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-8">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                <TabButton
                  active={activeTab === 'overview'}
                  onClick={() => setActiveTab('overview')}
                  icon={<BarChart3 size={18} />}
                  label="Overview"
                />
                <TabButton
                  active={activeTab === 'subjects'}
                  onClick={() => setActiveTab('subjects')}
                  icon={<PieChart size={18} />}
                  label="Subject Progress"
                />
                <TabButton
                  active={activeTab === 'activity'}
                  onClick={() => setActiveTab('activity')}
                  icon={<Activity size={18} />}
                  label="Recent Activity"
                />
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* Performance Chart Placeholder */}
                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <TrendingUp className="mr-2 text-blue-500" size={20} />
                      Weekly Performance Trend
                    </h3>
                    <div className="h-48 bg-white rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                      <div className="text-center">
                        <BarChart3 size={48} className="text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500">Interactive charts available after sign-in</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <ActionCard
                      icon={<Brain className="text-blue-500" size={24} />}
                      title="Start Practice"
                      description="Continue where you left off"
                      action="Resume Session"
                      color="blue"
                    />
                    <ActionCard
                      icon={<Trophy className="text-yellow-500" size={24} />}
                      title="Take Mock Test"
                      description="Full-length practice exam"
                      action="Start Test"
                      color="yellow"
                    />
                    <ActionCard
                      icon={<Bookmark className="text-purple-500" size={24} />}
                      title="Review Bookmarks"
                      description="Revisit saved questions"
                      action="Open Bookmarks"
                      color="purple"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'subjects' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Subject-wise Progress</h3>
                  {subjectProgress.map((subject, index) => (
                    <SubjectProgressCard key={index} subject={subject} />
                  ))}
                </div>
              )}

              {activeTab === 'activity' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Study Sessions</h3>
                  {recentActivity.map((activity, index) => (
                    <ActivityCard key={index} activity={activity} />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sign In Section */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center max-w-md mx-auto">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Start?</h3>
              <p className="text-gray-600">
                Sign in to access your personalized dashboard and continue your NEET PG preparation journey
              </p>
            </div>

            <button
              onClick={handleGoogleSignIn}
              className="w-full bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 py-4 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-3 mb-4 hover:shadow-lg"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Continue with Google</span>
            </button>

            <div className="text-xs text-gray-500">
              By signing in, you agree to our{' '}
              <a href="#" className="text-blue-500 hover:text-blue-600">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-blue-500 hover:text-blue-600">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Components
interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, subtitle, color }) => (
  <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex items-center justify-between mb-2">
      {icon}
    </div>
    <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
    <div className="text-xs text-gray-600 mb-1">{title}</div>
    <div className="text-xs text-gray-500">{subtitle}</div>
  </div>
);

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

const TabButton: React.FC<TabButtonProps> = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
      active
        ? 'border-blue-500 text-blue-600'
        : 'border-transparent text-gray-500 hover:text-gray-700'
    }`}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </button>
);

interface ActionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
  color: string;
}

const ActionCard: React.FC<ActionCardProps> = ({ icon, title, description, action, color }) => (
  <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer">
    <div className="flex items-center mb-3">
      {icon}
      <h4 className="text-lg font-semibold text-gray-900 ml-3">{title}</h4>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <button className={`text-${color}-600 hover:text-${color}-700 font-medium text-sm`}>
      {action} →
    </button>
  </div>
);

interface SubjectProgressCardProps {
  subject: {
    name: string;
    completed: number;
    total: number;
    accuracy: number;
  };
}

const SubjectProgressCard: React.FC<SubjectProgressCardProps> = ({ subject }) => (
  <div className="bg-gray-50 rounded-xl p-4">
    <div className="flex items-center justify-between mb-3">
      <h4 className="font-semibold text-gray-900">{subject.name}</h4>
      <div className="text-sm text-gray-600">
        {subject.completed}% Complete • {subject.accuracy}% Accuracy
      </div>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
      <div 
        className="bg-gradient-to-r from-blue-500 to-teal-500 h-3 rounded-full transition-all duration-1000"
        style={{ width: `${subject.completed}%` }}
      ></div>
    </div>
  </div>
);

interface ActivityCardProps {
  activity: {
    subject: string;
    questions: number;
    correct: number;
    time: string;
  };
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => (
  <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between">
    <div className="flex items-center space-x-4">
      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
        <BookOpen className="text-blue-600" size={20} />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{activity.subject}</h4>
        <p className="text-sm text-gray-600">
          {activity.questions} questions • {activity.correct} correct
        </p>
      </div>
    </div>
    <div className="text-sm text-gray-500">{activity.time}</div>
  </div>
);

export default LoginDashboard;