import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Search, Filter, RefreshCw, ChevronRight, Compass } from 'lucide-react';

interface CollectionsPageProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const CollectionsPage: React.FC<CollectionsPageProps> = ({ onOpenEnquiry }) => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [waterproofOnly, setWaterproofOnly] = useState(false);

  const isAll = !categorySlug || categorySlug === 'all';
  const currentCategory = useMemo(() => {
    if (isAll) return null;
    return categories.find(c => c.slug === categorySlug) || null;
  }, [categorySlug, isAll]);

  // Filter products by Category Slug (Strict matching)
  const categoryFilteredProducts = useMemo(() => {
    if (isAll) return products;
    return products.filter(p => p.categorySlug === categorySlug);
  }, [categorySlug, isAll]);

  // Apply Search and Material Filters
  const displayedProducts = useMemo(() => {
    return categoryFilteredProducts.filter(product => {
      const matchesSearch = searchQuery === '' || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesWaterproof = !waterproofOnly || product.specifications.waterproof;

      return matchesSearch && matchesWaterproof;
    });
  }, [categoryFilteredProducts, searchQuery, waterproofOnly]);

  return (
    <div className="bg-[#faf8f5] min-h-screen pt-20 sm:pt-28 pb-20 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-[#706c64] mb-6 sm:mb-8 uppercase tracking-wider overflow-x-auto no-scrollbar py-1">
          <Link to="/" className="hover:text-[#8c5a3c] transition-colors flex-shrink-0">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#c8c3b7] flex-shrink-0" />
          <Link to="/collections/all" className="hover:text-[#8c5a3c] transition-colors flex-shrink-0">Collections</Link>
          {currentCategory && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-[#c8c3b7] flex-shrink-0" />
              <span className="text-[#8c5a3c] font-medium truncate max-w-[160px] sm:max-w-xs">{currentCategory.name}</span>
            </>
          )}
        </nav>

        {/* Collection Hero Banner */}
        <div className="relative rounded-sm overflow-hidden bg-white border border-[#e8e3d8] mb-8 sm:mb-12 shadow-sm p-6 sm:p-12">
          <div className="absolute inset-0 z-0">
            <img
              src={currentCategory ? currentCategory.image : '/images/categories/wooden-doors.jpg'}
              alt={currentCategory ? currentCategory.name : 'All Collections'}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-3 sm:space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#8c5a3c] font-bold">
              <Compass className="w-4 h-4" />
              <span>{currentCategory ? currentCategory.subtitle : 'Full Showroom Inventory'}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-[#282726] font-medium">
              {currentCategory ? currentCategory.name : 'All Product Collections'}
            </h1>
            <p className="text-xs sm:text-sm text-[#6e6a63] font-light leading-relaxed">
              {currentCategory 
                ? currentCategory.description 
                : 'Explore our complete architectural catalog of solid teak doors, waterproof polymer PVC & WPC doors, IS 710 marine plywoods, and satin brass accessories.'
              }
            </p>
            <div className="pt-1 text-xs text-[#8c5a3c] font-semibold tracking-wide">
              Showing <span className="text-[#282726] font-bold">{displayedProducts.length}</span> matching products
            </div>
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex overflow-x-auto space-x-2 no-scrollbar pb-3 mb-6 sm:mb-8 border-b border-[#e8e3d8]">
          <Link
            to="/collections/all"
            className={`flex-shrink-0 px-3.5 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all border ${
              isAll 
                ? 'bg-[#8c5a3c] text-white border-[#8c5a3c]' 
                : 'bg-white text-[#504c46] border-[#e8e3d8] hover:border-[#8c5a3c]'
            }`}
          >
            All ({products.length})
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/collections/${cat.slug}`}
              className={`flex-shrink-0 px-3.5 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all border ${
                categorySlug === cat.slug
                  ? 'bg-[#8c5a3c] text-white border-[#8c5a3c]'
                  : 'bg-white text-[#504c46] border-[#e8e3d8] hover:border-[#8c5a3c]'
              }`}
            >
              {cat.name} ({cat.productCount})
            </Link>
          ))}
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white border border-[#e8e3d8] p-3.5 sm:p-4 rounded-sm mb-8 sm:mb-10 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 shadow-sm">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#8c887e] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search in ${currentCategory ? currentCategory.name : 'all products'}...`}
              className="w-full pl-10 pr-4 py-2.5 bg-[#faf8f5] border border-[#e8e3d8] focus:border-[#8c5a3c] rounded-sm text-xs text-[#282726] outline-none transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[#706c64] hover:text-[#282726] p-1"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-between sm:justify-end gap-3 w-full md:w-auto">
            <label className="flex items-center space-x-2 text-xs text-[#504c46] cursor-pointer bg-[#faf8f5] px-3 py-2 border border-[#e8e3d8] rounded-sm touch-target">
              <input
                type="checkbox"
                checked={waterproofOnly}
                onChange={(e) => setWaterproofOnly(e.target.checked)}
                className="accent-[#8c5a3c] w-4 h-4"
              />
              <span>100% Waterproof Only</span>
            </label>

            {(searchQuery || waterproofOnly) && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setWaterproofOnly(false);
                }}
                className="px-3 py-2 text-xs text-[#8c5a3c] hover:text-[#282726] flex items-center space-x-1 font-medium touch-target"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Product Grid (Responsive: 1 col on small mobile, 2 col on 360px+ phones/tablets, 3-4 on desktop) */}
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenEnquiry={onOpenEnquiry}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 sm:py-20 bg-white border border-[#e8e3d8] rounded-sm p-6 sm:p-8 space-y-4 shadow-sm">
            <Filter className="w-12 h-12 text-[#8c5a3c] mx-auto opacity-60" />
            <h3 className="text-2xl font-serif text-[#282726]">No Products Match Your Search</h3>
            <p className="text-xs text-[#706c64] max-w-md mx-auto">
              We couldn't find any products matching "{searchQuery}" in this collection. Try searching with different terms or reset your filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setWaterproofOnly(false);
              }}
              className="px-6 py-3 bg-[#8c5a3c] text-white text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-[#764b30] transition-all shadow-sm touch-target"
            >
              Reset Search & Show All
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
