import { Bookmark, Clock, Download, Flame, Headphones, Rocket, Shield, X, Zap } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';

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

  const handleClose = useCallback(() => {
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
  }, []);

  useEffect(() => {
    // Handle Escape key press
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [handleClose]);

  return (
    <div
      className={`fixed inset-0  bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      onClick={handleClose}
      style={{ zIndex: 9999 }}
    >
      <div
        className={`relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-5xl transform transition-all duration-300 overflow-hidden ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* First Row - Limited Offer and Close Button */}
        <div className="flex flex-col lg:flex-row">
          {/* Left Column - Limited Time Offer Badge */}
          <div className="pt-4 pl-8 pb-0 pr-5 flex items-center flex-[3]">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                backgroundColor: '#000000',
                color: '#ffffff'
              }}
            >
              <Flame className="h-4 w-4" style={{ color: '#f97316' }} />
              <span className="text-xs font-medium">LIMITED TIME OFFER</span>
            </div>
          </div>

          {/* Right Column - Close Button */}
          <div className="pt-4  pr-4 pb-0 flex items-center justify-end bg-slate-100 dark:bg-slate-900 rounded-tr-2xl flex-[2]">
            <button
              onClick={handleClose}
              className="p-1 rounded-sm bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-600 shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
              aria-label="Close"
            >
              <X className="h-5 w-5 p-0.5 text-slate-700 dark:text-slate-300" />
            </button>
          </div>
        </div>

        {/* Second Row - Two Columns */}
        <div className="flex flex-col lg:flex-row">
          {/* Left Column - Promotional Content */}
          <div className="px-12 pt-12 pb-10 flex flex-col h-full flex-[3]">

            {/* Main Offer Text - More prominent with extra space, vertically centered */}
            <div className="mb-12 flex flex-col gap-2">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
                Power up FreeDevTools — zero ads, zero limits, all features
              </h3>
              <div className="flex items-baseline gap-5 mb-5">
                <span className="text-slate-400 dark:text-slate-500 line-through text-lg font-medium">$139</span>
                <span className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">$29</span>
                <span className="text-lg text-slate-600 dark:text-slate-400 font-medium">lifetime</span>
              </div>
            </div>
            <div>


              {/* Bottom Section - Pricing, Urgency, CTA */}
              <div className=" mb-12">
                {/* Urgency Bar */}
                <div
                  className="px-4 py-2.5 rounded-xl bg-yellow-50 mb-2"
                  style={{
                    borderWidth: '1px',
                    borderColor: '#d4cb24'
                  }}
                >
                  <div className="flex items-center justify-between mb-2 ">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 flex-shrink-0" style={{ color: '#d4cb24' }} />
                      <span className="text-sm font-semibold" style={{ color: '#d4cb24' }}>Limited Offer</span>
                    </div>
                    <span className="text-sm font-semibold" style={{ color: '#d4cb24' }}>43/1000 left</span>
                  </div>
                  <div
                    className="w-full rounded-full overflow-hidden"
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
                  className="w-full font-bold py-3 px-10 mb-10 rounded-xl transition-all duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  style={{
                    backgroundColor: '#1e293b',
                    color: '#d4cb24'
                  }}
                >
                  <span className="flex items-center justify-center gap-2.5 text-base">
                    <Flame className="h-5 w-5" style={{ color: '#d4cb24' }} />
                    Claim Deal - $29
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div className="pl-4 pr-8 pt-12 pb-6 flex flex-col bg-slate-100 dark:bg-slate-900 rounded-br-2xl flex-[2]">
            <div className="space-y-2 flex-1 ">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-2 py-2 pl-2 pr-0"
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
  );
};

export default ProBanner;

