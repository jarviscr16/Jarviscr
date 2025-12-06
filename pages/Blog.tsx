import React from 'react';
import { BLOG_POSTS } from '../constants';
import Button from '../components/Button';
import { ArrowRight, Play } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-royale-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Clash Strategy Hub</h1>
          <p className="text-gray-400">Free guides, tips, and meta analysis.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="bg-royale-card rounded-2xl overflow-hidden border border-gray-800 hover:border-royale-mid transition-all duration-300 hover:-translate-y-1 shadow-lg group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <Play className="h-12 w-12 text-white fill-current" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-royale-gold uppercase tracking-wider">{post.category}</span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-royale-light transition-colors">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <a 
                  href={post.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white text-sm font-bold flex items-center hover:text-royale-gold transition-colors"
                >
                  Watch Video <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-slate-900 rounded-2xl p-8 text-center border border-gray-800">
           <h3 className="text-2xl font-bold text-white mb-4">Want more in-depth analysis?</h3>
           <p className="text-gray-400 mb-6">These videos scratch the surface. Get personalized advice for your specific deck.</p>
           <Button to="/booking">Book a Session</Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;