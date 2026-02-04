import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden" aria-label="Mission Statement">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold italic text-dark leading-relaxed mb-6">
            "Our mission is to dismantle systemic racism and promote inclusivity by providing expert legal guidance, representation, and education."
          </blockquote>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold">
            — Racism Lawyer Toronto
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
