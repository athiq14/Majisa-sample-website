import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';
import { Shield, Droplets, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpenEnquiry?: (productName: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenEnquiry }) => {
  return (
    <div className="group relative bg-white border border-[#e8e3d8] hover:border-[#8c5a3c] rounded-sm overflow-hidden transition-all duration-400 flex flex-col justify-between hover:shadow-[0_16px_36px_rgba(40,39,38,0.06)]">
      
      {/* Product Image & Badges */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#f4efe6]">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />

        {/* Category & Waterproof Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="px-2.5 py-1 bg-white/95 backdrop-blur-md border border-[#e8e3d8] text-[10px] font-semibold uppercase tracking-wider text-[#8c5a3c] rounded-sm shadow-sm">
            {product.category}
          </span>
          {product.specifications.waterproof && (
            <span className="px-2 py-1 bg-[#f4efe6] text-[10px] text-[#7a4b2a] flex items-center space-x-1 rounded-sm border border-[#e4dacb] font-medium">
              <Droplets className="w-3 h-3 text-[#8c5a3c]" />
              <span>Waterproof</span>
            </span>
          )}
        </div>

        {/* Showroom Highlight Tag */}
        {product.featured && (
          <div className="absolute top-3 right-3 px-2 py-0.5 bg-[#8c5a3c] text-white text-[9px] font-bold uppercase tracking-widest rounded-sm shadow-sm">
            Showroom Highlight
          </div>
        )}
      </div>

      {/* Product Body Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-serif text-[#282726] group-hover:text-[#8c5a3c] transition-colors line-clamp-1 font-medium">
            {product.name}
          </h3>
          <p className="text-xs text-[#6e6a63] font-light line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Key Specs Pills */}
        <div className="grid grid-cols-2 gap-2 text-[10px] text-[#55514a] pt-3 border-t border-[#f4efe6]">
          <div className="flex items-center space-x-1">
            <CheckCircle2 className="w-3 h-3 text-[#8c5a3c] flex-shrink-0" />
            <span className="truncate">{product.specifications.thickness}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Shield className="w-3 h-3 text-[#8c5a3c] flex-shrink-0" />
            <span className="truncate">{product.specifications.warranty}</span>
          </div>
        </div>

        {/* Card Actions */}
        <div className="pt-2 flex items-center justify-between gap-2">
          <Link
            to={`/product/${product.slug}`}
            className="flex-1 py-2 px-3 text-center text-xs font-semibold uppercase tracking-wider text-[#282726] bg-[#faf8f5] hover:bg-[#f4efe6] border border-[#e8e3d8] hover:border-[#8c5a3c] rounded-sm transition-all flex items-center justify-center space-x-1 group/btn"
          >
            <span>View Details</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#8c5a3c] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </Link>

          {onOpenEnquiry && (
            <button
              onClick={() => onOpenEnquiry(product.name)}
              className="py-2 px-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#8c5a3c] hover:bg-[#764b30] rounded-sm transition-all shadow-sm"
              title="Inquire about this product"
            >
              Enquire
            </button>
          )}
        </div>

      </div>

    </div>
  );
};
