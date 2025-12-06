import React, { useState } from 'react';
import { Calendar, MessageCircle, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../components/Button';
import { PACKAGES, DISCORD_WEBHOOK_URL } from '../constants';

const Booking: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    discordId: '',
    email: '',
    trophies: '',
    packageId: PACKAGES[0].id,
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (DISCORD_WEBHOOK_URL) {
      try {
        const packageName = PACKAGES.find(p => p.id === formData.packageId)?.title || formData.packageId;
        
        // Construct Discord Embed Payload
        const payload = {
          embeds: [{
            title: "New Coaching Request! 👑",
            color: 16760576, // Gold color
            fields: [
              { name: "Player Name", value: formData.name, inline: true },
              { name: "Discord ID", value: formData.discordId, inline: true },
              { name: "Trophies", value: formData.trophies, inline: true },
              { name: "Selected Package", value: packageName, inline: false },
              { name: "Email", value: formData.email, inline: false },
              { name: "Notes/Goals", value: formData.notes || "None" }
            ],
            footer: { text: "Jarvis Coaching Website" },
            timestamp: new Date().toISOString()
          }]
        };

        await fetch(DISCORD_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      } catch (error) {
        console.error("Failed to send webhook", error);
      }
    } else {
      console.warn("No Discord Webhook URL provided in constants.tsx");
    }

    // Simulate success even if webhook fails (so user isn't stuck) or if simulating
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      window.scrollTo(0, 0);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-royale-bg px-4 flex items-center justify-center">
        <div className="bg-royale-card border border-green-500 rounded-2xl p-8 max-w-lg w-full text-center">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Request Sent!</h2>
          <p className="text-gray-300 mb-8">
            Thanks for booking. I'll review your details and send a Discord friend request ({formData.discordId}) within 24 hours to confirm your slot.
          </p>
          <Button onClick={() => setSubmitted(false)} variant="primary">Book Another</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-royale-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Side */}
          <div>
            <h1 className="text-4xl font-bold text-white mb-6">Secure Your Spot</h1>
            <p className="text-gray-300 text-lg mb-8">
              Ready to climb? Fill out the form to get started. I usually reply within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-royale-dark p-3 rounded-lg mr-4">
                  <Calendar className="h-6 w-6 text-royale-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Scheduling</h3>
                  <p className="text-sm text-gray-400">Available Weekdays 4 PM - 12 AM IST. Weekends are off.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-royale-dark p-3 rounded-lg mr-4">
                  <MessageCircle className="h-6 w-6 text-royale-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Discord Required</h3>
                  <p className="text-sm text-gray-400">Sessions are held on Discord. Make sure you have a working mic.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-royale-dark p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-royale-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-white">48hr Response</h3>
                  <p className="text-sm text-gray-400">If I don't reply in 48 hours, check your spam or Message in the server.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-900 rounded-xl border border-gray-800">
               <h3 className="text-white font-bold mb-2">Note on Payment</h3>
               <p className="text-sm text-gray-400">
                 Payment only via PayPal. Details will be sent after we confirm a time slot.
               </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-royale-card p-8 rounded-2xl border border-gray-800 shadow-xl">
            {!DISCORD_WEBHOOK_URL && (
               <div className="mb-6 p-4 bg-yellow-900/30 border border-yellow-700 rounded-lg flex items-start">
                 <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 shrink-0 mt-0.5" />
                 <p className="text-xs text-yellow-200">
                   <strong>Admin Note:</strong> The Discord Webhook URL is missing in <code>constants.tsx</code>. The form will just simulate submission until you add it.
                 </p>
               </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">In-Game Name</label>
                  <input 
                    required 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    className="w-full bg-slate-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-royale-gold focus:border-transparent outline-none" 
                    placeholder="e.g. KingSlayer" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Discord ID</label>
                  <input 
                    required 
                    name="discordId"
                    value={formData.discordId}
                    onChange={handleChange}
                    type="text" 
                    className="w-full bg-slate-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-royale-gold focus:border-transparent outline-none" 
                    placeholder="user#1234" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                <input 
                  required 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email" 
                  className="w-full bg-slate-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-royale-gold focus:border-transparent outline-none" 
                  placeholder="you@example.com" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Current Trophies</label>
                <input 
                  required 
                  name="trophies"
                  value={formData.trophies}
                  onChange={handleChange}
                  type="number" 
                  className="w-full bg-slate-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-royale-gold focus:border-transparent outline-none" 
                  placeholder="Champion" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Select Package</label>
                <select 
                  name="packageId"
                  value={formData.packageId}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-royale-gold focus:border-transparent outline-none"
                >
                  {PACKAGES.map(p => (
                    <option key={p.id} value={p.id}>{p.title} - {p.price}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Main Deck / Goals</label>
                <textarea 
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4} 
                  className="w-full bg-slate-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-royale-gold focus:border-transparent outline-none" 
                  placeholder="My goal is Champion."
                ></textarea>
              </div>

              <Button fullWidth variant="primary" className="py-4 text-lg" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Submit Request'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;