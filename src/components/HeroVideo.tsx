import React, { useRef, useState } from 'react';
import { ChevronDown, Volume2, VolumeX, ShieldCheck, Compass } from 'lucide-react';

export const HeroVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const scrollToCategories = () => {
    const el = document.getElementById('signature-horizontal-categories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[680px] overflow-hidden bg-[#1c1c1e] flex items-center justify-center">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster="/images/categories/wooden-doors.jpg"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
      >
        <source src="/Showroom_video_for_luxury_doors_20261009093619.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Balanced Dark Overlay for Full Video Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5] via-black/50 to-black/75" />
      <div className="absolute inset-0 bg-black/30" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-16">
        
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/20 backdrop-blur-md mb-6 shadow-xl">
          <Compass className="w-3.5 h-3.5 text-[#c5a059]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/90">
            MAJISA DOORS & PLYWOODS · COIMBATORE SHOWROOM
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-white leading-[1.08] mb-6 drop-shadow-2xl">
          Doors That <span className="italic font-normal text-[#f4efe6]">Define</span> Your Space
        </h1>

        {/* Supporting Copy */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#e8e3d8] font-light leading-relaxed mb-10 text-balance">
          Discover thoughtfully selected solid teak doors, waterproof PVC, engineered WPC, and marine grade plywood for elevated architectural spaces.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md">
          <button
            onClick={scrollToCategories}
            className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-white bg-[#8c5a3c] hover:bg-[#764b30] transition-all rounded-sm shadow-xl flex items-center justify-center space-x-3 group"
          >
            <span>Explore Collections</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>

          <button
            onClick={() => {
              const el = document.getElementById('craftsmanship-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-[#282726] bg-[#faf8f5] hover:bg-[#f4efe6] border border-[#e8e3d8] transition-all rounded-sm backdrop-blur-md flex items-center justify-center space-x-2"
          >
            <ShieldCheck className="w-4 h-4 text-[#8c5a3c]" />
            <span>Our Quality Standard</span>
          </button>
        </div>

        {/* Trust Stats Bar */}
        <div className="mt-12 grid grid-cols-3 gap-6 sm:gap-12 border-t border-white/20 pt-6 max-w-xl text-center">
          <div>
            <span className="block text-lg sm:text-2xl font-serif font-bold text-white">8+</span>
            <span className="text-[10px] sm:text-xs text-[#d8d2c4] uppercase tracking-wider">Product Categories</span>
          </div>
          <div>
            <span className="block text-lg sm:text-2xl font-serif font-bold text-white">100%</span>
            <span className="text-[10px] sm:text-xs text-[#d8d2c4] uppercase tracking-wider">Gurjan Marine Grade</span>
          </div>
          <div>
            <span className="block text-lg sm:text-2xl font-serif font-bold text-white">Coimbatore</span>
            <span className="text-[10px] sm:text-xs text-[#d8d2c4] uppercase tracking-wider">Flagship Showroom</span>
          </div>
        </div>

      </div>

      {/* Audio Mute/Unmute Control */}
      <button
        onClick={toggleMute}
        className="absolute bottom-8 right-6 sm:right-10 z-20 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-white hover:text-[#282726] transition-all backdrop-blur-md shadow-lg"
        title={isMuted ? "Unmute Video" : "Mute Video"}
        aria-label="Toggle Hero Video Sound"
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>

      {/* Scroll Down Indicator */}
      <div 
        onClick={scrollToCategories}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 cursor-pointer flex flex-col items-center space-y-2 group"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#8c5a3c] font-semibold group-hover:text-[#282726] transition-colors">
          Scroll To Discover
        </span>
        <div className="w-5 h-9 rounded-full border border-[#8c5a3c]/60 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-[#8c5a3c] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
