import React from 'react';
import { ShieldCheck, Flame, Droplets, Sparkles, Hammer, Award } from 'lucide-react';

export const CraftsmanshipSection: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: '100% Gurjan Core Marine Grade',
      description: 'IS 710 certified BWP plywood bonded with unextended phenol formaldehyde synthetic resin. Guaranteed against 72-hour boiling water testing.'
    },
    {
      icon: Hammer,
      title: 'Burmese & Honne Seasoned Teak',
      description: 'Kiln-dried hardwood timber selected for natural oil density, rich golden grain contrast, and lifetime dimensional stability.'
    },
    {
      icon: Droplets,
      title: '100% Waterproof Polymer Tech',
      description: 'High-density PVC & WPC composite door panels completely immune to water swelling, warping, and humidity degradation.'
    },
    {
      icon: Flame,
      title: 'Fire Retardant Certification',
      description: 'IS 5509 chemical pressure treatment delaying flame penetration and smoke propagation for high-rise residential safety.'
    },
    {
      icon: Award,
      title: 'Precision German Engineering',
      description: 'Galvanized steel-reinforced uPVC profiles paired with 24mm double-glazed acoustic glass for 42dB noise insulation.'
    },
    {
      icon: Sparkles,
      title: 'Bespoke Artisan Carvings',
      description: 'Hand-sculpted temple motifs, brass stud inlays, and precision 5-axis CNC parametric wood paneling.'
    }
  ];

  return (
    <section id="craftsmanship-section" className="py-24 bg-[#ffffff] border-t border-b border-[#e8e3d8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#8c5a3c] font-semibold">
            <Award className="w-4 h-4" />
            <span>Uncompromising Material Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium text-[#282726] tracking-tight">
            Craftsmanship & <span className="italic font-normal text-[#8c5a3c]">Material Precision</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6e6a63] font-light leading-relaxed">
            Every door, sheet of marine plywood, and brass fitting in our Coimbatore showroom undergoes rigorous structural grading for climate endurance.
          </p>
        </div>

        {/* 6 Quality Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-[#faf8f5] border border-[#e8e3d8] hover:border-[#8c5a3c] rounded-sm transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(40,39,38,0.05)] group"
              >
                <div className="w-12 h-12 rounded-sm bg-[#f4efe6] border border-[#e4dacb] text-[#8c5a3c] flex items-center justify-center mb-6 group-hover:bg-[#8c5a3c] group-hover:text-white transition-all">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h3 className="text-xl font-serif text-[#282726] font-medium mb-3 group-hover:text-[#8c5a3c] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6e6a63] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Material Testing Banner */}
        <div className="mt-16 p-8 bg-[#faf8f5] border border-[#e8e3d8] rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#8c5a3c] font-bold">
              Direct Showroom Inspection Available
            </span>
            <h4 className="text-xl sm:text-2xl font-serif text-[#282726] font-medium">
              Want to touch timber samples or inspect cross-section cores?
            </h4>
          </div>
          <a
            href="https://wa.me/919842212345?text=Hello%20Majisa%20Doors,%20I%20would%20like%20to%20visit%20the%20showroom%20and%20inspect%20timber%20samples."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#8c5a3c] hover:bg-[#764b30] text-white text-xs uppercase tracking-widest font-semibold rounded-sm transition-all whitespace-nowrap shadow-sm"
          >
            Schedule Showroom Visit
          </a>
        </div>

      </div>
    </section>
  );
};
