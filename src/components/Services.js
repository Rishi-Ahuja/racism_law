import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Home, 
  GraduationCap, 
  Store, 
  Shield, 
  Scale,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const Services = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const services = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Workplace Discrimination',
      shortDescription: 'Fighting racism in hiring, promotion, and workplace harassment.',
      fullDescription: 'We handle all forms of workplace racial discrimination including hiring discrimination, promotion and career advancement issues, workplace harassment, wrongful termination, and pay discrimination. Our team fights cases where employees are passed over for promotions, face racist comments or hostile work environments, or are fired because of their race.',
      details: [
        'Hiring Discrimination',
        'Promotion and Career Advancement',
        'Workplace Harassment',
        'Wrongful Termination',
        'Pay Discrimination'
      ]
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Housing Discrimination',
      shortDescription: 'Ensuring equal access to housing and fighting rental discrimination.',
      fullDescription: 'Everyone deserves equal access to housing. We fight against racist practices in rental discrimination, real estate discrimination, mortgage and lending discrimination, and housing services. This includes discriminatory screening processes, steering clients away from neighborhoods, and different lending terms based on race.',
      details: [
        'Rental Discrimination',
        'Real Estate Discrimination',
        'Mortgage and Lending Discrimination',
        'Housing Services'
      ]
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Educational Discrimination',
      shortDescription: 'Protecting students from racism in schools and universities.',
      fullDescription: 'Students have the right to learn in an environment free from racial discrimination. We handle school discipline issues, academic opportunities, harassment by students or staff, and university and college discrimination. This includes challenging disproportionate disciplinary actions and ensuring equal access to educational programs.',
      details: [
        'School Discipline',
        'Academic Opportunities',
        'Harassment by Students or Staff',
        'University and College Discrimination'
      ]
    },
    {
      icon: <Store className="w-8 h-8" />,
      title: 'Public Accommodation',
      shortDescription: 'Fighting discrimination in retail, services, and public spaces.',
      fullDescription: 'When stores, restaurants, or service providers treat customers differently based on race, we fight back. This includes retail and service discrimination, transportation discrimination, entertainment and recreation issues, and healthcare discrimination. We ensure equal treatment at all public accommodations.',
      details: [
        'Retail and Service Discrimination',
        'Transportation Discrimination',
        'Entertainment and Recreation',
        'Healthcare Discrimination'
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Police Misconduct',
      shortDescription: 'Holding law enforcement accountable for racial profiling and excessive force.',
      fullDescription: 'Law enforcement officers must treat all citizens equally. We hold police accountable for racial profiling, excessive force, false arrest and imprisonment, and constitutional violations. We ensure that all citizens receive equal protection under the law and that their constitutional rights are respected.',
      details: [
        'Racial Profiling',
        'Excessive Force',
        'False Arrest and Imprisonment',
        'Constitutional Violations'
      ]
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: 'Human Rights Claims',
      shortDescription: 'Filing complaints with human rights commissions and tribunals.',
      fullDescription: 'We file complaints with the Canadian Human Rights Commission for discrimination in federally regulated areas, pursue claims through provincial human rights systems, and use the Canadian Charter of Rights and Freedoms to challenge discriminatory government actions or laws.',
      details: [
        'Federal Human Rights Complaints',
        'Provincial Human Rights Tribunals',
        'Charter of Rights Challenges'
      ]
    }
  ];

  const toggleExpanded = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-neutral via-white to-neutral relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-accent rounded-full blur-3xl"></div>
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
            How We Can Help You
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our experienced legal team specializes in all forms of racism and discrimination cases across Canada.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -10 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 card-hover border border-white/20"
            >
              <div className="text-primary mb-6 text-5xl">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-text mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                {service.shortDescription}
              </p>

              <motion.div
                initial={false}
                animate={{ height: expandedCard === index ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="space-y-4">
                  <p className="text-gray-700">
                    {service.fullDescription}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-text mb-2">We handle:</h4>
                    <ul className="space-y-1">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              <button
                onClick={() => toggleExpanded(index)}
                className="mt-4 text-primary hover:text-primary/80 transition-colors duration-300 flex items-center space-x-2"
              >
                <span>
                  {expandedCard === index ? 'Show Less' : 'Learn More'}
                </span>
                {expandedCard === index ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
