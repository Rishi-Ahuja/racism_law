import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Phone, BookOpen } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Skyline Background */}
      <div className="absolute inset-0 z-0">
        {/* Your skyline image with enhanced processing */}
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/skyline.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            filter: 'brightness(0.1) contrast(1.5) saturate(0.8) blur(0.5px)',
            imageRendering: 'high-quality',
            WebkitImageRendering: 'high-quality',
            MozImageRendering: 'high-quality',
            msImageRendering: 'high-quality',
            transform: 'scale(1.02)',
          }}
        />
        
        {/* Enhanced gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-accent/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Animated light particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Content with Better Typography */}
      <div className="relative z-10 container-custom text-center text-white px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          {/* Main Headline with Better Spacing */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16 mx-4 sm:mx-6 lg:mx-8 my-8 sm:my-12 lg:my-16"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 leading-[1.2] tracking-tight">
              <span className="block bg-gradient-to-r from-white via-accent to-primary bg-clip-text text-transparent pb-4 pt-2">
                Justice for All
              </span>
            </h1>
            
            {/* Subtitle with Better Hierarchy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-gray-100 leading-tight">
                Fighting Racism and Discrimination
              </p>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-200">
                Across Toronto & Canada
              </p>
            </motion.div>
          </motion.div>

          {/* Enhanced Call to Action Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20 max-w-6xl mx-auto"
          >
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-relaxed mb-6">
              Your rights matter. Your voice matters.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light">
              Let us fight for you.
            </p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="group relative overflow-hidden bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white text-xl sm:text-2xl px-10 sm:px-12 py-5 sm:py-6 rounded-full font-bold flex items-center space-x-4 shadow-2xl hover:shadow-3xl transition-all duration-500"
              style={{
                backdropFilter: 'blur(20px)',
                boxShadow: '0 20px 40px rgba(197, 139, 46, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Phone className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" />
              <span className="relative z-10">Free Consultation</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#about')}
              className="group relative overflow-hidden bg-white/10 backdrop-blur-xl border-2 border-white/40 text-white hover:bg-white/20 hover:text-primary text-xl sm:text-2xl px-10 sm:px-12 py-5 sm:py-6 rounded-full font-bold flex items-center space-x-4 transition-all duration-500 hover:border-white/60"
              style={{
                backdropFilter: 'blur(20px)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" />
              <span className="relative z-10">Learn More</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => scrollToSection('#about')}
            className="group relative p-3 sm:p-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            style={{
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            }}
            aria-label="Scroll to next section"
          >
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-accent transition-colors duration-300" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
