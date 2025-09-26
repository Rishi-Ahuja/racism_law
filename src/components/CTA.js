import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Clock } from 'lucide-react';

const CTA = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Don't Let Racism Go Unchallenged
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Contact us today for a free consultation. Your rights matter. Your voice matters. 
            Let us fight for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="btn-secondary bg-accent hover:bg-accent/90 text-lg px-8 py-4 flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Get Free Consultation</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
            >
              Contact Us Today
            </motion.button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm opacity-80">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Available 24/7 for emergencies</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white rounded-full"></div>
            <div>Confidential & Protected by Attorney-Client Privilege</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
