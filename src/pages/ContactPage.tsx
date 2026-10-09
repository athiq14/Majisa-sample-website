import React from 'react';
import { MapPin, Phone, Clock, Send, MessageSquare } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-[#faf8f5] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8c5a3c] font-bold block">
            Visit Our Flagship Showroom
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-[#282726] font-medium">
            Contact & <span className="italic font-normal text-[#8c5a3c]">Location</span>
          </h1>
          <p className="text-sm text-[#6e6a63] font-light leading-relaxed">
            Visit our showroom in Coimbatore to experience real timber textures, inspect door cross-sections, and receive personal project guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Cards (Left) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 bg-white border border-[#e8e3d8] rounded-sm space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded bg-[#faf8f5] border border-[#e8e3d8] flex items-center justify-center text-[#8c5a3c]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-serif text-[#282726] font-medium">Showroom Address</h3>
                <p className="text-xs text-[#6e6a63] font-light pt-1 leading-relaxed">
                  Majisa Doors & Plywoods<br />
                  Mettupalayam Road, Near Flower Market Signal,<br />
                  Coimbatore, Tamil Nadu – 641002
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Majisa+Doors+and+Plywoods+Coimbatore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs uppercase tracking-wider text-[#8c5a3c] hover:underline font-semibold"
              >
                Open Google Maps Directions →
              </a>
            </div>

            <div className="p-6 bg-white border border-[#e8e3d8] rounded-sm space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded bg-[#faf8f5] border border-[#e8e3d8] flex items-center justify-center text-[#8c5a3c]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-serif text-[#282726] font-medium">Phone & WhatsApp</h3>
                <p className="text-xs text-[#6e6a63] font-light pt-1">
                  Primary Line: +91 98422 12345<br />
                  Support Line: +91 98422 54321
                </p>
              </div>
              <a
                href="https://wa.me/919842212345?text=Hello%20Majisa%20Doors,%20I%20have%20an%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-[#25D366] font-semibold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="p-6 bg-white border border-[#e8e3d8] rounded-sm space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded bg-[#faf8f5] border border-[#e8e3d8] flex items-center justify-center text-[#8c5a3c]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-serif text-[#282726] font-medium">Operational Hours</h3>
                <p className="text-xs text-[#6e6a63] font-light pt-1">
                  Monday – Saturday: 9:00 AM – 8:30 PM<br />
                  Sunday: 10:00 AM – 2:00 PM (By Appointment)
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form (Right) */}
          <div className="lg:col-span-7 bg-white border border-[#e8e3d8] rounded-sm p-8 space-y-6 shadow-sm">
            <div className="space-y-1 border-b border-[#f4efe6] pb-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#8c5a3c] font-bold">
                Send Direct Message
              </span>
              <h3 className="text-2xl font-serif text-[#282726] font-medium">
                Showroom Inquiry Form
              </h3>
            </div>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for contacting Majisa Doors & Plywoods. We will get back to you shortly.');
              }} 
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#504c46] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Sharma"
                    className="w-full px-4 py-3 bg-[#faf8f5] border border-[#e8e3d8] focus:border-[#8c5a3c] rounded-sm text-xs text-[#282726] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#504c46] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98422 00000"
                    className="w-full px-4 py-3 bg-[#faf8f5] border border-[#e8e3d8] focus:border-[#8c5a3c] rounded-sm text-xs text-[#282726] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#504c46] mb-1">
                  Interested Category / Timber Requirement
                </label>
                <input
                  type="text"
                  placeholder="e.g. Solid Teak Main Door, BWP Marine Plywood, WPC Bedroom Doors..."
                  className="w-full px-4 py-3 bg-[#faf8f5] border border-[#e8e3d8] focus:border-[#8c5a3c] rounded-sm text-xs text-[#282726] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#504c46] mb-1">
                  Message / Site Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Provide door dimensions, quantity, or site location in Coimbatore..."
                  className="w-full px-4 py-3 bg-[#faf8f5] border border-[#e8e3d8] focus:border-[#8c5a3c] rounded-sm text-xs text-[#282726] outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#8c5a3c] hover:bg-[#764b30] text-white font-semibold uppercase text-xs tracking-widest rounded-sm transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Showroom Inquiry</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};
