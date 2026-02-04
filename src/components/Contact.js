import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { Phone, Mail, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const refLeft = useReveal();
  const refRight = useReveal();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          caseDetails: formData.message,
        }),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setIsSubmitting(false);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', phone: '', email: '', message: '' });
        }, 8000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      alert('There was an error submitting the form. Please contact us directly at rishisinghlaw@outlook.com for immediate assistance.');
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding bg-dark relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <div className="bg-dark border-2 border-gold-500 rounded-lg shadow-xl p-8">
              <CheckCircle className="w-16 h-16 text-gold-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">Thank You for Your Message</h2>
              <p className="text-lg text-gray-300 mb-6">
                We have received your consultation request. Our legal team will review your case and contact you within 24 hours for your free, confidential consultation.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" aria-hidden />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div
            ref={refLeft}
            className="reveal bg-dark/50 border border-gold-500/30 rounded-lg p-6 sm:p-8 lg:p-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 uppercase tracking-wider">
              Online Inquiry
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6" data-netlify="true" name="consultation-request">
              <input type="hidden" name="form-name" value="consultation-request" />
              <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Your Name" className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 border-2 border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors duration-200" />
              <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="Your E-mail" className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 border-2 border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors duration-200" />
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="Phone Number" className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 border-2 border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors duration-200" />
              <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6} placeholder="Your Message" className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 border-2 border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors duration-200 resize-none" />
              <button type="submit" disabled={isSubmitting} className="hover-scale w-full bg-white text-dark px-6 py-3 rounded-lg font-semibold hover:bg-gold-500 hover:text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-white">
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>

          <div
            ref={refRight}
            className="reveal bg-dark/50 border border-gold-500/30 rounded-lg p-6 sm:p-8 lg:p-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 uppercase tracking-wider">
              Contact Details
            </h2>
            <div className="space-y-6 mb-8">
              <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed">
                At <span className="text-gold-500 font-semibold">Racism Lawyer Toronto</span>, we stand firmly against all forms of discrimination and <span className="text-gold-500 font-semibold">racism</span>, advocating for a world where justice is blind to color and equality prevails for all. Our dedicated team of passionate legal professionals is committed to fighting racial injustices through the power of <span className="text-gold-500 font-semibold">law</span>.
              </p>
            </div>
            <div className="space-y-4 border-t border-gold-500/30 pt-6">
              <div className="flex items-center space-x-4">
                <div className="text-gold-500"><Phone className="w-5 h-5 sm:w-6 sm:h-6" /></div>
                <div>
                  <p className="text-white font-semibold">Tel:</p>
                  <a href="tel:+12895006616" className="text-gold-500 hover:text-gold-400 transition-colors duration-200">(289) 500-6616</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-gold-500"><Mail className="w-5 h-5 sm:w-6 sm:h-6" /></div>
                <div>
                  <p className="text-white font-semibold">Email:</p>
                  <a href="mailto:info@racismlawyertoronto.ca" className="text-gold-500 hover:text-gold-400 transition-colors duration-200">info@racismlawyertoronto.ca</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
