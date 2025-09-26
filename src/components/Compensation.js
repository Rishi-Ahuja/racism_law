import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Heart, Shield, FileText, RotateCcw, Scale } from 'lucide-react';

const Compensation = () => {
  const compensationTypes = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Lost Wages and Benefits',
      description: 'Compensation for income lost due to discriminatory firing, failure to hire, or denial of promotions.',
      details: 'This includes back pay, front pay, and all benefits you would have received if not for the discrimination.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Pain and Suffering',
      description: 'Compensation for the emotional distress, humiliation, and psychological harm caused by racism.',
      details: 'We work with mental health professionals to document the full impact of discrimination on your well-being.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Punitive Damages',
      description: 'Additional damages designed to punish particularly egregious racist behavior and deter others.',
      details: 'These damages are awarded when the discrimination was particularly malicious or reckless.'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Legal Costs',
      description: 'In many cases, the other side can be ordered to pay your legal fees and expenses.',
      details: 'This ensures that justice is accessible regardless of your financial situation.'
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: 'Reinstatement',
      description: 'In employment cases, getting your job back with full benefits and seniority.',
      details: 'We fight to restore you to the position you would have had if not for the discrimination.'
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: 'Policy Changes',
      description: 'Requiring organizations to change their discriminatory policies and practices.',
      details: 'We work to ensure that the discrimination doesn\'t happen to others in the future.'
    }
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Compensation Available
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Victims of racism may be entitled to various forms of compensation and justice.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {compensationTypes.map((compensation, index) => (
            <motion.div
              key={compensation.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-6 card-hover"
            >
              <div className="text-primary mb-4">
                {compensation.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-text mb-3">
                {compensation.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {compensation.description}
              </p>
              
              <p className="text-sm text-gray-500">
                {compensation.details}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-primary text-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Don't Let Time Limits Prevent Justice
            </h3>
            <p className="text-lg mb-6 opacity-90">
              The sooner you contact us, the better we can protect your rights and preserve evidence. 
              Most discrimination claims have strict time limits.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-secondary bg-accent hover:bg-accent/90 text-lg px-8 py-4"
            >
              Get Your Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Compensation;
