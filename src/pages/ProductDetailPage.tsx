import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ChevronRight, Droplets, MessageSquare } from 'lucide-react';

interface ProductDetailPageProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ onOpenEnquiry }) => {
  const { productSlug } = useParams<{ productSlug: string }>();

  const product = products.find(p => p.slug === productSlug);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="bg-[#faf8f5] min-h-screen pt-36 pb-20 text-center px-4">
        <div className="max-w-md mx-auto space-y-6">
          <h2 className="text-3xl font-serif text-[#282726]">Product Not Found</h2>
          <p className="text-xs text-[#706c64]">
            The product you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/collections/all"
            className="inline-block px-6 py-3 bg-[#8c5a3c] text-white font-semibold uppercase text-xs tracking-widest rounded-sm"
          >
            Back to Collections
          </Link>
        </div>
      </div>
    );
  }

  // Related products from same category
  const relatedProducts = products
    .filter(p => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  const handleWhatsApp = () => {
    const text = `Hello Majisa Doors & Plywoods,%0A%0AI am interested in purchasing/inquiring about: ${product.name} (${product.category})%0AProduct Link: ${window.location.href}`;
    window.open(`https://wa.me/919842212345?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#faf8f5] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-[#706c64] mb-8 uppercase tracking-wider">
          <Link to="/" className="hover:text-[#8c5a3c] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#c8c3b7]" />
          <Link to={`/collections/${product.categorySlug}`} className="hover:text-[#8c5a3c] transition-colors">
            {product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#c8c3b7]" />
          <span className="text-[#8c5a3c] font-medium truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Product Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Product Gallery (Left) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-white border border-[#e8e3d8] shadow-lg">
              <img
                src={product.images[selectedImage] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] uppercase font-bold text-[#8c5a3c] rounded border border-[#e8e3d8]">
                  {product.category}
                </span>
                {product.specifications.waterproof && (
                  <span className="px-3 py-1 bg-[#f4efe6] text-[10px] text-[#7a4b2a] rounded border border-[#e4dacb] flex items-center space-x-1 font-medium">
                    <Droplets className="w-3 h-3 text-[#8c5a3c]" />
                    <span>Waterproof</span>
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Selector */}
            {product.images.length > 1 && (
              <div className="flex space-x-3 overflow-x-auto no-scrollbar pt-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 rounded-sm overflow-hidden border transition-all ${
                      selectedImage === idx ? 'border-[#8c5a3c] ring-2 ring-[#8c5a3c]/20' : 'border-[#e8e3d8] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info & Actions (Right) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#8c5a3c] font-semibold block mb-2">
                {product.category} · Showroom Item
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#282726] font-medium mb-4">
                {product.name}
              </h1>
              <p className="text-sm text-[#6e6a63] font-light leading-relaxed">
                {product.fullDescription}
              </p>
            </div>

            {/* Variants / Dimensions If Available */}
            {product.variants && product.variants.length > 0 && (
              <div className="p-4 bg-white border border-[#e8e3d8] rounded-sm space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8c5a3c] block">
                  Available Sizing & Finish Variants
                </span>
                <div className="space-y-2">
                  {product.variants.map((v, i) => (
                    <div key={i} className="flex items-center justify-between text-xs text-[#282726] py-1 border-b border-[#f4efe6] last:border-0">
                      <span className="font-medium">{v.name}</span>
                      <span className="text-[#8c5a3c] font-semibold">{v.finish}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Specifications Summary Grid */}
            <div className="grid grid-cols-2 gap-3 p-4 bg-white border border-[#e8e3d8] rounded-sm text-xs">
              <div>
                <span className="text-[10px] uppercase text-[#706c64] block">Material Core</span>
                <span className="text-[#282726] font-medium">{product.specifications.material}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-[#706c64] block">Finish & Surface</span>
                <span className="text-[#282726] font-medium">{product.specifications.finish}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-[#706c64] block">Standard Thickness</span>
                <span className="text-[#282726] font-medium">{product.specifications.thickness}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-[#706c64] block">Warranty Protection</span>
                <span className="text-[#8c5a3c] font-semibold">{product.specifications.warranty}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onOpenEnquiry(product.name)}
                className="flex-1 py-4 px-6 bg-[#8c5a3c] hover:bg-[#764b30] text-white font-semibold uppercase text-xs tracking-widest rounded-sm transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <span>Request Custom Quote</span>
              </button>

              <button
                onClick={handleWhatsApp}
                className="py-4 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold uppercase text-xs tracking-widest rounded-sm transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Inquiry</span>
              </button>
            </div>

            {/* Showroom Direct Notice */}
            <div className="pt-4 border-t border-[#e8e3d8] flex items-center justify-between text-xs text-[#706c64]">
              <span>Available for direct inspection at our Coimbatore showroom.</span>
              <a href="tel:+919842212345" className="text-[#8c5a3c] hover:underline font-semibold">
                Call +91 98422 12345
              </a>
            </div>

          </div>

        </div>

        {/* Detailed Technical Specs Table */}
        <div className="mb-16 bg-white border border-[#e8e3d8] rounded-sm p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="border-b border-[#e8e3d8] pb-4">
            <h3 className="text-xl font-serif text-[#282726] font-medium">Technical Specifications</h3>
            <p className="text-xs text-[#706c64]">Verified architectural specifications for {product.name}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#282726]">
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-[#f4efe6]">
                <span className="text-[#706c64]">Primary Material</span>
                <span className="font-medium">{product.specifications.material}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#f4efe6]">
                <span className="text-[#706c64]">Surface Polish / Finish</span>
                <span className="font-medium">{product.specifications.finish}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#f4efe6]">
                <span className="text-[#706c64]">Thickness Dimension</span>
                <span className="font-medium">{product.specifications.thickness}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#f4efe6]">
                <span className="text-[#706c64]">Manufacturer Warranty</span>
                <span className="font-semibold text-[#8c5a3c]">{product.specifications.warranty}</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-[#f4efe6]">
                <span className="text-[#706c64]">Water Resistance</span>
                <span className="font-semibold text-[#7a4b2a]">
                  {product.specifications.waterproof ? '100% Waterproof Certified' : 'Interior Moisture Guard'}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#f4efe6]">
                <span className="text-[#706c64]">Termite Protection</span>
                <span className="font-medium">
                  {product.specifications.termiteProof ? 'Anti-Borer & Anti-Termite Chemical Treated' : 'Standard Hardwood Core'}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#f4efe6]">
                <span className="text-[#706c64]">Suitable Applications</span>
                <span className="font-medium">{product.specifications.suitableFor.join(', ')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#e8e3d8] pb-4">
              <h3 className="text-2xl font-serif text-[#282726] font-medium">
                Related {product.category}
              </h3>
              <Link
                to={`/collections/${product.categorySlug}`}
                className="text-xs uppercase tracking-wider text-[#8c5a3c] hover:underline font-semibold"
              >
                View Category ({product.category}) →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} onOpenEnquiry={onOpenEnquiry} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
