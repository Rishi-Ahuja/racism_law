import React from 'react';
import { useReveal } from '../hooks/useReveal';

const CTA = () => {
  const ref = useReveal();

  return (
    <section className="section-padding bg-white relative overflow-hidden" aria-label="Mission Statement">
      <div className="container-custom">
        <div ref={ref} className="reveal text-center max-w-4xl mx-auto">
          <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold italic text-dark leading-relaxed mb-6">
            "Our mission is to dismantle systemic racism and promote inclusivity by providing expert legal guidance, representation, and education."
          </blockquote>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold">
            — Racism Lawyer Toronto
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
