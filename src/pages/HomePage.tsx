import React from 'react';
import { Link } from 'react-router-dom';
import { HeroVideo } from '../components/HeroVideo';
import { HorizontalCategoryShowcase } from '../components/HorizontalCategoryShowcase';
import { ProductCard } from '../components/ProductCard';
import { CraftsmanshipSection } from '../components/CraftsmanshipSection';
import { ShowroomSection } from '../components/ShowroomSection';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { Sparkles, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenEnquiry }) => {
  const featuredProducts = products.filter(p => p.featured);

  return (
    <div className="bg-[#faf8f5] min-h-screen">
      
      {/* 1. CINEMATIC HERO VIDEO */}
      <HeroVideo />

      {/* 2. SIGNATURE HORIZONTAL-SCROLL CATEGORY EXPERIENCE (Refinement inspired by reference) */}
      <HorizontalCategoryShowcase />

      {/* 3. FEATURED PRODUCTS GRID */}
      <section className="py-24 bg-[#ffffff] border-t border-b border-[#e8e3d8] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8c5a3c] mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Showroom Highlights</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-medium text-[#282726] tracking-tight">
                Featured <span className="italic font-normal text-[#8c5a3c]">Architectural</span> Products
              </h2>
            </div>

            <Link
              to="/collections/all"
              className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#8c5a3c] hover:text-[#282726] transition-colors"
            >
              <span>Explore All Products ({products.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenEnquiry={onOpenEnquiry}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 4. FEATURED CATEGORY TILES (Compact Grid) */}
      <section className="py-20 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8c5a3c] font-bold block mb-2">
              Browse By Specialty
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#282726]">
              Explore Our <span className="italic text-[#8c5a3c]">Full Portfolio</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/collections/${cat.slug}`}
                className="group relative h-48 rounded-sm overflow-hidden bg-white border border-[#e8e3d8] hover:border-[#8c5a3c] transition-all p-5 flex flex-col justify-end shadow-sm"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                <div className="relative z-10">
                  <span className="text-[10px] uppercase tracking-wider text-[#8c5a3c] font-bold block">
                    {cat.productCount} Products
                  </span>
                  <h3 className="text-lg font-serif text-[#282726] font-medium group-hover:text-[#8c5a3c] transition-colors">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CRAFTSMANSHIP & MATERIALS */}
      <CraftsmanshipSection />

      {/* 6. SHOWROOM & LOCATION */}
      <ShowroomSection />

      {/* 7. ENQUIRY BANNER */}
      <section className="py-20 bg-[#f4efe6] border-t border-[#e4dacb]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8c5a3c] font-bold block">
            Coimbatore Showroom Consultation
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#282726]">
            Ready to Select Doors for Your Project?
          </h2>
          <p className="text-sm text-[#6e6a63] max-w-xl mx-auto font-light leading-relaxed">
            Get personalized advice on solid teak entrance doors, waterproof PVC/WPC bathroom doors, and IS 710 marine plywood sheets directly from our team.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenEnquiry()}
              className="px-8 py-4 bg-[#8c5a3c] hover:bg-[#764b30] text-white text-xs uppercase tracking-widest font-semibold rounded-sm transition-all shadow-md"
            >
              Request Custom Quote
            </button>
            <a
              href="tel:+919842212345"
              className="px-8 py-4 bg-white hover:bg-[#faf8f5] text-[#282726] border border-[#e8e3d8] text-xs uppercase tracking-widest font-semibold rounded-sm transition-all shadow-sm"
            >
              Call Showroom Direct
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
