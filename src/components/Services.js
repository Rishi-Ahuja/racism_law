import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop',
      title: 'Race & Colour Discrimination',
      description: 'At our firm, we are dedicated to eradicating race and colour discrimination in all its forms. Our team of experienced legal professionals is equipped with the knowledge and passion necessary to champion the rights of individuals who have faced discrimination. We believe that everyone deserves equal protection.'
    },
    {
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop',
      title: 'Accent Discrimination Attorneys',
      description: 'At Racism Lawyer Toronto, our mission is to provide a strong legal voice for individuals who have experienced accent-based discrimination. We understand the complexities of these cases and are dedicated to ensuring that every client\'s story is heard and respected.'
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      title: 'Bullying & Online Bullying',
      description: 'Our company is committed to eradicating bullying and online harassment through legal action, education, and community engagement. We believe that everyone has the right to live free from fear and mistreatment, both online and offline. We promote a culture of respect and empathy.'
    }
  ];

  const refBtn = useReveal();

  return (
    <section id="services" className="section-padding page-bg relative overflow-hidden" aria-label="Legal Services">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-12 text-center">
          Our Legal Services
        </h2>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-gold-500/30 transition-all duration-200"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} legal services in Toronto`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200 opacity-90"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-200 mb-4 group-hover:text-gold-500 transition-colors duration-200">
                  {service.title} - Toronto Lawyer
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div ref={refBtn} className="reveal text-center">
          <button
            onClick={() => scrollToSection('#contact')}
            className="group inline-flex items-center space-x-3 bg-gold-500 text-dark px-8 py-4 rounded-lg font-bold text-lg lg:text-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            <span>SEE ALL SERVICES</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
