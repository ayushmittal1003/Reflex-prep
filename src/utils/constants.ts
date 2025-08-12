import { Feature, Plan, SocialLink, Testimonial } from '../types';
import { BookText, Brain, BarChartIcon as ChartMixedIcon, Laptop, Layout, LineChart, Monitor, Smartphone, TestTube, TestTubes, Trophy, Zap, FileText } from 'lucide-react';

export const APP_LINKS = {
  GOOGLE_PLAY: 'https://play.google.com/store/apps/details?id=com.gooded.pgpyqs&hl=en_IN',
  APP_STORE: 'https://apps.apple.com/in/app/reflex-neet-pg-preparation/id6449163339',
  WEB_APP: 'https://app.reflexprep.com/',
  WHATSAPP: 'https://api.whatsapp.com/send/?phone=917835083689&text=Hello%2C+I+need+assistance%21&type=phone_number&app_absent=0',
};

export const PLANS: Plan[] = [
  {
    id: 1,
    title: '6 Months Plan',
    duration: 6,
    price: 999,
    features: [
      'Access to 7000+ PYQs',
      'Basic handwritten notes',
      'Custom test creation',
      'Mobile & web access',
    ],
    buttonText: 'Buy for 6 months',
    link: 'https://www.neetprep.com/PayNow?courseOfferId=216413&app=reflex&courseId=2135',
  },
  {
    id: 2,
    title: '12 Months Plan',
    duration: 12,
    price: 1899,
    features: [
      'Access to 7000+ PYQs',
      'Complete handwritten notes',
      'Custom test creation',
      'Mobile & web access',
      'Performance analytics',
    ],
    buttonText: 'Buy for 12 months',
    link: 'https://www.neetprep.com/PayNow?courseOfferId=216414&app=reflex&courseId=2135',
    popular: true,
  },
  {
    id: 3,
    title: '24 Months Plan',
    duration: 24,
    price: 2999,
    originalPrice: 3549,
    discount: 550,
    couponCode: 'GRAB550',
    features: [
      'Access to 7000+ PYQs',
      'Complete handwritten notes',
      'Custom test creation',
      'Mobile & web access',
      'Performance analytics',
      'Priority support',
      'Use coupon code GRAB550 to get ₹550 off',
    ],
    buttonText: 'Buy for 24 months',
    link: 'https://www.neetprep.com/PayNow?courseOfferId=6934605&app=reflex&courseId=2135',
  },
  {
    id: 4,
    title: '36 Months Plan',
    duration: 36,
    price: 3499,
    originalPrice: 4049,
    discount: 550,
    couponCode: 'GRAB550',
    features: [
      'Access to 7000+ PYQs',
      'Complete handwritten notes',
      'Custom test creation',
      'Mobile & web access',
      'Performance analytics',
      'Priority support',
      'Use coupon code GRAB550 to get ₹550 off',
    ],
    buttonText: 'Buy for 36 months',
    link: 'https://www.neetprep.com/PayNow?courseOfferId=12277243&app=reflex&courseId=2135',
  },
  {
    id: 5,
    title: '48 Months Plan',
    duration: 48,
    price: 3999,
    originalPrice: 4549,
    discount: 550,
    couponCode: 'GRAB550',
    features: [
      '1st & 2nd Year? Perfect Time to Build Your Success Story.',
      'Access to 7000+ PYQs',
      'Complete handwritten notes',
      'Custom test creation',
      'Mobile & web access',
      'Performance analytics',
      'Priority support',
      'Use coupon code GRAB550 to get ₹550 off',
    ],
    buttonText: 'Buy for 48 months',
    link: 'https://www.neetprep.com/PayNow?courseOfferId=13404515&app=reflex&courseId=2135',
    dealOfDay: true,
  },
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: 'Practice Real Exam Questions',
    description: '7000+ topic-wise PYQs with high-yield focus to maximize accuracy and retention.',
    icon: 'TestTubes',
  },
  {
    id: 2,
    title: 'Create Custom Tests',
    description: 'Build your own mini or full-length tests by topic, subject, or chapter.',
    icon: 'Layout',
  },
  {
    id: 3,
    title: 'Access Concise & Focused Notes',
    description: 'Expert handwritten notes with clear visuals and clinical insights.',
    icon: 'BookText',
  },
  {
    id: 4,
    title: 'Test Series',
    description: 'Experience full-length Grand Test Series designed to simulate the real INICET and NEET PG exams.',
    icon: 'FileText',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Dr. Adrija Ghosh – Rank 53 in INI CET 2025',
    text: 'Reflex helped me get topic-wise closure. Synapse is amazing. Grateful for Aditya Sir and the team\'s consistent effort.',
    image: 'https://reflex-banners.s3.ap-south-1.amazonaws.com/1000157918.jpg',
  },
  {
    id: 2,
    name: 'Dr. Aritra Panda – Rank 79 in INI CET 2025',
    text: 'Reflex is one of the best PYQ apps. It helped me immensely in INI CET exam preparation and performance.',
    image: 'https://reflex-banners.s3.ap-south-1.amazonaws.com/503199487_17896134600235767_7289522847615351532_n.+%281%29.jpg',
  },
  {
    id: 3,
    name: 'Dr. Preeyam Agarwalla – Rank 174 in INI CET 2025',
    text: 'Reflex is my go-to app for PYQs. Well-organized, includes topper notes, progress tracking, and quiz-based free subscriptions.',
    image: 'https://reflex-banners.s3.ap-south-1.amazonaws.com/502985992_17896024059235767_7991644330758119107_n..jpg',
  },
  {
    id: 4,
    name: 'Dr. Meghna Johny – Rank 957 in INI CET 2025',
    text: 'Reflex gave me reliable, concise explanations of PYQs. It made revision simple and quick. Extremely useful for INI CET prep.',
    image: 'https://reflex-banners.s3.ap-south-1.amazonaws.com/1000159763.jpg',
  },
];

export const WHY_REFLEX: Feature[] = [
  {
    id: 1,
    title: 'Legacy of Excellence',
    description: 'Built on the success of NEETprep.com (NEET UG)',
    icon: 'Trophy',
  },
  {
    id: 2,
    title: 'Anytime, Anywhere',
    description: 'Available on Android, iOS, and Web',
    icon: 'Smartphone',
  },
  {
    id: 3,
    title: 'Track Your Progress',
    description: 'In-depth analytics to identify strengths and weaknesses',
    icon: 'LineChart',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 1,
    name: 'YouTube',
    url: 'http://www.youtube.com/@Reflex__PG',
    icon: 'Youtube',
  },
  {
    id: 2,
    name: 'Instagram',
    url: 'https://www.instagram.com/reflex__pg/?hl=en',
    icon: 'Instagram',
  },
  {
    id: 3,
    name: 'WhatsApp',
    url: 'https://api.whatsapp.com/send/?phone=917835083689&text=Hello%2C+I+need+assistance%21&type=phone_number&app_absent=0',
    icon: 'MessageCircle',
  },
];

export const LEGAL_LINKS = [
  { id: 1, name: 'Terms of Use', url: 'https://reflexprep.com/tos' },
  { id: 2, name: 'Privacy Policy', url: 'https://reflexprep.com/tos#privacy-policy' },
  { id: 3, name: 'Refund Policy', url: 'https://reflexprep.com/tos#refund-policy' },
];
