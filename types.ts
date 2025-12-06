import { LucideIcon } from 'lucide-react';

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  highlight: string; // E.g. "+1.5k Trophies" or "Deck Building"
  role?: string; // E.g. "Verified Student" or discord role color
}

export interface ServicePackage {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
  url: string;
}