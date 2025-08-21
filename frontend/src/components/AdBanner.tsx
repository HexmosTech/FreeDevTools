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

  const currentAd = adVariations[currentVariation] || adVariations[0];

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden lg:block fixed right-10 top-48 z-40">
        <a
          href={currentAd.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-64 h-64 bg-blue-200 rounded-xl shadow-lg border border-gray-200 hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          <div className="flex flex-col h-full">
            {/* Content Section */}
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <h2 className="text-lg font-bold text-gray-800 mb-1 leading-tight">
                {currentAd.title}
              </h2>
              <h3 className="text-base font-semibold text-gray-800 mb-2 leading-tight">
                {currentAd.subtitle}
              </h3>
              <p className="text-xs text-gray-800 opacity-90">
                {currentAd.description}
              </p>
            </div>

            {/* Branding Section */}
            <div className="h-20 flex items-center justify-center">
              <LiveReviewBrand size="lg" />
            </div>
          </div>
        </a>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40">
        <a
          href={currentAd.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-blue-200 border-b border-gray-200 shadow-sm hover:bg-blue-300 transition-colors duration-300"
        >
          <div className="flex h-32">
            {/* Content Section */}
            <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
              <h2 className="text-xl font-bold text-gray-800 mb-1 leading-tight">
                {currentAd.title}
              </h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-1 leading-tight">
                {currentAd.subtitle}
              </h3>
              <p className="text-xs text-gray-800 opacity-90">
                {currentAd.description}
              </p>
            </div>

            {/* Branding Section */}
            <div className="w-24 bg-blue-900/30 flex items-center justify-center">
              <LiveReviewBrand size="sm" />
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default AdBanner;
