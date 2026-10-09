import React from 'react';
import { CraftsmanshipSection } from '../components/CraftsmanshipSection';
import { ShowroomSection } from '../components/ShowroomSection';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#faf8f5] min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8c5a3c] font-bold block">
            Craftsmanship & Commitment
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-[#282726] font-medium">
            Majisa Doors & <span className="italic font-normal text-[#8c5a3c]">Plywoods</span>
          </h1>
          <p className="text-sm sm:text-base text-[#6e6a63] font-light leading-relaxed">
            Coimbatore’s trusted showroom for architectural solid teak doors, waterproof polymer PVC/WPC doors, IS 710 marine plywoods, and luxury brass door hardware.
          </p>
        </div>
      </div>

      <CraftsmanshipSection />
      <ShowroomSection />
    </div>
  );
};
