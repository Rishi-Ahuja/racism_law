import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-white py-8 sm:py-12 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gold-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gold-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Copyright */}
        <div className="text-center border-t border-gold-500/20 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <div className="text-gray-300 text-sm sm:text-base">
              <p>Copyright 2025. Racism Lawyer Toronto - All Rights Reserved.</p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="bg-gold-500 hover:bg-gold-600 text-dark p-3 rounded-full transition-colors duration-300 shadow-lg"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
