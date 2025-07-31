export interface Plan {
  id: number;
  title: string;
  duration: number;
  price: number;
  features: string[];
  buttonText: string;
  link: string;
  popular?: boolean;
  dealOfDay?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  image: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}