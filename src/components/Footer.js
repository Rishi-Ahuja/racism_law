import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-dark text-white py-8 sm:py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" aria-hidden>
        <div className="absolute top-0 left-0 w-64 h-64 bg-gold-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gold-500 rounded-full blur-3xl" />
      </div>
      <div className="container-custom relative z-10">
        <div className="text-center border-t border-gold-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm sm:text-base">
              Copyright 2025. Racism Lawyer Toronto - All Rights Reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="hover-scale bg-gold-500 hover:bg-gold-600 text-dark p-3 rounded-full transition-colors duration-200 shadow-lg"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
