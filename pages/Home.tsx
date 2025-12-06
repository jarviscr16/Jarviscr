import React, { useEffect } from 'react';
import { ArrowRight, Play, TrendingUp, ShieldAlert, Target, Trophy, Star, MessageCircle } from 'lucide-react';
import Button from '../components/Button';
import { PACKAGES, TESTIMONIALS, FAQS, FEATURES } from '../constants';
import { Link, useLocation } from 'react-router-dom';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTarget = params.get('scroll');
    
    if (scrollTarget) {
      const element = document.getElementById(scrollTarget);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden flex items-center justify-center min-h-[85vh]">
        <div className="absolute inset-0 bg-gradient-to-br from-royale-dark to-slate-900 z-0"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0"></div>
        
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[100px] rounded-full z-0 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[1.05] drop-shadow-2xl">
            <span className="block text-slate-100 mb-1 md:mb-4">Clash Royale Coaching</span>
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-yellow-500 blur-3xl opacity-20 animate-pulse"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-b from-[#FFF7AD] via-[#FFA500] to-[#FFD700] filter drop-shadow-[0_4px_10px_rgba(234,179,8,0.5)]">
                To Skyrocket Your Trophies
              </span>
            </span>
          </h1>
          
          <p className="mt-8 max-w-2xl mx-auto text-xl md:text-2xl text-blue-100/90 mb-12 font-medium leading-relaxed">
            Stop losing to over-leveled opponents. Master fundamentals, optimize your deck, and <span className="text-white font-bold border-b-2 border-royale-gold shadow-[0_1px_0_rgba(251,191,36,0.5)]">climb to Champion</span> with personalized 1:1 coaching.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Button to="/booking" variant="primary" className="text-lg px-10 py-4 shadow-xl shadow-amber-500/20 hover:scale-105 transition-all duration-300">
              Book a Coaching Session <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button to="https://www.youtube.com/@Jarvis-CR" variant="outline" className="text-lg px-10 py-4 backdrop-blur-md bg-white/5 border-white/20 hover:bg-white/10 hover:text-white transition-all duration-300">
              <Play className="mr-2 h-6 w-6 fill-current" /> Watch Free Content
            </Button>
          </div>
        </div>
      </section>

      {/* Who is this for? */}
      <section className="py-16 bg-royale-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Who Is This Coaching For?</h2>
            <p className="mt-4 text-gray-400">If you relate to any of these, I can help you.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-royale-card p-6 rounded-lg border border-gray-800 hover:border-royale-mid transition-colors">
              <div className="h-12 w-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                <ShieldAlert className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Hardstuck Players</h3>
              <p className="text-gray-400 text-sm">You've been at the same trophy range for months and can't break through the wall.</p>
            </div>
            
            <div className="bg-royale-card p-6 rounded-lg border border-gray-800 hover:border-royale-mid transition-colors">
              <div className="h-12 w-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Fundamental Focus</h3>
              <p className="text-gray-400 text-sm">You want to learn elixir counting, cycle tracking, and pro-level placement.</p>
            </div>

            <div className="bg-royale-card p-6 rounded-lg border border-gray-800 hover:border-royale-mid transition-colors">
              <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Matchup Struggles</h3>
              <p className="text-gray-400 text-sm">You consistently lose to specific decks (like Log Bait or Golem) and need a game plan.</p>
            </div>

            <div className="bg-royale-card p-6 rounded-lg border border-gray-800 hover:border-royale-mid transition-colors">
              <div className="h-12 w-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Aspiring Pros</h3>
              <p className="text-gray-400 text-sm">You want to compete in Grand Challenges and esports tournaments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-slate-900 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">How It Works</h2>
          </div>
          
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: '01', title: 'Choose Package', desc: 'Select the coaching plan that fits your goals.' },
                { step: '02', title: 'Book Time', desc: 'Schedule a slot via Calendly that works for you.' },
                { step: '03', title: 'Live Session', desc: 'Jump on Discord for 1:1 coaching and review.' },
                { step: '04', title: 'Get Results', desc: 'Receive notes, homework, and start climbing.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-900 p-4 text-center">
                  <div className="w-16 h-16 mx-auto bg-royale-mid rounded-full flex items-center justify-center text-xl font-bold text-white mb-4 border-4 border-slate-900 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#2f3136] relative overflow-hidden">
        {/* Decorative elements for Discord vibe */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5865F2] to-[#7289da]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-center gap-3 mb-12">
            <MessageCircle className="h-8 w-8 text-[#5865F2]" />
            <h2 className="text-3xl font-bold text-white text-center">Community Results</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-[#36393f] p-6 rounded-lg border border-[#202225] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
                <div className="flex items-start gap-4 mb-3">
                  {/* Avatar Placeholder with Initials */}
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-sm">{t.name.substring(0,2).toUpperCase()}</span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-bold text-white truncate text-sm sm:text-base">{t.name}</h4>
                      {t.role && (
                        <span className="bg-[#5865F2] text-white text-[10px] uppercase font-bold px-1.5 py-0.5 rounded">
                          {t.role}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 text-sm mt-1 leading-relaxed whitespace-pre-wrap">
                      {t.quote}
                    </p>
                  </div>
                </div>
                
                {/* Result Badge / Embed Style */}
                <div className="ml-14 mt-auto">
                   <div className="border-l-4 border-green-500 pl-3 py-1 bg-[#2f3136] rounded-r">
                     <p className="text-xs text-green-400 font-bold uppercase tracking-wider mb-0.5">Achievement Unlocked</p>
                     <p className="text-white font-semibold text-sm">{t.highlight}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
             <p className="text-gray-400 text-sm mb-4">Join the community to see more wins.</p>
             <Button to="/booking" variant="secondary" className="bg-[#5865F2] hover:bg-[#4752c4] text-white">
                Start Your Training
             </Button>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section id="pricing" className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Start Your Journey</h2>
            <p className="mt-2 text-gray-400">Simple pricing. Massive value.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PACKAGES.map((pkg) => (
              <div key={pkg.id} className={`relative flex flex-col p-8 bg-royale-card rounded-2xl border ${pkg.isPopular ? 'border-royale-gold shadow-royale-gold/20 shadow-xl scale-105 z-10' : 'border-gray-700'}`}>
                {pkg.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-royale-gold text-slate-900 text-xs font-bold uppercase py-1 px-3 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{pkg.title}</h3>
                <div className="text-3xl font-extrabold text-royale-light mb-4">{pkg.price}</div>
                <p className="text-gray-400 text-sm mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Star className="h-5 w-5 text-royale-gold mr-2 shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button to="/booking" variant={pkg.isPopular ? 'primary' : 'outline'} fullWidth>
                  Choose Plan
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-royale-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-royale-card rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-royale-dark to-blue-900 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-white mb-6">Ready To Stop Losing And Start Climbing?</h2>
          <p className="text-xl text-blue-200 mb-8">Join hundreds of students who have reached their personal bests.</p>
          <Button to="/booking" variant="primary" className="text-lg px-12 py-4 shadow-2xl">
            Book Your First Session
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;