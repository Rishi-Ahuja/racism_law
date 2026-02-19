import React from 'react';

const PrivacyPage = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-dark">
      <main className="max-w-2xl mx-auto py-16 px-4 sm:px-6">
        <h1 className="text-2xl font-semibold text-gold-500 mb-8">Privacy Policy</h1>
        <div className="text-gray-300 space-y-4 text-sm leading-relaxed">
          <p>
            Information submitted through this website is used solely for the purpose of reviewing potential matters.
          </p>
          <p>
            Submissions are reviewed internally by members of our legal network. We do not sell, share, or distribute personal information to third parties.
          </p>
          <p>
            Submission of information does not create a solicitor-client relationship.
          </p>
        </div>
        <button
          type="button"
          onClick={onBack}
          className="mt-10 text-sm text-gold-500 hover:text-gold-400 transition-colors bg-transparent border-0 cursor-pointer p-0"
        >
          ← Back to home
        </button>
      </main>
    </div>
  );
};

export default PrivacyPage;
