import React, { useState } from 'react';
import { Crown, Youtube, Instagram, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-royale-bg border-t border-royale-dark pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Crown className="h-6 w-6 text-royale-gold" />
              <span className="text-lg font-bold text-white">JARVIS</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Helping Clash Royale players climb the ladder, one win condition at a time.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-royale-gold text-sm">About Coach</Link></li>
              <li><Link to="/coaching" className="text-gray-400 hover:text-royale-gold text-sm">Services</Link></li>
              <li><Link to="/booking" className="text-gray-400 hover:text-royale-gold text-sm">Book a Session</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-royale-gold text-sm">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/?scroll=faq" className="text-gray-400 hover:text-royale-gold text-sm">FAQ</Link></li>
              <li><Link to="/coaching" className="text-gray-400 hover:text-royale-gold text-sm">Privacy Policy</Link></li>
              <li><Link to="/?scroll=pricing" className="text-gray-400 hover:text-royale-gold text-sm">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.youtube.com/@Jarvis-CR" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF0000]"><Youtube className="h-6 w-6" /></a>
              <a href="https://discord.gg/AYTt2Awb" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#5865F2]"><MessageSquare className="h-6 w-6" /></a>
              <a href="https://www.instagram.com/jarviscr_/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E4405F]"><Instagram className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Jarvis Coaching. Not affiliated with Supercell.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;