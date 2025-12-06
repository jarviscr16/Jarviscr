import React from 'react';
import { Award, Youtube, Twitch, TrendingUp } from 'lucide-react';
import Button from '../components/Button';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-royale-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-800 border-4 border-royale-gold shadow-2xl relative">
              <img 
                src="/jarvis-about.jpg" 
                alt="Jarvis Profile" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h3 className="text-white font-bold text-xl">Jarvis - Head Coach</h3>
                <p className="text-royale-gold">Champion • Content Creator</p>
              </div>
            </div>
          </div>
          
          <div>
            <h1 className="text-4xl font-bold text-white mb-6">From Shared Account to Champion</h1>
            <p className="text-gray-300 text-lg mb-4">
              Hey, I'm Jarvis. I've been playing Clash Royale for 5 years. I built my channel on the idea that anyone can improve if they understand the mechanics, even without spending money.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              I wanted to make coaching accessible. That's why I offer coaching in exchange for YouTube subscribers—it grows our community while helping you win. For those who want more, I offer direct weekly coaching and rank pushing services.
            </p>
            
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <Youtube className="text-red-500" /> Growing Community
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Twitch className="text-purple-500" /> F2P Grinder
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">My Journey</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
            
            {[
              { year: '2020', title: 'The Beginning', desc: 'Started during COVID online classes. Shared an account with my brother, playing one match each.' },
              { year: '2021', title: 'Going Solo', desc: 'Created my own account after a year. Started playing consistently and slowly understanding the game mechanics.' },
              { year: '2022', title: 'The P2W Wall', desc: 'Stopped playing for a while because I was fed up with over-leveled Pay-to-Win players.' },
              { year: '2024', title: 'The Return & Grind', desc: 'Returned 1 year ago. Pushed to 10K around August, then 15K shortly after through pure F2P grinding.' },
              { year: '2025', title: 'Champion Status', desc: 'Finally reached the Champion League last season, proving that skill matters more than money.' }
            ].map((item, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-royale-card bg-royale-gold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                   <Award className="h-5 w-5 text-slate-900" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-gray-800 bg-royale-card shadow-lg">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-white">{item.title}</div>
                    <time className="font-caveat font-medium text-royale-light">{item.year}</time>
                  </div>
                  <div className="text-gray-400 text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center border border-gray-800">
          <h2 className="text-3xl font-bold text-white mb-8">Coaching Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4">
              <TrendingUp className="h-10 w-10 text-royale-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Fundamentals First</h3>
              <p className="text-gray-400">Fancy plays don't win games; solid defense and elixir management do. We fix the foundation first.</p>
            </div>
            <div className="p-4">
              <Award className="h-10 w-10 text-royale-light mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Mindset is Key</h3>
              <p className="text-gray-400">Tilt causes more losses than hard counters. I teach you how to stay calm and analyze, not rage.</p>
            </div>
            <div className="p-4">
              <Youtube className="h-10 w-10 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Comfort Over Meta</h3>
              <p className="text-gray-400">Playing a "Top Tier" deck badly is worse than mastering an off-meta deck. We find what works for YOU.</p>
            </div>
          </div>
          <div className="mt-12">
            <Button to="/booking" className="text-lg px-10">Start Your Training</Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;