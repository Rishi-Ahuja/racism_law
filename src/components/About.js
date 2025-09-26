import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Heart, Shield, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Scale className="w-8 h-8" />,
      title: 'Justice',
      description: 'We fight for fair treatment and equal rights for all.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Compassion',
      description: 'We understand the trauma and provide emotional support.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Accountability',
      description: 'We hold perpetrators responsible for their actions.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Dignity',
      description: 'We treat every client with respect and understanding.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-secondary via-neutral to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold text-text mb-8 gradient-text"
            >
              15+ Years of Fighting Racism and Discrimination
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4 text-lg text-gray-700"
            >
              <p>
                For over 15 years, we have been at the forefront of fighting racism and discrimination in Canada. Our legal team has successfully represented hundreds of clients who have faced racial discrimination in various forms.
              </p>
              <p>
                We combine deep knowledge of human rights law with a compassionate understanding of the trauma that racism causes. We believe that every person deserves to be treated with dignity and respect, regardless of their race, ethnicity, religion, or national origin.
              </p>
              <p>
                When these fundamental rights are violated, we are here to restore justice and ensure that those responsible are held accountable.
              </p>
            </motion.div>
          </div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl card-hover border border-white/20"
              >
                <div className="text-primary mb-6 text-4xl">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-text mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
