import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Compass, Sparkles, ArrowRight } from 'lucide-react';
import { categories } from '../data/categories';
import type { Category } from '../types';

// Mathematically calculated 3D Spherical Category Card
const SphericalCategoryCard: React.FC<{
  cat: Category;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  isTablet: boolean;
}> = ({ cat, index, total, scrollYProgress, isTablet }) => {
  // Sphere Radius scaled for viewport (240px on tablet, 380px on desktop)
  const radius = isTablet ? 240 : 380;
  // Diagonal tilt of sphere around X axis (16 degrees)
  const tiltAngle = (16 * Math.PI) / 180;

  // Base longitude angle around equator (evenly spaced 360 deg)
  const baseLongitude = (index / total) * 2 * Math.PI;

  // Staggered latitudes across upper & lower hemispheres
  const latitudes = [-0.35, 0.38, -0.42, 0.28, -0.30, 0.42, -0.22, 0.32];
  const latitude = latitudes[index % latitudes.length];

  // Map scroll progress (0 to 1) to continuous 3D sphere rotation around Y axis (2 full rotations = 720 deg)
  const rotationAngle = useTransform(scrollYProgress, [0, 1], [0, 4 * Math.PI]);

  // Compute exact 3D spatial coordinates on tilted sphere surface
  const x = useTransform(rotationAngle, (rot) => {
    const lon = baseLongitude + rot;
    return radius * Math.cos(latitude) * Math.sin(lon);
  });

  const y = useTransform(rotationAngle, (rot) => {
    const lon = baseLongitude + rot;
    const y0 = radius * Math.sin(latitude);
    const z0 = radius * Math.cos(latitude) * Math.cos(lon);
    return y0 * Math.cos(tiltAngle) - z0 * Math.sin(tiltAngle);
  });

  const z = useTransform(rotationAngle, (rot) => {
    const lon = baseLongitude + rot;
    const y0 = radius * Math.sin(latitude);
    const z0 = radius * Math.cos(latitude) * Math.cos(lon);
    return y0 * Math.sin(tiltAngle) + z0 * Math.cos(tiltAngle);
  });

  // Dynamic depth transforms
  const scale = useTransform(z, [-radius, radius], [0.72, 1.12]);
  const opacity = useTransform(z, [-radius, radius], [0.35, 1.0]);
  const rotateY = useTransform(x, [-radius, radius], [16, -16]);
  const zIndex = useTransform(z, (zVal) => Math.round(zVal + 1000));
  
  // Enable pointer interactions only for front-facing cards
  const pointerEvents = useTransform(z, (zVal) => (zVal > -40 ? 'auto' : 'none'));

  return (
    <motion.div
      style={{
        x,
        y,
        z,
        scale,
        opacity,
        zIndex,
        rotateY,
        pointerEvents,
        transformStyle: 'preserve-3d',
      }}
      className={`absolute flex flex-col justify-between ${
        isTablet ? 'w-[250px] h-[330px]' : 'w-[320px] h-[400px]'
      }`}
    >
      <Link
        to={`/collections/${cat.slug}`}
        className="group w-full h-full block bg-white border border-[#e8e3d8] hover:border-[#8c5a3c] p-4 sm:p-5 flex flex-col justify-between shadow-[0_16px_36px_rgba(40,39,38,0.06)] hover:shadow-[0_24px_50px_rgba(40,39,38,0.12)] transition-all duration-400 rounded-sm"
      >
        {/* Card Image Container */}
        <div className={`relative w-full overflow-hidden bg-[#f4efe6] rounded-sm ${
          isTablet ? 'h-[190px]' : 'h-[250px]'
        }`}>
          <img
            src={cat.image}
            alt={cat.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-2 left-2 px-2 py-0.5 bg-white/95 backdrop-blur-md text-[9px] uppercase tracking-widest text-[#8c5a3c] font-bold border border-[#e8e3d8] rounded-sm shadow-sm">
            0{index + 1} / 08
          </div>
        </div>

        {/* Card Content & Action */}
        <div className="space-y-1 pt-2">
          <span className="text-[9px] uppercase tracking-widest text-[#8c5a3c] font-semibold block truncate">
            {cat.subtitle}
          </span>
          <h3 className="text-lg sm:text-xl font-serif text-[#282726] group-hover:text-[#8c5a3c] transition-colors font-medium truncate">
            {cat.name}
          </h3>
          <div className="flex items-center justify-between text-xs font-semibold text-[#8c5a3c] pt-0.5">
            <span>Explore Collection</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export const HorizontalCategoryShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTablet, setIsTablet] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setIsTablet(w >= 768 && w < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track vertical scroll progress inside the pinned section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <div id="signature-horizontal-categories" className="relative bg-[#faf8f5]">
      
      {/* SECTION HEADER BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-8 sm:pb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-[#e8e3d8]">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8c5a3c] mb-3">
            <Compass className="w-4 h-4" />
            <span>3D Spherical Product Globe</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium text-[#282726] tracking-tight">
            Curated <span className="italic font-normal text-[#8c5a3c]">Architectural Globe</span>
          </h2>
        </div>
        <p className="max-w-md text-xs sm:text-sm text-[#6e6a63] mt-3 md:mt-0 font-light leading-relaxed">
          Explore solid teak entrance double doors, waterproof PVC/WPC doors, and IS 710 marine plywood in our 3D showroom gallery.
        </p>
      </div>

      {/* TABLET & DESKTOP PINNED 3D SPHERICAL GLOBE GALLERY (>= 768px) */}
      <div ref={containerRef} className="hidden md:block relative h-[125vh]">
        <div className="sticky top-16 h-[75vh] min-h-[550px] flex flex-col justify-center items-center overflow-hidden bg-[#faf8f5]">
          
          {/* Top Progress Track */}
          <div className="max-w-7xl mx-auto px-8 w-full mb-4 flex items-center justify-between z-30">
            <div className="flex items-center space-x-3 text-xs uppercase tracking-widest text-[#8c5a3c] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Scroll-Controlled 3D Spherical Globe (01 — 08)</span>
            </div>
            <div className="w-60 sm:w-72 h-[2px] bg-[#e8e3d8] relative overflow-hidden rounded-full">
              <motion.div 
                className="absolute top-0 bottom-0 left-0 bg-[#8c5a3c]"
                style={{ width: useTransform(scrollYProgress, [0, 1], ['0%', '100%']) }}
              />
            </div>
          </div>

          {/* 3D Spherical Stage Container with Perspective */}
          <div 
            className="relative w-full max-w-7xl h-[520px] sm:h-[620px] flex items-center justify-center"
            style={{
              perspective: '1300px',
              perspectiveOrigin: '50% 50%',
            }}
          >
            {/* Architectural Orbit Ring Accents */}
            <div className="absolute w-[500px] h-[500px] sm:w-[720px] sm:h-[720px] rounded-full border border-[#8c5a3c]/15 pointer-events-none -rotate-12" />
            <div className="absolute w-[450px] h-[220px] sm:w-[650px] sm:h-[320px] rounded-[100%] border border-[#8c5a3c]/10 pointer-events-none rotate-12" />

            {/* Central Showroom Globe Badge */}
            <div className="absolute z-0 text-center pointer-events-none space-y-0.5 p-4 sm:p-6 bg-white/80 backdrop-blur-md rounded-full border border-[#e8e3d8] shadow-sm">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#8c5a3c] font-bold block">
                MAJISA SHOWROOM
              </span>
              <span className="text-lg sm:text-xl font-serif text-[#282726] font-medium block">
                Coimbatore
              </span>
            </div>

            {/* 3D Spherical Cards Array */}
            {categories.map((cat, idx) => (
              <SphericalCategoryCard
                key={cat.id}
                cat={cat}
                index={idx}
                total={categories.length}
                scrollYProgress={scrollYProgress}
                isTablet={isTablet}
              />
            ))}
          </div>

          {/* Bottom Scroll Hint */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.25em] text-[#8c5a3c] font-semibold flex items-center space-x-2 z-30">
            <span>Scroll vertically to rotate product globe</span>
          </div>

        </div>
      </div>

      {/* MOBILE TOUCH-FRIENDLY 3D CURVED CAROUSEL (< 768px) */}
      <div className="md:hidden px-4 py-8 space-y-6">
        
        <div className="relative overflow-hidden pt-2 pb-4">
          <div className="flex overflow-x-auto space-x-4 no-scrollbar snap-x snap-mandatory px-2">
            {categories.map((cat, idx) => (
              <Link
                key={cat.id}
                to={`/collections/${cat.slug}`}
                className="snap-center flex-shrink-0 w-[82vw] max-w-[320px] h-[420px] bg-white border border-[#e8e3d8] active:border-[#8c5a3c] p-4 flex flex-col justify-between shadow-sm rounded-sm transition-all"
              >
                <div className="relative w-full h-[240px] overflow-hidden bg-[#f4efe6] rounded-sm">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-white/95 text-[9px] uppercase tracking-widest text-[#8c5a3c] font-bold border border-[#e8e3d8] rounded-sm">
                    0{idx + 1} / 08
                  </span>
                  <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 bg-black/60 text-[9px] uppercase tracking-wider text-white rounded-sm">
                    {cat.productCount} Items
                  </span>
                </div>

                <div className="space-y-1.5 pt-2">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#8c5a3c] block font-semibold truncate">
                    {cat.subtitle}
                  </span>
                  <h3 className="text-xl font-serif text-[#282726] font-medium truncate">
                    {cat.name}
                  </h3>
                  <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#8c5a3c] pt-1">
                    <span>Explore Collection</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Category Quick Links Chips */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#e8e3d8]">
          <span className="text-[10px] uppercase tracking-wider text-[#706c64] w-full font-semibold block mb-1">
            Tap Category to Open:
          </span>
          {categories.map((c) => (
            <Link
              key={c.id}
              to={`/collections/${c.slug}`}
              className="px-3 py-1.5 bg-white border border-[#e8e3d8] active:bg-[#f4efe6] rounded-sm text-[11px] font-medium text-[#282726]"
            >
              {c.name}
            </Link>
          ))}
        </div>

      </div>

    </div>
  );
};
