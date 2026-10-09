import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Compass } from 'lucide-react';
import { categories } from '../data/categories';

interface NavbarProps {
  onOpenEnquiry?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#e8e3d8] py-2.5 sm:py-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-[#282726]'
        : isHome 
          ? 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-3.5 sm:py-5 text-white'
          : 'bg-[#faf8f5] border-b border-[#e8e3d8] py-3 sm:py-4 text-[#282726]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="group flex items-center space-x-2.5 touch-target">
            <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-sm border flex items-center justify-center transition-all flex-shrink-0 ${
              isScrolled || !isHome
                ? 'bg-[#f4efe6] border-[#8c5a3c]/30 text-[#8c5a3c] group-hover:border-[#8c5a3c]'
                : 'bg-white/10 border-white/30 text-white group-hover:bg-white/20'
            }`}>
              <Compass className="w-5 h-5 stroke-[1.5]" />
            </div>
            <div className="leading-tight">
              <span className={`block text-base sm:text-lg lg:text-xl font-serif font-bold tracking-widest transition-colors ${
                isScrolled || !isHome ? 'text-[#282726] group-hover:text-[#8c5a3c]' : 'text-white group-hover:text-[#f4efe6]'
              }`}>
                MAJISA
              </span>
              <span className={`block text-[8px] sm:text-[9px] uppercase tracking-[0.2em] font-medium transition-colors ${
                isScrolled || !isHome ? 'text-[#8c5a3c]' : 'text-white/80'
              }`}>
                Doors & Plywoods · Coimbatore
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-xs tracking-widest uppercase font-semibold transition-colors py-1 ${
                location.pathname === '/' 
                  ? (isScrolled ? 'text-[#8c5a3c] border-b-2 border-[#8c5a3c]' : 'text-white border-b-2 border-white')
                  : (isScrolled || !isHome ? 'text-[#504c46] hover:text-[#8c5a3c]' : 'text-white/90 hover:text-white')
              }`}
            >
              Home
            </Link>

            {/* Collections Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button 
                className={`flex items-center space-x-1.5 text-xs tracking-widest uppercase font-semibold py-2 transition-colors ${
                  location.pathname.startsWith('/collections')
                    ? (isScrolled || !isHome ? 'text-[#8c5a3c] border-b-2 border-[#8c5a3c]' : 'text-white border-b-2 border-white')
                    : (isScrolled || !isHome ? 'text-[#504c46] hover:text-[#8c5a3c]' : 'text-white/90 hover:text-white')
                }`}
              >
                <span>Collections</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 pt-2 z-50">
                  <div className="bg-white border border-[#e8e3d8] shadow-xl rounded-sm p-3 grid grid-cols-1 gap-1">
                    <div className="px-3 py-1.5 border-b border-[#f4efe6] text-[10px] uppercase tracking-widest text-[#8c5a3c] font-bold">
                      Showroom Categories (8)
                    </div>
                    {categories.map((cat) => (
                      <Link
                        key={cat.id}
                        to={`/collections/${cat.slug}`}
                        className="flex items-center justify-between px-3 py-2 text-xs text-[#383531] hover:bg-[#faf8f5] hover:text-[#8c5a3c] rounded-sm transition-colors group/item"
                      >
                        <span className="font-medium tracking-wide">{cat.name}</span>
                        <span className="text-[10px] text-[#908b82] group-hover/item:text-[#8c5a3c]">
                          {cat.productCount} items
                        </span>
                      </Link>
                    ))}
                    <div className="pt-2 border-t border-[#f4efe6] mt-1">
                      <Link
                        to="/collections/all"
                        className="block text-center py-2 text-xs font-semibold uppercase tracking-wider text-[#8c5a3c] hover:bg-[#f4efe6] rounded-sm transition-colors"
                      >
                        Explore All Collections →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/about" 
              className={`text-xs tracking-widest uppercase font-semibold transition-colors py-1 ${
                location.pathname === '/about' 
                  ? 'text-[#8c5a3c] border-b-2 border-[#8c5a3c]'
                  : (isScrolled || !isHome ? 'text-[#504c46] hover:text-[#8c5a3c]' : 'text-white/90 hover:text-white')
              }`}
            >
              Craftsmanship & About
            </Link>

            <Link 
              to="/contact" 
              className={`text-xs tracking-widest uppercase font-semibold transition-colors py-1 ${
                location.pathname === '/contact' 
                  ? 'text-[#8c5a3c] border-b-2 border-[#8c5a3c]'
                  : (isScrolled || !isHome ? 'text-[#504c46] hover:text-[#8c5a3c]' : 'text-white/90 hover:text-white')
              }`}
            >
              Showroom Contact
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-5">
            <a
              href="tel:+919842212345"
              className={`flex items-center space-x-2 text-xs tracking-wider transition-colors touch-target ${
                isScrolled || !isHome ? 'text-[#504c46] hover:text-[#8c5a3c]' : 'text-white/90 hover:text-white'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#8c5a3c]" />
              <span>+91 98422 12345</span>
            </a>

            <button
              onClick={onOpenEnquiry}
              className="px-5 py-2.5 text-xs uppercase tracking-widest font-semibold text-white bg-[#8c5a3c] hover:bg-[#764b30] transition-all shadow-sm rounded-sm touch-target"
            >
              Request Quote
            </button>
          </div>

          {/* Mobile Menu Toggle & Direct Call */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onOpenEnquiry}
              className="px-3 py-2 text-[11px] uppercase tracking-wider font-semibold text-white bg-[#8c5a3c] active:bg-[#764b30] rounded-sm touch-target"
            >
              Quote
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-sm touch-target transition-colors ${
                isScrolled || !isHome ? 'text-[#282726] active:bg-[#e8e3d8]' : 'text-white active:bg-white/20'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[56px] bg-[#faf8f5] z-40 border-t border-[#e8e3d8] flex flex-col justify-between p-5 overflow-y-auto">
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8c5a3c] font-bold">
                Navigation
              </span>
              <Link 
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xl font-serif text-[#282726] active:text-[#8c5a3c] py-1"
              >
                Home
              </Link>
              <Link 
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xl font-serif text-[#282726] active:text-[#8c5a3c] py-1"
              >
                Craftsmanship & Showroom
              </Link>
              <Link 
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xl font-serif text-[#282726] active:text-[#8c5a3c] py-1"
              >
                Contact & Location
              </Link>
            </div>

            <div className="pt-4 border-t border-[#e8e3d8]">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8c5a3c] font-bold block mb-3">
                Product Categories (8)
              </span>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/collections/${cat.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 bg-white border border-[#e8e3d8] rounded text-xs text-[#282726] active:border-[#8c5a3c] active:bg-[#faf8f5]"
                  >
                    <span className="font-semibold block truncate">{cat.name}</span>
                    <span className="text-[10px] text-[#706c64]">{cat.productCount} items</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#e8e3d8] space-y-3">
            <a
              href="tel:+919842212345"
              className="block w-full text-center py-3 bg-[#8c5a3c] text-white font-semibold uppercase text-xs tracking-wider rounded touch-target"
            >
              Call Showroom Direct (+91 98422 12345)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
