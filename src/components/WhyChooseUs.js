import React from 'react';
import {
  Briefcase,
  MessageCircle,
  Award,
  Hourglass,
  Key,
  Heart
} from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    { icon: <Briefcase className="w-12 h-12" />, title: 'Experienced Attorneys' },
    { icon: <MessageCircle className="w-12 h-12" />, title: 'Customer Relations' },
    { icon: <Award className="w-12 h-12" />, title: 'Professional Approach' },
    { icon: <Hourglass className="w-12 h-12" />, title: 'Timely Service' },
    { icon: <Key className="w-12 h-12" />, title: 'Successful Cases' },
    { icon: <Heart className="w-12 h-12" />, title: 'Customer Satisfaction' },
  ];

  return (
    <section className="section-padding page-bg relative overflow-hidden" aria-label="Why Choose Us">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-12 text-center">
          Why Choose Racism Lawyer Toronto
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="text-center group">
              <div className="flex justify-center mb-4 text-gold-500 group-hover:text-gold-400 transition-colors duration-200">
                {feature.icon}
              </div>
              <h3 className="text-sm md:text-base lg:text-lg font-semibold text-gray-300">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
