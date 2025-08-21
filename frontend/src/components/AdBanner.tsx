import React, { useEffect, useState } from "react";
import LiveReviewBrand from "./LiveReviewBrand";

// TypeScript interfaces
interface AdVariation {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  brandName: string;
  tagline: string;
  link?: string;
  backgroundColor: string;
  textColor: string;
}

interface AdBannerProps {
  className?: string;
}

// Advertisement variations with text content and styling
const adVariations: AdVariation[] = [
  {
    id: "variation-1",
    title: "Get Fast First-Pass",
    subtitle: "Code Review",
    description: "Secure & Affordable AI Code Reviewer",
    brandName: "LiveReview",
    tagline: "The AI reviewer that transforms both code quality and team performance",
    link: "https://hexmos.com/livereview/",
    backgroundColor: "bg-blue-100 dark:bg-blue-900/30",
    textColor: "text-gray-800 dark:text-gray-200"
  },
  {
    id: "variation-2",
    title: "Cut Code Review",
    subtitle: "Time in Half",
    description: "Secure & Affordable AI Code Reviewer",
    brandName: "LiveReview",
    tagline: "The AI reviewer that transforms both code quality and team performance",
    link: "https://hexmos.com/livereview/",
    backgroundColor: "bg-blue-100 dark:bg-blue-900/30",
    textColor: "text-gray-800 dark:text-gray-200"
  },
  {
    id: "variation-3",
    title: "Reduce Production",
    subtitle: "Outages",
    description: "Secure & Affordable AI Code Reviewer",
    brandName: "LiveReview",
    tagline: "The AI reviewer that transforms both code quality and team performance",
    link: "https://hexmos.com/livereview/",
    backgroundColor: "bg-blue-100 dark:bg-blue-900/30",
    textColor: "text-gray-800 dark:text-gray-200"
  },
  {
    id: "variation-4",
    title: "Catch Security Issues",
    subtitle: "Early On",
    description: "Secure & Affordable AI Code Reviewer",
    brandName: "LiveReview",
    tagline: "The AI reviewer that transforms both code quality and team performance",
    link: "https://hexmos.com/livereview/",
    backgroundColor: "bg-blue-100 dark:bg-blue-900/30",
    textColor: "text-gray-800 dark:text-gray-200"
  }
];

const AdBanner: React.FC<AdBannerProps> = () => {
  const [currentVariation, setCurrentVariation] = useState(0); // Default to first variation (index 0)

  useEffect(() => {
    // Get variation from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const variationParam = urlParams.get('variation');

    if (variationParam) {
      const variationNumber = parseInt(variationParam);
      if (variationNumber >= 1 && variationNumber <= 4) {
        setCurrentVariation(variationNumber - 1); // Convert to 0-based index
      }
    }
  }, []);

  const currentAd = adVariations[currentVariation] || adVariations[0]; // Fallback to first if invalid

  return (
    <div className="ad-banner">
      {/* Desktop/Laptop Layout - Fixed Right */}
      <div
        className="hidden lg:block fixed right-4 top-1/2 transform -translate-y-1/2 z-40"
        style={{ width: "250px", height: "250px" }}
      >
        <a
          href={currentAd.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 transition-all duration-300">
            {/* Text Banner Section */}
            <div className={`h-[250px] aspect-square ${currentAd.backgroundColor} relative overflow-hidden flex flex-col items-center justify-center p-6 pt-0`}>
              <div className="text-center">
                <h2 className={`text-lg font-bold ${currentAd.textColor} mb-1 leading-tight`}>
                  {currentAd.title}
                </h2>
                <h3 className={`text-base font-semibold ${currentAd.textColor} mb-2 leading-tight`}>
                  {currentAd.subtitle}
                </h3>
                <p className={`text-xs ${currentAd.textColor} opacity-90`}>
                  {currentAd.description}
                </p>
              </div>

              {/* LiveReview Logo and Text - Bottom Right Corner */}
              <LiveReviewBrand
                size="lg"
                textColor={currentAd.textColor}
                showFullSubtitle={true}
              />
            </div>
          </div>
        </a>
      </div>

      {/* Tablet/Mobile Layout - Top Fixed */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 shadow-sm">
        <a
          href={currentAd.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block transition-all duration-300 transform hover:scale-105"
        >
          <div className="h-40 md:h-44">
            <div className="flex h-full bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300">
              {/* Text Banner Section */}
              <div className={`w-2/5 md:w-1/3 ${currentAd.backgroundColor} flex flex-col items-center justify-center p-3 relative`}>
                <div className="text-center">
                  <h2 className={`text-sm md:text-base font-bold ${currentAd.textColor} mb-1 leading-tight`}>
                    {currentAd.title}
                  </h2>
                  <h3 className={`text-xs md:text-sm font-semibold ${currentAd.textColor} mb-1 leading-tight`}>
                    {currentAd.subtitle}
                  </h3>
                  <p className={`text-xs ${currentAd.textColor} opacity-90 leading-tight`}>
                    {currentAd.description}
                  </p>
                </div>

                {/* LiveReview Logo and Text - Bottom Right Corner (Mobile) */}
                <LiveReviewBrand
                  size="sm"
                  textColor={currentAd.textColor}
                  showFullSubtitle={false}
                />
              </div>

              <div className="flex-1 p-3 md:p-4 flex flex-col justify-center space-y-2">
                <h3 className="font-bold text-xs md:text-sm text-slate-900 dark:text-slate-100 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 leading-tight">
                  {currentAd.brandName}
                </h3>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default AdBanner;
