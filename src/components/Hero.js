import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Dark background */}
      <div className="absolute inset-0 z-0 bg-dark"></div>

      {/* Main Content */}
      <div className="relative z-10 container-custom text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 sm:mb-12"
          >
            <div className="flex justify-center mb-6">
              <div className="relative">
                <img 
                  src="/logo.png" 
                  alt="Racism Lawyer Toronto Logo" 
                  className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto object-contain drop-shadow-2xl"
                  loading="eager"
                />
              </div>
            </div>
            
            {/* Organization Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-2"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gold-500 tracking-wider uppercase">
                Racism Lawyer Toronto
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white mt-4">
                Expert Discrimination & Human Rights Lawyers
              </p>
            </motion.div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-10 sm:mb-12 lg:mb-16"
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed max-w-4xl mx-auto px-4">
              At <span className="text-gold-500 font-semibold">Racism Lawyer Toronto</span>, we stand firmly against all forms of discrimination and <span className="text-gold-500 font-semibold">racism</span>, advocating for a world where justice is blind to color and equality prevails for all. Our dedicated team of passionate legal professionals is committed to fighting racial injustices through the power of <span className="text-gold-500 font-semibold">law</span>.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('#contact')}
              className="group relative overflow-hidden border-2 border-gold-500 bg-dark/80 backdrop-blur-sm text-white px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 rounded-lg font-bold text-lg sm:text-xl lg:text-2xl transition-all duration-200 shadow-2xl hover:shadow-gold-500/50"
            >
              <span className="relative z-10 flex items-center justify-center space-x-3">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Book An Appointment</span>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => scrollToSection('#services')}
          className="p-3 rounded-full bg-gold-500/20 backdrop-blur-sm border border-gold-500/30 hover:bg-gold-500/30 transition-all duration-200"
          aria-label="Scroll to services"
        >
          <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
