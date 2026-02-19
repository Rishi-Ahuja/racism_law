import React from 'react';
import { useReveal } from '../hooks/useReveal';

const About = () => {
  const ref = useReveal();

  return (
    <section id="about" className="section-padding page-bg relative overflow-hidden" aria-label="About Our Law Firm">
      <div className="container-custom">
        <h2 className="sr-only">About Racism Lawyer Toronto</h2>
        <div
          ref={ref}
          className="reveal max-w-3xl mx-auto"
        >
          <div className="mb-8">
            <img
              src="/logo.png"
              alt="Racism Lawyer Toronto Logo"
              className="w-24 h-24 sm:w-32 sm:h-32 object-contain mb-6"
              loading="lazy"
            />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gold-500 tracking-wider uppercase">
              Racism Lawyer Toronto
            </h2>
          </div>
          <div className="space-y-4 text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
            <p>
              We offer exceptional legal representation, employing an innovative and resolute advocacy strategy to amplify our clients' voices and garner respect. Our team is comprised of diverse individuals, reflecting our multifaceted approaches to addressing each individual's case.
            </p>
            <p>
              Our track record includes cases related to combating discrimination and upholding human rights, presented before both the Ontario Superior Court and the Human Rights Tribunal of Ontario.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
