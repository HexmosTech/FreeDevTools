import { Bookmark, Check, Clock, Download, Flame, Headphones, Rocket, Shield, X, Zap } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const PURCHASE_URL = 'https://purchase.hexmos.com/freedevtools/subscription';

const ProBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const benefits = [
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
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      onClick={handleClose}
      style={{ zIndex: 9999 }}
    >
      <div
        className={`relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-3xl transform transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 z-10"
          aria-label="Close"
        >
          <X className="h-5 w-5 text-slate-700 dark:text-slate-300" />
        </button>

        {/* Content */}
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Left Column - Promotional Content */}
            <div className="p-8 flex flex-col">
              {/* Limited Time Offer Badge */}
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full mb-3 w-fit"
                style={{
                  backgroundColor: '#000000',
                  color: '#ffffff'
                }}
              >
                <Flame className="h-3.5 w-3.5" style={{ color: '#f97316' }} />
                <span className="text-xs font-semibold">LIMITED TIME OFFER</span>
              </div>

              {/* Main Offer Text */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-tight">
                Power up FreeDevTools — zero ads, zero limits, all features
              </h3>

              {/* Pricing */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2.5 mb-1.5">
                  <span className="text-slate-400 dark:text-slate-500 line-through text-base">$149</span>
                  <span className="text-4xl font-bold text-slate-900 dark:text-slate-100">$89</span>
                  <span className="text-base text-slate-700 dark:text-slate-300">lifetime</span>
                </div>

              </div>

              {/* Urgency Bar */}
              <div
                className="px-3 py-1 pt-2 rounded-xl mb-4"
                style={{
                  backgroundColor: '#FFFFE6',
                  borderWidth: '1px',
                  borderColor: '#d4cb24'
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 flex-shrink-0" style={{ color: '#d4cb24' }} />
                    <span className="text-xs font-semibold" style={{ color: '#d4cb24' }}>Limited Offer</span>
                  </div>
                  <span className="text-xs font-semibold" style={{ color: '#d4cb24' }}>43/1000 left</span>
                </div>
                <div
                  className="w-full rounded-full overflow-hidden mb-2"
                  style={{
                    height: '8px',
                    backgroundColor: '#F2F2DC'
                  }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${((1000 - 43) / 1000) * 100}%`,
                      backgroundColor: '#d4cb24'
                    }}
                  />
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleBuyNow}
                className="w-full font-semibold py-3 px-4 rounded-lg transition-all duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 mb-4"
                style={{
                  backgroundColor: '#1e293b',
                  color: '#d4cb24'
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  <Flame className="h-4 w-4" style={{ color: '#d4cb24' }} />
                  Claim Deal - $89
                </span>
              </button>

              {/* Guarantees */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <Check className="h-3.5 w-3.5 text-slate-900 dark:text-slate-100 flex-shrink-0" />
                  <span>Instant Access</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <Check className="h-3.5 w-3.5 text-slate-900 dark:text-slate-100 flex-shrink-0" />
                  <span>Lifetime Updates</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <Check className="h-3.5 w-3.5 text-slate-900 dark:text-slate-100 flex-shrink-0" />
                  <span>Money Back</span>
                </div>
              </div>
            </div>

            {/* Right Column - Benefits */}
            <div className="p-8 flex flex-col bg-slate-100 dark:bg-slate-900 rounded-lg ">
              <div className="space-y-2 flex-1 mt-8">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-2 p-2"
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-7 h-7 rounded-md bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                          <IconComponent className="h-3.5 w-3.5 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 mb-0.5">
                          {benefit.title}
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProBanner;

