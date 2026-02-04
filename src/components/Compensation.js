import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { DollarSign, Heart, Shield, FileText, RotateCcw, Scale } from 'lucide-react';

const Compensation = () => {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const compensationTypes = [
    { icon: <DollarSign className="w-8 h-8" />, title: 'Lost Wages and Benefits', description: 'Compensation for income lost due to discriminatory firing, failure to hire, or denial of promotions.', details: 'This includes back pay, front pay, and all benefits you would have received if not for the discrimination.' },
    { icon: <Heart className="w-8 h-8" />, title: 'Pain and Suffering', description: 'Compensation for the emotional distress, humiliation, and psychological harm caused by racism.', details: 'We work with mental health professionals to document the full impact of discrimination on your well-being.' },
    { icon: <Shield className="w-8 h-8" />, title: 'Punitive Damages', description: 'Additional damages designed to punish particularly egregious racist behavior and deter others.', details: 'These damages are awarded when the discrimination was particularly malicious or reckless.' },
    { icon: <FileText className="w-8 h-8" />, title: 'Legal Costs', description: 'In many cases, the other side can be ordered to pay your legal fees and expenses.', details: 'This ensures that justice is accessible regardless of your financial situation.' },
    { icon: <RotateCcw className="w-8 h-8" />, title: 'Reinstatement', description: 'In employment cases, getting your job back with full benefits and seniority.', details: 'We fight to restore you to the position you would have had if not for the discrimination.' },
    { icon: <Scale className="w-8 h-8" />, title: 'Policy Changes', description: 'Requiring organizations to change their discriminatory policies and practices.', details: 'We work to ensure that the discrimination doesn\'t happen to others in the future.' },
  ];

  const refHead = useReveal();
  const refCta = useReveal();

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div ref={refHead} className="reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">Compensation Available</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Victims of racism may be entitled to various forms of compensation and justice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {compensationTypes.map((c) => (
            <div key={c.title} className="bg-white rounded-lg shadow-lg p-6 card-hover hover-scale transition-transform duration-200">
              <div className="text-primary mb-4">{c.icon}</div>
              <h3 className="text-xl font-semibold text-text mb-3">{c.title}</h3>
              <p className="text-gray-600 mb-4">{c.description}</p>
              <p className="text-sm text-gray-500">{c.details}</p>
            </div>
          ))}
        </div>

        <div ref={refCta} className="reveal mt-16 text-center">
          <div className="bg-primary text-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Don't Let Time Limits Prevent Justice</h3>
            <p className="text-lg mb-6 opacity-90">
              The sooner you contact us, the better we can protect your rights and preserve evidence. Most discrimination claims have strict time limits.
            </p>
            <button onClick={scrollToContact} className="hover-scale btn-secondary bg-accent hover:bg-accent/90 text-lg px-8 py-4">
              Get Your Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compensation;
