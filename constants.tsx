import { Testimonial, ServicePackage, FAQItem, NavItem, BlogPost } from './types';
import { Crown, Zap, TrendingUp, ShieldCheck, Target, Users } from 'lucide-react';

// TODO: PASTE YOUR DISCORD WEBHOOK URL HERE
// Go to Server Settings -> Integrations -> Webhooks -> New Webhook -> Copy Webhook URL
export const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1446701330927321221/08cNMzCiQdwJCUu0hNBl1gIJ8em4GjvATNwWCBj77-Sj8lXd3Vxqq70SD0zPMBH9IfyF"; 

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Coaching', path: '/coaching' },
  { label: 'Blog', path: '/blog' },
  { label: 'Book Now', path: '/booking' },
];

export const PACKAGES: ServicePackage[] = [
  {
    id: 'community',
    title: 'Community Support',
    price: '5 YT Subs',
    description: 'Get a coaching session by supporting the channel. Bring 5 subscribers!',
    features: [
      '1 Live Coaching Session',
      'Deck Check',
      'Support the Community',
      'One-time Access'
    ]
  },
  {
    id: 'weekly',
    title: 'Weekly Coaching',
    price: '$10 / week',
    description: 'Direct paid access for consistent improvement without the sub requirement.',
    features: [
      'Weekly Live Sessions',
      'Direct Discord Access',
      'VOD Reviews Included',
      'Personalized Plan',
      'Priority Scheduling'
    ],
    isPopular: true
  },
  {
    id: 'grind',
    title: 'Account Grinding',
    price: '10 Subs / 1k 🏆',
    description: 'I play on your account to push trophies. 10 Subs per 1000 trophies gained.',
    features: [
      'Guaranteed Trophy Gains',
      'I Play Your Account',
      'Grand Challenges',
      'Ladder Pushing',
      'Safe & Secure'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Nithin',
    quote: "Jarvis has helped me a lot in cr and has given lot of suggestions and i even gained 1.5k trophies in 2 weeks cos of his suggestions",
    highlight: "+1.5k Trophies in 2 Weeks",
    role: "KING"
  },
  {
    id: '2',
    name: 'Shawn',
    quote: "W Trainer 100% Recommend hes been training me for about 2 weeks and ive went up 4 arenas from his training",
    highlight: "+4 Arenas Gained",
    role: "Student"
  },
  {
    id: '3',
    name: 'Cassius Thundercock (aka IVrapp)',
    quote: "@Jarvis did an awesome job by giving me clear strategy breakdowns and consistent feedback that helped me get better at the game.",
    highlight: "Strategy & Feedback",
    role: "RMA"
  },
  {
    id: '4',
    name: 'Angry',
    quote: "You really helped me to get some more trophies and build up a new deck, thanks so much! 10/10",
    highlight: "Deck Building 10/10",
    role: "MRVL"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How does the '5 Subs' payment work?",
    answer: "Instead of paying cash, you just need to get 5 people (friends, clanmates, or alts) to subscribe to my YouTube channel. Send me the proof, and we book the session!"
  },
  {
    question: "Is Account Grinding safe?",
    answer: "Yes. I log in via Supercell ID, play the matches to hit the target, and log out. I treat your account with 100% respect and security."
  },
  {
    question: "How are sessions hosted?",
    answer: "All live sessions are hosted via Discord voice/video call. You'll need to be able to stream your screen or share your screen for live gameplay analysis."
  },
  {
    question: "What ranks do you coach?",
    answer: "I coach players from Arena 1 all the way up to Champion. Whether you are learning basics or refining pro mechanics, I can help."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: "Common Mistakes Keeping You Stuck in Mid-Ladder",
    excerpt: "Over-committing on defense and leaking elixir are the two silent killers of your trophy count. Here is how to fix them.",
    date: "Oct 12, 2023",
    imageUrl: "https://img.youtube.com/vi/uhfmCArTRLY/maxresdefault.jpg",
    category: "Strategy",
    url: "https://youtu.be/uhfmCArTRLY?si=axxbUoWiPJMStgvc"
  },
  {
    id: '2',
    title: "How To Think About Matchups in Clash Royale",
    excerpt: "Knowing when you have the advantage and when to play for a draw is what separates pros from casuals.",
    date: "Nov 05, 2023",
    imageUrl: "https://img.youtube.com/vi/8896B8s-7js/maxresdefault.jpg",
    category: "Game Sense",
    url: "https://youtu.be/8896B8s-7js?si=1g0knvw7Yu71GJtB"
  },
  {
    id: '3',
    title: "How To Choose the Right Deck For Your Playstyle",
    excerpt: "Are you a beatdown player or a cycle master? Finding a deck that matches your natural rhythm is key.",
    date: "Nov 20, 2023",
    imageUrl: "https://img.youtube.com/vi/iAX6V40C4Ck/maxresdefault.jpg",
    category: "Deck Building",
    url: "https://youtu.be/iAX6V40C4Ck?si=_egSTIvxHxd4DlXL"
  }
];

export const FEATURES = [
  {
    title: "Detailed VOD Review",
    description: "We pause, rewind, and analyze your replays to spot critical misplays.",
    icon: Zap
  },
  {
    title: "Live 1:1 Sessions",
    description: "Real-time feedback as you play, focusing on decision making.",
    icon: Users
  },
  {
    title: "Deck Optimization",
    description: "Adjusting your deck to the current meta and your card levels.",
    icon: Crown
  },
  {
    title: "Mindset Coaching",
    description: "Learn to avoid tilt and maintain focus during intense matches.",
    icon: Target
  }
];