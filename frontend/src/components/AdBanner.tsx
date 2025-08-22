import React, { useEffect, useState } from "react";
import LiveReviewBrand from "./LiveReviewBrand";

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

const adVariations: AdVariation[] = [
  {
    id: "variation-1",
    title: "Get Fast First-Pass",
    subtitle: "Code Review",
    description: "Secure & Affordable AI Code Reviewer",
    brandName: "LiveReview",
    tagline: "The AI reviewer that transforms both code quality and team performance",
    link: "https://hexmos.com/livereview/",
    backgroundColor: "bg-blue-200",
    textColor: "text-gray-800"
  },
  {
    id: "variation-2",
    title: "Cut Code Review",
    subtitle: "Time in Half",
    description: "Secure & Affordable AI Code Reviewer",
    brandName: "LiveReview",
    tagline: "The AI reviewer that transforms both code quality and team performance",
    link: "https://hexmos.com/livereview/",
    backgroundColor: "bg-blue-200",
    textColor: "text-gray-800"
  },
  {
    id: "variation-3",
    title: "Reduce Production",
    subtitle: "Outages",
    description: "Secure & Affordable AI Code Reviewer",
    brandName: "LiveReview",
    tagline: "The AI reviewer that transforms both code quality and team performance",
    link: "https://hexmos.com/livereview/",
    backgroundColor: "bg-blue-200",
    textColor: "text-gray-800"
  },
  {
    id: "variation-4",
    title: "Catch Security Issues",
    subtitle: "Early On",
    description: "Secure & Affordable AI Code Reviewer",
    brandName: "LiveReview",
    tagline: "The AI reviewer that transforms both code quality and team performance",
    link: "https://hexmos.com/livereview/",
    backgroundColor: "bg-blue-200",
    textColor: "text-gray-800"
  }
];

const AdBanner: React.FC = () => {
  const [currentVariation, setCurrentVariation] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const variationParam = urlParams.get('variation');
    if (variationParam) {
      const variationNumber = parseInt(variationParam);
      if (variationNumber >= 1 && variationNumber <= 4) {
        setCurrentVariation(variationNumber - 1);
      }
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const currentAd = adVariations[currentVariation] || adVariations[0];

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden lg:block absolute right-10 top-48 z-40">
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200 z-50"
            aria-label="Close ad"
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          <a
            href={currentAd.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-72 h-72 bg-blue-200 rounded-xl shadow-lg border border-gray-200 hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col h-full">
              {/* Content Section */}
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center text-gray-800">
                <h2 className="text-2xl font-extrabold mb-2 leading-tight font-eb-garamond tracking-wide">
                  {currentAd.title}
                </h2>
                <h3 className="text-2xl font-extrabold mb-2 leading-tight font-eb-garamond tracking-wide">
                  {currentAd.subtitle}
                </h3>
                <p className="text-xl  font-eb-garamond font-medium leading-relaxed my-2">
                  {currentAd.description}
                </p>
              </div>

              {/* Branding Section */}
              <div className="h-30 flex mb-4 items-center justify-center">
                <LiveReviewBrand size="lg" />
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40">
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200 z-50"
            aria-label="Close ad"
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          <a
            href={currentAd.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-blue-200 border-b border-gray-200 shadow-sm hover:bg-blue-300 transition-colors duration-300"
          >
            <div className="flex h-32">
              {/* Content Section */}
              <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
                <h2 className="text-xl font-bold text-gray-800 mb-1 leading-tight font-eb-garamond tracking-wide">
                  {currentAd.title}
                </h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-1 leading-tight font-eb-garamond tracking-wide">
                  {currentAd.subtitle}
                </h3>
                <p className="text-sm text-gray-800 opacity-90 font-eb-garamond font-medium leading-relaxed">
                  {currentAd.description}
                </p>
              </div>

              {/* Branding Section */}
              <div className="px-4 bg-blue-900/30 flex items-center justify-center">
                <LiveReviewBrand size="sm" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default AdBanner;
