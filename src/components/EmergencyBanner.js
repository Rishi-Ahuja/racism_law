import React from 'react';
import { FileText } from 'lucide-react';

const EmergencyBanner = () => {
  const scrollToForm = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-8 sm:py-12 bg-gold-500 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-dark flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-dark uppercase tracking-wide">
              Submit your matter confidentially using the form below.
            </h2>
            <button
              type="button"
              onClick={scrollToForm}
              className="px-6 py-3 bg-dark text-gold-500 font-semibold rounded-lg hover:bg-black transition-colors"
            >
              Go to Form
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyBanner;
