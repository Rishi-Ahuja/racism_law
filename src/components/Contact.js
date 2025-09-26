import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    caseDetails: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create email content
      const emailContent = `
New Contact Form Submission

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Case Details:
${formData.caseDetails}

Submitted on: ${new Date().toLocaleString()}
      `;

      // Use mailto to send email
      const mailtoLink = `mailto:rishisinghlaw@outlook.com?subject=New Contact Form Submission - ${formData.name}&body=${encodeURIComponent(emailContent)}`;
      
      // Open email client
      window.open(mailtoLink, '_blank');
      
      // Simulate successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          caseDetails: ''
        });
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Contact',
      details: 'Use the form below to reach us',
      subtitle: 'We respond within 24 hours'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Consultation',
      details: 'Free initial consultation',
      subtitle: 'No obligation, confidential'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Service Area',
      details: 'Toronto & Canada',
      subtitle: 'Nationwide representation'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Response Time',
      details: 'Quick response guaranteed',
      subtitle: 'Urgent cases prioritized'
    }
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding bg-neutral">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-text mb-4">
                Thank You for Your Message
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We have received your consultation request. Our legal team will review your case 
                and contact you within 24 hours for your free, confidential consultation.
              </p>
              <p className="text-sm text-gray-500 mb-4">
                All communications are protected by solicitor-client privilege.
              </p>
              <p className="text-xs text-gray-400">
                If your email client didn't open automatically, please send your message to: rishisinghlaw@outlook.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-neutral via-white to-neutral relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-60 h-60 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-text mb-8 gradient-text">
            Free Confidential Consultation
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're here to listen. All consultations are private and protected by solicitor-client privilege.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-10 border border-white/20"
          >
            <h3 className="text-3xl font-bold text-text mb-8 gradient-text">
              Get Your Free Consultation
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  placeholder="(416) 555-0123"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="caseDetails" className="block text-sm font-medium text-text mb-2">
                  Case Details *
                </label>
                <textarea
                  id="caseDetails"
                  name="caseDetails"
                  value={formData.caseDetails}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                  placeholder="Please describe what happened, when it occurred, and how it has affected you. Include any relevant details about witnesses, documentation, or previous complaints."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white text-xl py-5 rounded-full font-bold shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Consultation Request'}
              </motion.button>
            </form>

            <p className="text-sm text-gray-500 mt-4">
              * All fields are required. Your information is confidential and protected by attorney-client privilege.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-text mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="text-primary mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-text">
                        {info.title}
                      </h4>
                      <p className="text-lg text-gray-700">
                        {info.details}
                      </p>
                      <p className="text-sm text-gray-500">
                        {info.subtitle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-primary text-white rounded-lg p-8">
              <h4 className="text-xl font-semibold mb-4">
                What to Bring to Your Consultation
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Any documentation related to the discrimination</li>
                <li>• Timeline of events if possible</li>
                <li>• Witness information</li>
                <li>• Employment records (if workplace discrimination)</li>
                <li>• Medical records (if health has been affected)</li>
              </ul>
            </div>

            <div className="bg-secondary rounded-lg p-6">
              <h4 className="text-lg font-semibold text-text mb-3">
                Languages Spoken
              </h4>
              <p className="text-gray-700">
                We provide services in English, French, Spanish, Mandarin, and others. 
                Professional interpreters are available when needed.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
