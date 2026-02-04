import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'services', 'rights', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.querySelector(`#${sections[i]}`);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Rights', href: '#rights', id: 'rights' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`w-full z-50 ${isScrolled ? 'fixed top-4 left-1/2 transform -translate-x-1/2' : 'fixed top-0 left-0'}`}
      style={{
        width: isScrolled ? 'auto' : '100%',
        maxWidth: isScrolled ? '800px' : 'none',
      }}
    >
      {isScrolled ? (
        // Scrolled state - two separate pills
        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* Navigation Pill */}
          <motion.div
            className="flex items-center space-x-1 bg-dark/90 backdrop-blur-xl rounded-full p-2 whitespace-nowrap shadow-2xl border border-gold-500/30"
            style={{
              backdropFilter: 'blur(30px) saturate(180%)',
            }}
          >
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 z-10 whitespace-nowrap"
                style={{
                  color: activeSection === item.id ? '#D4AF37' : 'rgba(255, 255, 255, 0.8)',
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'rgba(212, 175, 55, 0.2)',
                      border: '1px solid rgba(212, 175, 55, 0.4)',
                    }}
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* CTA Button Pill */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#contact')}
            className="text-dark px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold flex items-center space-x-2 shadow-2xl hover:shadow-3xl transition-all duration-300 whitespace-nowrap bg-gold-500 border border-gold-400"
          >
            <Phone className="w-4 h-4" />
            <span className="text-xs sm:text-sm">Free Consultation</span>
          </motion.button>
        </div>
      ) : (
        // Normal state - full width header
        <div 
          className="w-full bg-dark"
          style={{
            backdropFilter: 'blur(20px) saturate(180%)',
          }}
        >
          <div className="flex items-center justify-between px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 sm:space-x-3"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/logo.png" 
                  alt="Racism Lawyer Toronto Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-text text-base sm:text-lg lg:text-xl font-bold hidden sm:block text-white">
                Racism Lawyer Toronto
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id 
                      ? 'text-gold-500' 
                      : 'text-white/80 hover:text-gold-500'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('#contact')}
                className="bg-gold-500 text-dark px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Free Consultation</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-gold-500 transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isMobileMenuOpen ? 1 : 0,
              height: isMobileMenuOpen ? 'auto' : 0,
            }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-dark/95 backdrop-blur-xl"
          >
            <div className="px-4 pb-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left py-2 px-4 rounded-full transition-all duration-300 font-medium ${
                    activeSection === item.id 
                      ? 'bg-gold-500 text-dark' 
                      : 'text-white hover:bg-gold-500/20'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-gold-500 text-dark px-4 py-2 rounded-full font-semibold flex items-center justify-center space-x-2 shadow-lg mt-4"
              >
                <Phone className="w-4 h-4" />
                <span>Free Consultation</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
