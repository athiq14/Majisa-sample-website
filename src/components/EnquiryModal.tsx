import React, { useState } from 'react';
import { X, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { categories } from '../data/categories';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledProduct?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, prefilledProduct }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(prefilledProduct || 'Wooden Doors');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  const handleWhatsApp = () => {
    const text = `Hello Majisa Doors & Plywoods,%0A%0AI am interested in: ${selectedCategory}%0AName: ${name || 'Customer'}%0APhone: ${phone || 'N/A'}%0AMessage: ${message || 'Please send pricing and catalogue details.'}`;
    window.open(`https://wa.me/919842212345?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white border border-[#e8e3d8] rounded-sm shadow-2xl p-6 sm:p-8 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#706c64] hover:text-[#282726] transition-colors"
          aria-label="Close Enquiry Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <CheckCircle2 className="w-16 h-16 text-[#8c5a3c] mx-auto animate-bounce" />
            <h3 className="text-2xl font-serif text-[#282726]">Enquiry Received!</h3>
            <p className="text-xs text-[#706c64]">
              Thank you for contacting Majisa Doors & Plywoods, Coimbatore. Our showroom specialist will reach out to you shortly.
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-1 border-b border-[#f4efe6] pb-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8c5a3c] font-bold">
                Showroom Quote & Catalogue Request
              </span>
              <h3 className="text-2xl font-serif text-[#282726] font-medium">
                Request Product Consultation
              </h3>
              {prefilledProduct && (
                <p className="text-xs text-[#8c5a3c] italic pt-1">
                  Enquiring about: {prefilledProduct}
                </p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#504c46] mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full px-4 py-2.5 bg-[#faf8f5] border border-[#e8e3d8] focus:border-[#8c5a3c] rounded-sm text-xs text-[#282726] outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#504c46] mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 bg-[#faf8f5] border border-[#e8e3d8] focus:border-[#8c5a3c] rounded-sm text-xs text-[#282726] outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#504c46] mb-1">
                  Interested Category / Product
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#faf8f5] border border-[#e8e3d8] focus:border-[#8c5a3c] rounded-sm text-xs text-[#282726] outline-none transition-colors"
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                      {cat.name} ({cat.subtitle})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#504c46] mb-1">
                  Project Requirements / Message
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share dimensions, door quantity, or preferred timber finish..."
                  className="w-full px-4 py-2.5 bg-[#faf8f5] border border-[#e8e3d8] focus:border-[#8c5a3c] rounded-sm text-xs text-[#282726] outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="submit"
                  className="py-3 px-4 bg-[#8c5a3c] hover:bg-[#764b30] text-white text-xs uppercase tracking-widest font-semibold rounded-sm transition-all flex items-center justify-center space-x-2 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs uppercase tracking-widest font-semibold rounded-sm transition-all flex items-center justify-center space-x-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </form>
          </>
        )}

      </div>
    </div>
  );
};
