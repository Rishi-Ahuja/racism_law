import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      question: 'How much does it cost to hire your firm?',
      answer: 'Most of our cases are handled on a contingency fee basis, meaning you pay no legal fees unless we win your case. We offer free initial consultations to evaluate your situation and explain all costs upfront.'
    },
    {
      question: 'How long do discrimination cases take?',
      answer: 'The timeline varies depending on the complexity of your case and whether it settles or goes to trial. Simple cases may resolve in months, while complex litigation can take longer. We keep you informed throughout the process and work efficiently to resolve your case as quickly as possible.'
    },
    {
      question: 'What if I\'m afraid of retaliation?',
      answer: 'Retaliation for filing a discrimination complaint is illegal. If retaliation occurs, it becomes an additional part of your case with additional damages available. We take retaliation very seriously and will fight to protect you from any form of reprisal.'
    },
    {
      question: 'Can I file a complaint if the discrimination happened a while ago?',
      answer: 'There are time limits for filing discrimination complaints, but these vary depending on your situation. Generally, human rights complaints must be filed within one year, but some circumstances may extend this deadline. Contact us immediately to discuss your specific circumstances.'
    },
    {
      question: 'What if I don\'t have witnesses or documentation?',
      answer: 'While evidence strengthens your case, lack of witnesses or documentation doesn\'t necessarily mean you don\'t have a valid claim. We work with what evidence is available and help gather additional support for your case. We also work with experts who can help establish patterns of discrimination.'
    },
    {
      question: 'Do you handle cases outside of Toronto?',
      answer: 'Yes, we handle discrimination cases across Canada. While our main office is in Toronto, we have experience with federal human rights complaints and can represent clients throughout Canada. We also work with local counsel when necessary.'
    },
    {
      question: 'What should I do if I\'m currently experiencing discrimination?',
      answer: 'Document everything immediately - keep detailed records of discriminatory incidents, including dates, times, witnesses, and exactly what was said or done. Report internally if safe to do so, preserve all evidence, and contact us as soon as possible to protect your rights.'
    },
    {
      question: 'How do I know if I have a strong case?',
      answer: 'Every case is unique, and the strength depends on many factors including the type of discrimination, available evidence, witnesses, and timing. During your free consultation, we will evaluate your case and explain your legal options. We only take cases we believe have merit.'
    }
  ];

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-neutral">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about discrimination cases and our legal services.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-text pr-4">
                    {faq.question}
                  </h3>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ height: expandedFAQ === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-primary text-white rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Our legal team is here to answer all your questions during your free, confidential consultation.
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

export default FAQ;
