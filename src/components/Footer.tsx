import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, MapPin, Phone, Clock, ChevronRight } from 'lucide-react';
import { categories } from '../data/categories';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f4efe6] border-t border-[#e4dacb] text-[#504c46] text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#e4dacb]">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-9 h-9 rounded bg-white border border-[#e4dacb] flex items-center justify-center text-[#8c5a3c]">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-lg font-serif font-bold text-[#282726] tracking-widest">
                  MAJISA DOORS & PLYWOODS
                </span>
                <span className="block text-[9px] uppercase tracking-[0.25em] text-[#8c5a3c]">
                  Architectural Showroom · Coimbatore
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#6e6a63] font-light leading-relaxed max-w-sm">
              Coimbatore's destination for solid teak main entrance doors, waterproof polymer PVC & WPC doors, IS 710 Marine Grade Gurjan plywood, and satin brass architectural hardware.
            </p>

            <div className="space-y-2 pt-2 text-[11px] text-[#504c46]">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#8c5a3c] flex-shrink-0" />
                <span>Mettupalayam Road, Coimbatore, Tamil Nadu</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#8c5a3c] flex-shrink-0" />
                <a href="tel:+919842212345" className="hover:text-[#8c5a3c] transition-colors">
                  +91 98422 12345 / +91 98422 54321
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#8c5a3c] flex-shrink-0" />
                <span>Monday – Saturday: 9:00 AM – 8:30 PM</span>
              </div>
            </div>
          </div>

          {/* Categories Col 1 */}
          <div className="space-y-3">
            <span className="text-xs font-serif uppercase tracking-widest text-[#8c5a3c] font-bold block">
              Door Collections
            </span>
            <ul className="space-y-2">
              {categories.slice(0, 4).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/collections/${cat.slug}`}
                    className="hover:text-[#8c5a3c] transition-colors flex items-center space-x-1"
                  >
                    <ChevronRight className="w-3 h-3 text-[#8c5a3c]" />
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Col 2 */}
          <div className="space-y-3">
            <span className="text-xs font-serif uppercase tracking-widest text-[#8c5a3c] font-bold block">
              Plywood & Hardware
            </span>
            <ul className="space-y-2">
              {categories.slice(4, 8).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/collections/${cat.slug}`}
                    className="hover:text-[#8c5a3c] transition-colors flex items-center space-x-1"
                  >
                    <ChevronRight className="w-3 h-3 text-[#8c5a3c]" />
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <span className="text-xs font-serif uppercase tracking-widest text-[#8c5a3c] font-bold block">
              Quick Links
            </span>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-[#8c5a3c] transition-colors">Home Showroom</Link></li>
              <li><Link to="/about" className="hover:text-[#8c5a3c] transition-colors">Craftsmanship & History</Link></li>
              <li><Link to="/contact" className="hover:text-[#8c5a3c] transition-colors">Showroom Contact</Link></li>
              <li><Link to="/collections/all" className="hover:text-[#8c5a3c] transition-colors">All Products</Link></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#706c64]">
          <p>© {new Date().getFullYear()} Majisa Doors & Plywoods, Coimbatore. All Rights Reserved.</p>
          <p className="flex items-center space-x-2">
            <span>Architectural Commerce Experience</span>
            <span>·</span>
            <span className="text-[#8c5a3c]">Coimbatore, Tamil Nadu</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
