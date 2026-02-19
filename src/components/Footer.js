import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = ({ onPrivacyClick }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-white/10 bg-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="space-y-1">
            <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
              Submission of this form does not create a solicitor-client relationship. We review matters selectively. All information is treated confidentially.
            </p>
            {onPrivacyClick && (
              <button
                type="button"
                onClick={onPrivacyClick}
                className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
              >
                Privacy Policy
              </button>
            )}
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <span className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Racism Lawyer Toronto
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full border border-white/15 text-gray-400 hover:text-gray-200 hover:border-white/25 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
