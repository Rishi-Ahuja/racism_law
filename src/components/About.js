import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { Scale } from 'lucide-react';

const About = () => {
  const refLeft = useReveal();
  const refRight = useReveal();

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden" aria-label="About Our Law Firm">
      <div className="container-custom">
        <h2 className="sr-only">About Racism Lawyer Toronto</h2>
        <div className="grid lg:grid-cols-2 gap-0">
          <div
            ref={refLeft}
            className="reveal-x-left bg-dark p-8 sm:p-12 lg:p-16 flex flex-col justify-center"
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
            <div className="space-y-4 text-white text-sm sm:text-base lg:text-lg leading-relaxed">
              <p>
                We offer exceptional legal representation, employing an innovative and resolute advocacy strategy to amplify our clients' voices and garner respect. Our team is comprised of diverse individuals, reflecting our multifaceted approaches to addressing each individual's case.
              </p>
              <p>
                Our track record includes cases related to combating discrimination and upholding human rights, presented before both the Ontario Superior Court and the Human Rights Tribunal of Ontario.
              </p>
            </div>
          </div>

          <div
            ref={refRight}
            className="reveal-x-right relative h-64 sm:h-80 lg:h-full min-h-[400px] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="blur-3xl opacity-30">
                <Scale className="w-96 h-96 text-gold-500/30" strokeWidth={0.5} />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-transparent to-dark/60" />
            <div className="absolute top-10 right-10 w-32 h-32 border-2 border-gold-500/20 rounded-full blur-xl" aria-hidden />
            <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-gold-500/20 rounded-full blur-xl" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
