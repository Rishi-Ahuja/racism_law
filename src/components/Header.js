import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  
  // Transform values based on scroll (keeping for future use)
  // const headerWidth = useTransform(scrollY, [0, 100], ['100%', 'auto']);
  // const headerPosition = useTransform(scrollY, [0, 100], ['static', 'fixed']);
  // const headerTop = useTransform(scrollY, [0, 100], ['0px', '20px']);
  // const headerLeft = useTransform(scrollY, [0, 100], ['0%', '50%']);
  // const headerTransform = useTransform(scrollY, [0, 100], ['translateX(0%)', 'translateX(-50%)']);
  // const headerBorderRadius = useTransform(scrollY, [0, 100], ['0px', '50px']);
  // const headerBackground = useTransform(scrollY, [0, 100], ['rgba(255, 255, 255, 0.95)', 'rgba(255, 255, 255, 0.1)']);
  // const headerBackdrop = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(20px)']);
  // const headerShadow = useTransform(scrollY, [0, 100], ['0 4px 6px rgba(0, 0, 0, 0.1)', '0 8px 32px rgba(0, 0, 0, 0.1)']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`w-full z-50 ${isScrolled ? 'fixed top-4 left-1/2 transform -translate-x-1/2' : 'fixed top-0 left-0'}`}
      style={{
        width: isScrolled ? 'auto' : '100%',
        maxWidth: isScrolled ? '800px' : 'none',
      }}
    >
      {isScrolled ? (
        // Scrolled state - two separate pills (no logo)
        <div className="flex items-center space-x-6">
          {/* Navigation Pill */}
          <motion.div
            className="flex items-center space-x-1 bg-white/10 backdrop-blur-xl rounded-full p-2 whitespace-nowrap shadow-2xl"
            style={{
              backdropFilter: 'blur(30px) saturate(180%)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderTop: '1px solid rgba(255, 255, 255, 0.5)',
              borderLeft: '1px solid rgba(255, 255, 255, 0.4)',
              borderRight: '1px solid rgba(255, 255, 255, 0.2)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 z-10 whitespace-nowrap"
                style={{
                  color: activeSection === item.id ? '#006D5B' : 'rgba(0, 0, 0, 0.8)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full shadow-lg"
                    style={{
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
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
            className="text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 shadow-2xl hover:shadow-3xl transition-all duration-300 whitespace-nowrap"
            style={{
              backdropFilter: 'blur(30px) saturate(180%)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
              background: 'linear-gradient(135deg, rgba(197, 139, 46, 0.9), rgba(197, 139, 46, 0.8))',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderTop: '1px solid rgba(255, 255, 255, 0.5)',
              borderLeft: '1px solid rgba(255, 255, 255, 0.4)',
              borderRight: '1px solid rgba(255, 255, 255, 0.2)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm">Free Consultation</span>
          </motion.button>
        </div>
      ) : (
        // Normal state - full width header fixed at top
        <div 
          className="w-full shadow-2xl"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px) saturate(180%)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderTop: '1px solid rgba(255, 255, 255, 0.4)',
            borderLeft: '1px solid rgba(255, 255, 255, 0.3)',
            borderRight: '1px solid rgba(255, 255, 255, 0.1)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-3"
        >
          <div className="w-16 h-16 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/logo_1.jpeg" 
              alt="Racism Lawyer Toronto Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-text text-xl font-bold hidden sm:block">
            Racism Lawyer Toronto
          </span>
        </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-text hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-to-r from-accent to-accent/90 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Free Consultation</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-text hover:text-primary transition-colors duration-300"
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
            className="lg:hidden overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left py-2 px-4 rounded-full transition-all duration-300 font-medium ${
                    activeSection === item.id 
                      ? 'bg-primary text-white' 
                      : 'text-text hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-gradient-to-r from-accent to-accent/90 text-white px-4 py-2 rounded-full font-semibold flex items-center justify-center space-x-2 shadow-lg mt-4"
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
