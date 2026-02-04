import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const scrollRaf = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (scrollRaf.current) return;
      scrollRaf.current = requestAnimationFrame(() => {
        scrollRaf.current = null;
        setIsScrolled(y > 50);

        const sections = ['home', 'about', 'services', 'rights', 'faq', 'contact'];
        const scrollPosition = y + 100;
        for (let i = sections.length - 1; i >= 0; i--) {
          const element = document.querySelector(`#${sections[i]}`);
          if (element && element.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollRaf.current) cancelAnimationFrame(scrollRaf.current);
    };
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
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`w-full z-50 fixed transition-[top,left,transform,max-width] duration-300 ${
        isScrolled ? 'top-4 left-1/2 -translate-x-1/2' : 'top-0 left-0'
      }`}
      style={{
        width: isScrolled ? 'auto' : '100%',
        maxWidth: isScrolled ? '800px' : 'none',
      }}
    >
      {isScrolled ? (
        <div className="flex items-center space-x-4 sm:space-x-6">
          <div className="flex items-center space-x-1 bg-dark/95 rounded-full p-2 whitespace-nowrap shadow-2xl border border-gold-500/30">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 z-10 whitespace-nowrap hover-scale"
                style={{
                  color: activeSection === item.id ? '#D4AF37' : 'rgba(255, 255, 255, 0.8)',
                }}
              >
                {activeSection === item.id && (
                  <span
                    className="absolute inset-0 rounded-full bg-gold-500/20 border border-gold-500/40"
                    aria-hidden
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollToSection('#contact')}
            className="hover-scale text-dark px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold flex items-center space-x-2 shadow-2xl whitespace-nowrap bg-gold-500 border border-gold-400 transition-shadow duration-200"
          >
            <Phone className="w-4 h-4" />
            <span className="text-xs sm:text-sm">Free Consultation</span>
          </button>
        </div>
      ) : (
        <div className="w-full bg-dark">
          <div className="flex items-center justify-between px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
            <div className="flex items-center space-x-2 sm:space-x-3 hover-scale inline-flex">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/logo.png"
                  alt="Racism Lawyer Toronto Logo"
                  className="w-full h-full object-contain"
                  width={56}
                  height={56}
                />
              </div>
              <span className="text-base sm:text-lg lg:text-xl font-bold hidden sm:block text-white">
                Racism Lawyer Toronto
              </span>
            </div>

            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id ? 'text-gold-500' : 'text-white/80 hover:text-gold-500'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            <div className="hidden lg:flex items-center">
              <button
                onClick={() => scrollToSection('#contact')}
                className="hover-scale bg-gold-500 text-dark px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>Free Consultation</span>
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-gold-500 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <div
            className="lg:hidden overflow-hidden transition-all duration-300 ease-out"
            style={{ maxHeight: isMobileMenuOpen ? '400px' : '0', opacity: isMobileMenuOpen ? 1 : 0 }}
          >
            <div className="px-4 pb-4 space-y-2 bg-dark/95">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left py-2 px-4 rounded-full transition-colors duration-200 font-medium ${
                    activeSection === item.id ? 'bg-gold-500 text-dark' : 'text-white hover:bg-gold-500/20'
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
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
