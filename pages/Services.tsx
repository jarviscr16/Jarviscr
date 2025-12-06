import React from 'react';
import { Check, X } from 'lucide-react';
import Button from '../components/Button';
import { PACKAGES, FEATURES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-royale-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Coaching Services</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the path that fits you. Support the channel for a session, get weekly coaching for serious gains, or let me grind for you.
          </p>
        </div>

        {/* Detailed Service Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-royale-card rounded-2xl p-8 border border-gray-800">
             <div className="bg-blue-900/30 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
               <span className="text-3xl">🎥</span>
             </div>
             <h2 className="text-2xl font-bold text-white mb-4">Live Coaching (Sub or Paid)</h2>
             <p className="text-gray-300 mb-6">
               We hop on a Discord call, you share your screen, and we play live matches. I guide your decision-making in real-time. You can pay via YouTube Subscribers or Weekly Cash.
             </p>
             <h3 className="text-royale-gold font-bold mb-3 uppercase text-sm tracking-wide">What to expect:</h3>
             <ul className="space-y-2 mb-8">
               <li className="flex items-start text-gray-400"><Check className="h-5 w-5 text-green-500 mr-2 shrink-0" /> Deck construction analysis</li>
               <li className="flex items-start text-gray-400"><Check className="h-5 w-5 text-green-500 mr-2 shrink-0" /> Real-time elixir counting tips</li>
               <li className="flex items-start text-gray-400"><Check className="h-5 w-5 text-green-500 mr-2 shrink-0" /> Defensive placement correction</li>
             </ul>
             <Button to="/booking" variant="outline">Book Session</Button>
          </div>

          <div className="bg-royale-card rounded-2xl p-8 border border-gray-800">
             <div className="bg-purple-900/30 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
               <span className="text-3xl">🚀</span>
             </div>
             <h2 className="text-2xl font-bold text-white mb-4">Account Grinding</h2>
             <p className="text-gray-300 mb-6">
               Stuck in a specific arena? I will log into your account and push trophies for you. 
               <br/><br/>
               <span className="text-white font-bold">Rate: 10 Subscribers per 1000 Trophies.</span>
             </p>
             <h3 className="text-royale-gold font-bold mb-3 uppercase text-sm tracking-wide">What to expect:</h3>
             <ul className="space-y-2 mb-8">
               <li className="flex items-start text-gray-400"><Check className="h-5 w-5 text-green-500 mr-2 shrink-0" /> Guaranteed trophy gain</li>
               <li className="flex items-start text-gray-400"><Check className="h-5 w-5 text-green-500 mr-2 shrink-0" /> Secure Supercell ID Login</li>
               <li className="flex items-start text-gray-400"><Check className="h-5 w-5 text-green-500 mr-2 shrink-0" /> Fast turnaround</li>
             </ul>
             <Button to="/booking" variant="outline">Request Grind</Button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {FEATURES.map((f, i) => (
            <div key={i} className="p-6 border border-gray-800 rounded-xl bg-slate-900/50">
              <f.icon className="h-8 w-8 text-royale-light mb-4" />
              <h3 className="text-white font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-royale-card rounded-2xl overflow-hidden border border-gray-800 mb-16">
          <div className="p-8 border-b border-gray-800">
            <h2 className="text-2xl font-bold text-white text-center">Compare Options</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-400">
              <thead className="bg-slate-900 text-xs uppercase text-gray-200">
                <tr>
                  <th className="px-6 py-4">Features</th>
                  <th className="px-6 py-4 text-center">Community Support</th>
                  <th className="px-6 py-4 text-center text-royale-gold">Weekly Coaching</th>
                  <th className="px-6 py-4 text-center">Account Grinding</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Cost</td>
                  <td className="px-6 py-4 text-center text-white font-bold">5 Subs</td>
                  <td className="px-6 py-4 text-center text-royale-gold font-bold">$10 / week</td>
                  <td className="px-6 py-4 text-center text-white font-bold">10 Subs / 1k</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Live Coaching</td>
                  <td className="px-6 py-4 text-center"><Check className="mx-auto h-5 w-5 text-green-500"/></td>
                  <td className="px-6 py-4 text-center"><Check className="mx-auto h-5 w-5 text-green-500"/></td>
                  <td className="px-6 py-4 text-center"><X className="mx-auto h-5 w-5 text-red-500"/></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Recurring</td>
                  <td className="px-6 py-4 text-center">One-time</td>
                  <td className="px-6 py-4 text-center">Weekly</td>
                  <td className="px-6 py-4 text-center">Per Goal</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">I Play For You</td>
                  <td className="px-6 py-4 text-center"><X className="mx-auto h-5 w-5 text-red-500"/></td>
                  <td className="px-6 py-4 text-center"><X className="mx-auto h-5 w-5 text-red-500"/></td>
                  <td className="px-6 py-4 text-center"><Check className="mx-auto h-5 w-5 text-green-500"/></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center">
          <Button to="/booking" variant="primary" className="px-12 py-4 text-lg">
            Choose Your Plan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;