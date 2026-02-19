import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { FileText, Clock, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';

const Rights = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const refHead = useReveal();

  const rightsInfo = [
    { title: 'Canadian Human Rights Act', description: 'Protects against discrimination in federally regulated areas like banks, airlines, and telecommunications.', icon: <FileText className="w-6 h-6" /> },
    { title: 'Provincial Human Rights Codes', description: 'Each province has comprehensive human rights legislation prohibiting racial discrimination.', icon: <FileText className="w-6 h-6" /> },
    { title: 'Charter of Rights and Freedoms', description: 'Provides constitutional protection against government discrimination.', icon: <FileText className="w-6 h-6" /> },
  ];

  const discriminationTypes = [
    'Direct Discrimination: Treating someone differently because of their race, color, ancestry, place of origin, or ethnic background.',
    'Systemic Discrimination: Policies or practices that appear neutral but have a disproportionate impact on racial minorities.',
    'Harassment: Unwelcome comments, jokes, or conduct related to race that creates a hostile environment.',
    'Retaliation: Punishment for complaining about racism or supporting others who have complained.'
  ];

  const timeLimits = [
    'Human Rights Complaints: Generally must be filed within one year of the discriminatory act.',
    'Wrongful Dismissal Claims: Usually must be commenced within two years.',
    'Charter Challenges: Various time limits depending on the specific circumstances.'
  ];

  const toggleExpanded = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section id="rights" className="section-padding bg-white">
      <div className="container-custom">
        <div ref={refHead} className="reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Know Your Rights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding your legal protections is the first step toward justice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {rightsInfo.map((r) => (
            <div key={r.title} className="bg-gray-100 p-6 rounded-lg text-center card-hover hover-scale transition-transform duration-200">
              <div className="text-gold-500 mb-4 flex justify-center">{r.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{r.title}</h3>
              <p className="text-gray-700">{r.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-gray-100 rounded-lg p-6">
            <button
              onClick={() => toggleExpanded('discrimination')}
              className="w-full flex items-center justify-between text-left"
            >
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                <AlertTriangle className="w-6 h-6 text-gold-500 mr-3" />
                What Constitutes Discrimination
              </h3>
              {expandedSection === 'discrimination' ? <ChevronUp className="w-6 h-6 text-gold-500" /> : <ChevronDown className="w-6 h-6 text-gold-500" />}
            </button>
            <div className={`accordion-grid ${expandedSection === 'discrimination' ? 'open' : ''}`}>
              <div className="accordion-inner">
                <div className="mt-6 space-y-3">
                  {discriminationTypes.map((type, index) => (
                    <div key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">{type}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-6">
            <button
              onClick={() => toggleExpanded('timeLimits')}
              className="w-full flex items-center justify-between text-left"
            >
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                <Clock className="w-6 h-6 text-gold-500 mr-3" />
                Time Limits for Filing Claims
              </h3>
              {expandedSection === 'timeLimits' ? <ChevronUp className="w-6 h-6 text-gold-500" /> : <ChevronDown className="w-6 h-6 text-gold-500" />}
            </button>
            <div className={`accordion-grid ${expandedSection === 'timeLimits' ? 'open' : ''}`}>
              <div className="accordion-inner">
                <div className="mt-6 space-y-3">
                  {timeLimits.map((limit, index) => (
                    <div key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">{limit}</p>
                    </div>
                  ))}
                  <div className="mt-4 p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                    <p className="text-gray-900 font-semibold">
                      ⚠️ Act fast – most human rights complaints must be filed within 1 year.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rights;
