import React, { useEffect, useState } from 'react';
import { X, Sparkles, Zap, Bookmark, Download, Headphones, Rocket, Shield } from 'lucide-react';

const PURCHASE_URL = 'https://purchase.hexmos.com/freedevtools/subscription';

const ProBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const benefits = [
    {
      icon: Sparkles,
      title: 'Includes everything from Free Trial',
      description: 'All free features plus premium enhancements',
    },
    {
      icon: Shield,
      title: 'No ads',
      description: 'Zero distractions, faster pages',
    },
    {
      icon: Zap,
      title: 'Unlimited search',
      description: 'No rate limits or throttling',
    },
    {
      icon: Bookmark,
      title: 'Unlimited bookmarks',
      description: 'Save without limits',
    },
    {
      icon: Download,
      title: 'Unlimited downloads',
      description: 'No daily caps',
    },
    {
      icon: Headphones,
      title: 'Priority support & feature requests',
      description: 'Get help when you need it',
    },
    {
      icon: Rocket,
      title: 'Early access to new tools and features',
      description: 'Be the first to try new capabilities',
    },
  ];

  const handleBuyNow = () => {
    window.location.href = PURCHASE_URL;
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      // Remove query params and hash
      const url = new URL(window.location.href);
      url.searchParams.delete('buy');
      url.hash = '';
      window.history.replaceState({}, '', url.toString());
      
      // Hide the container
      const container = document.getElementById('pro-banner-container');
      if (container) {
        container.style.display = 'none';
      }
    }, 200);
  };

  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}
      style={{ zIndex: 9999 }}
    >
      <div
        className={`bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-3xl transform transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-2xl p-6 text-white">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="pr-12">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="h-8 w-8" />
              <h2 className="text-3xl font-bold">Upgrade to Free DevTools Pro</h2>
            </div>
            <p className="text-blue-100 text-lg">
              Unlock unlimited access and premium features
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleBuyNow}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span className="flex items-center justify-center gap-2">
                <Sparkles className="h-5 w-5" />
                Upgrade to Pro Now
              </span>
            </button>
            <button
              onClick={handleClose}
              className="px-6 py-4 text-slate-700 dark:text-slate-300 font-medium rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProBanner;

