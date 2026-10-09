import React from 'react';
import { MapPin, Clock, Phone, Navigation, Check } from 'lucide-react';

export const ShowroomSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#faf8f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#e8e3d8] shadow-lg">
              <img
                src="/images/categories/wooden-doors.jpg"
                alt="Majisa Doors & Plywoods Showroom Coimbatore"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 hidden sm:block p-6 bg-white border border-[#e8e3d8] rounded-sm shadow-xl max-w-xs">
              <span className="text-[10px] uppercase tracking-widest text-[#8c5a3c] font-bold block mb-1">
                Coimbatore Flagship
              </span>
              <p className="text-xs text-[#6e6a63] font-light">
                Full-scale door display units, timber samples, and hardware consultation.
              </p>
            </div>
          </div>

          {/* Right Text Content Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#8c5a3c] font-semibold block">
                About Majisa Doors & Plywoods
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#282726] font-medium tracking-tight">
                Coimbatore’s Destination for <span className="italic font-normal text-[#8c5a3c]">Architectural Openings</span>
              </h2>
            </div>

            <p className="text-sm text-[#6e6a63] font-light leading-relaxed">
              At <strong className="text-[#282726] font-medium">Majisa Doors & Plywoods</strong>, we curate premium architectural doors, moisture-proof polymer door systems, certified marine plywoods, and luxury brass door hardware for residential villas, modern apartments, and commercial projects across Coimbatore and South India.
            </p>

            {/* Showroom Highlights Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Full-size door display gallery',
                'Custom timber sizing & polishing',
                'Certified IS 710 Marine Plywoods',
                'German profile uPVC sliding systems',
                'Waterproof PVC & WPC doors',
                'Direct architectural consulting'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs text-[#504c46]">
                  <Check className="w-4 h-4 text-[#8c5a3c] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Contact & Hours Info Grid */}
            <div className="pt-6 border-t border-[#e8e3d8] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3 p-3.5 bg-white border border-[#e8e3d8] rounded-sm">
                <MapPin className="w-5 h-5 text-[#8c5a3c] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-[#282726] block">Location</span>
                  <span className="text-[11px] text-[#706c64]">Mettupalayam Road, Coimbatore, Tamil Nadu</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 bg-white border border-[#e8e3d8] rounded-sm">
                <Clock className="w-5 h-5 text-[#8c5a3c] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-[#282726] block">Opening Hours</span>
                  <span className="text-[11px] text-[#706c64]">Mon – Sat: 9:00 AM – 8:30 PM</span>
                </div>
              </div>
            </div>

            {/* Showroom CTAs */}
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="https://maps.google.com/?q=Majisa+Doors+and+Plywoods+Coimbatore"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white hover:bg-[#f4efe6] border border-[#e8e3d8] hover:border-[#8c5a3c] text-[#8c5a3c] text-xs uppercase tracking-widest font-semibold rounded-sm transition-all flex items-center space-x-2 shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href="tel:+919842212345"
                className="px-6 py-3 bg-[#8c5a3c] hover:bg-[#764b30] text-white text-xs uppercase tracking-widest font-semibold rounded-sm transition-all flex items-center space-x-2 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Showroom</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
