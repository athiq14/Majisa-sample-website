import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';

import { HomePage } from './pages/HomePage';
import { CollectionsPage } from './pages/CollectionsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top component on route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedProductForEnquiry, setSelectedProductForEnquiry] = useState<string | undefined>();

  const handleOpenEnquiry = (productName?: string) => {
    setSelectedProductForEnquiry(productName);
    setEnquiryModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#0c0d0e] text-[#ece8e1] selection:bg-[#c5a059] selection:text-[#0c0d0e]">
        
        {/* Navigation Bar */}
        <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Main Route Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/collections" element={<CollectionsPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/collections/:categorySlug" element={<CollectionsPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/product/:productSlug" element={<ProductDetailPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Showroom Footer */}
        <Footer />

        {/* Quick Enquiry Modal */}
        <EnquiryModal
          isOpen={enquiryModalOpen}
          onClose={() => setEnquiryModalOpen(false)}
          prefilledProduct={selectedProductForEnquiry}
        />

      </div>
    </Router>
  );
}

export default App;
