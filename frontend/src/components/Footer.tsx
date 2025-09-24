import React from 'react';
import GitHubButton from 'react-github-btn';

const LeftColumn: React.FC = () => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex flex-col gap-4 md:gap-8">
        <a
          href="https://hexmos.com/livereview/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 "
        >
          <img
            src="/freedevtools/svg_icons/productivity/livereview.svg"
            alt="LiveReview"
            className="w-5 h-5"
          />
          <p className="hover:text-blue-600 dark:hover:text-blue-400 hover:font-bold transition-all duration-200">LiveReview</p>
        </a>
        <a
          href="https://journal.hexmos.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 "
        >
          <img
            src="/freedevtools/svg_icons/productivity/hexmos.svg"
            alt="Since 2022"
            className="w-5 h-5"
          />
          <p className="hover:text-blue-600 dark:hover:text-blue-400 hover:font-bold transition-all duration-200">Blog - Since 2022</p>
        </a>
        <a
          href="/freedevtools/termsofuse"
          className="inline-flex items-center gap-2 "
        >
          <img
            src="/freedevtools/svg_icons/terms/policy-term-and-condition-term.svg"
            alt="Terms of Use"
            className="w-5 h-5"
          />
          <p className="hover:text-blue-600 dark:hover:text-blue-400 hover:font-bold transition-all duration-200">Terms of Use</p>
        </a>
      </div>
    </div>
  );
};

const RightColumn: React.FC = () => {
  return (
    <div className="flex flex-col items-end space-y-4">

      {/* Submit Issue Button */}
      <a
        href="https://github.com/HexmosTech/FreeDevTools/issues"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-md transition-colors duration-200"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        Submit an Issue
      </a>

      {/* GitHub Star Button */}
      <GitHubButton
        href="https://github.com/HexmosTech/FreeDevTools"
        data-color-scheme="no-preference: light; light: light; dark: dark;"
        data-size="large"
        data-show-count="true"
        aria-label="Star HexmosTech/FreeDevTools on GitHub"
      >
        Support with a Star
      </GitHubButton>

      {/* Follow us section */}
      <div className="flex items-center space-x-5">
        <p>Follow us on:</p>
        <a
          href="https://x.com/HexmosTech"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200"
          aria-label="X (Twitter)"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/company/hexmos"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>

      {/* Product Hunt Badge */}
      <a
        href="https://www.producthunt.com/products/free-devtools/reviews?utm_source=badge-product_review&utm_medium=badge&utm_source=badge-free&#0045;devtools"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1109256&theme=light"
          alt="Free&#0032;DevTools - 50&#0044;000&#0043;&#0032;Free&#0032;Dev&#0032;Resources&#0032;&#0045;&#0032;No&#0032;Login&#0032;Required | Product Hunt"
          style={{ width: 180, height: 54 }}
        />
      </a>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">

          <LeftColumn />
          <RightColumn />
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
          <p className="text-center text-slate-600 dark:text-slate-400">
            © 2025 Free DevTools. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
