import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const INSTITUTION_TYPES = [
  'Workplace',
  'School / University',
  'Government Body',
  'Healthcare Institution',
  'Police / Law Enforcement',
  'Corporate Entity',
  'Other',
];

const FORMSPREE_ID = process.env.REACT_APP_FORMSPREE_ID || 'mpqjlbgn';

const IntakeForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cityProvince: '',
    institutionName: '',
    institutionType: '',
    datesOfIncident: '',
    description: '',
    filedComplaints: '',
    ongoingProceedings: '',
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Please confirm that you understand and consent before submitting.');
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          cityProvince: '',
          institutionName: '',
          institutionType: '',
          datesOfIncident: '',
          description: '',
          filedComplaints: '',
          ongoingProceedings: '',
          consent: false,
        });
      } else {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Submission failed');
      }
    } catch (err) {
      console.error(err);
      alert(err.message || 'There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 page-bg">
        <div className="max-w-xl mx-auto text-center animate-fade-in rounded-xl border border-white/10 bg-white/[0.03] p-10 sm:p-12">
          <CheckCircle className="w-16 h-16 text-gold-500 mx-auto mb-6" aria-hidden />
          <h2 className="text-2xl font-semibold text-gray-100 mb-4">Thank you for submitting</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            We have received your information and will review it confidentially.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            We deal with a high volume of inquiries. We will get back to you if your matter aligns with our mandate. We appreciate your patience.
          </p>
        </div>
      </section>
    );
  }

  const inputClass = 'w-full px-4 py-3 rounded-lg bg-white/[0.06] border border-white/10 text-gray-200 placeholder-gray-500 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/30 transition-colors';
  const labelClass = 'block text-sm font-medium text-gray-300 mb-2';

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 page-bg">
      <div className="max-w-2xl mx-auto rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-100 mb-2">
          Confidential Case Submission
        </h2>
        <p className="text-gray-400 text-sm mb-8">
          Your voice matters. Please provide as much detail as you feel comfortable sharing.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Contact Information
            </h3>
            <div className="space-y-5">
              <div>
                <label htmlFor="fullName" className={labelClass}>
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone Number <span className="text-gray-500">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="cityProvince" className={labelClass}>
                  City / Province <span className="text-red-400">*</span>
                </label>
                <input
                  id="cityProvince"
                  name="cityProvince"
                  type="text"
                  required
                  value={formData.cityProvince}
                  onChange={handleChange}
                  placeholder="e.g. Toronto, Ontario"
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Institution Information
            </h3>
            <div className="space-y-5">
              <div>
                <label htmlFor="institutionName" className={labelClass}>
                  Name of Institution <span className="text-red-400">*</span>
                </label>
                <input
                  id="institutionName"
                  name="institutionName"
                  type="text"
                  required
                  value={formData.institutionName}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="institutionType" className={labelClass}>
                  Type of Institution <span className="text-red-400">*</span>
                </label>
                <select
                  id="institutionType"
                  name="institutionType"
                  required
                  value={formData.institutionType}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none cursor-pointer`}
                  style={{ colorScheme: 'dark' }}
                >
                  <option value="">Select...</option>
                  {INSTITUTION_TYPES.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="datesOfIncident" className={labelClass}>
                  Date(s) of Incident <span className="text-gray-500">(optional)</span>
                </label>
                <input
                  id="datesOfIncident"
                  name="datesOfIncident"
                  type="text"
                  value={formData.datesOfIncident}
                  onChange={handleChange}
                  placeholder="e.g. March 2024 or approximate timeframe"
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Matter Details
            </h3>
            <div className="space-y-5">
              <div>
                <label htmlFor="description" className={labelClass}>
                  Brief Description of What Happened <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={8}
                  value={formData.description}
                  onChange={handleChange}
                  className={`${inputClass} min-h-[180px] resize-y`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Have you filed any internal or external complaints?
                </label>
                <div className="flex gap-6">
                  <label className="inline-flex items-center gap-2 cursor-pointer text-gray-300">
                    <input type="radio" name="filedComplaints" value="Yes" checked={formData.filedComplaints === 'Yes'} onChange={handleChange} className="focus:ring-gold-500 text-gold-500" />
                    <span>Yes</span>
                  </label>
                  <label className="inline-flex items-center gap-2 cursor-pointer text-gray-300">
                    <input type="radio" name="filedComplaints" value="No" checked={formData.filedComplaints === 'No'} onChange={handleChange} className="focus:ring-gold-500 text-gold-500" />
                    <span>No</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Are there ongoing legal proceedings related to this matter?
                </label>
                <div className="flex gap-6">
                  <label className="inline-flex items-center gap-2 cursor-pointer text-gray-300">
                    <input type="radio" name="ongoingProceedings" value="Yes" checked={formData.ongoingProceedings === 'Yes'} onChange={handleChange} className="focus:ring-gold-500 text-gold-500" />
                    <span>Yes</span>
                  </label>
                  <label className="inline-flex items-center gap-2 cursor-pointer text-gray-300">
                    <input type="radio" name="ongoingProceedings" value="No" checked={formData.ongoingProceedings === 'No'} onChange={handleChange} className="focus:ring-gold-500 text-gold-500" />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 rounded border-white/30 text-gold-500 focus:ring-gold-500 bg-white/[0.06] border border-white/10"
              />
              <span className="text-sm text-gray-400">
                I understand that submitting this form does not create a solicitor-client relationship. I consent to being contacted if my matter aligns with your mandate. <span className="text-red-400">*</span>
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-4 bg-gold-500 text-dark font-medium rounded-lg hover:bg-gold-400 transition-all duration-200 hover-scale focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-dark disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit for Confidential Review'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default IntakeForm;
