import React from 'react';
import { Phone } from 'lucide-react';

const EmergencyBanner = () => {
  return (
    <section className="py-8 sm:py-12 bg-gold-500 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 sm:space-x-6">
            <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-dark" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-dark uppercase tracking-wide">
              Emergency? Call Us Now -{' '}
              <a
                href="tel:+12895006616"
                className="hover:text-white transition-colors duration-200 underline decoration-2"
              >
                (289) 500-6616
              </a>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyBanner;
