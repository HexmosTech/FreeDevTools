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
      {/* Desktop Layout - Auto-fit to parent width */}
      <div className="hidden lg:block w-full bg-blue-200 border border-gray-200 shadow-sm h-20 rounded-md">
        <a
          href={currentAd.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full hover:bg-blue-400 transition-colors duration-300 rounded-lg"
        >
          <div className="px-6 h-full flex items-center justify-between">
            {/* Content Section */}
            <div className="flex-1 text-left">
              <h2 className="text-xl font-bold text-gray-800 mb-1 leading-tight font-eb-garamond tracking-wide">
                {currentAd.title}
              </h2>
              <h3 className="text-lg font-semibold text-gray-800 mb-1 leading-tight font-eb-garamond tracking-wide">
                {currentAd.subtitle}
              </h3>
              <p className="text-sm font-semibold text-gray-800 opacity-90 font-eb-garamond font-medium leading-relaxed">
                {currentAd.description}
              </p>
            </div>

            {/* Branding Section */}
            <div className="ml-6 flex items-center">
              <LiveReviewBrand size="lg" />
            </div>
          </div>
        </a>
      </div>

      {/* Mobile Layout - Auto-fit to parent width */}
      <div className="lg:hidden w-full bg-blue-200 border border-gray-200 shadow-sm h-32 md:h-16 rounded-lg">
        <a
          href={currentAd.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full hover:bg-blue-400 transition-colors duration-300 rounded-lg"
        >
          <div className="px-4 h-full flex items-center justify-between">
            {/* Content Section */}
            <div className="flex-1 text-left">
              <h2 className="text-lg md:text-lg  font-bold text-gray-800 mb-1 leading-tight font-eb-garamond tracking-wide">
                {currentAd.title}
              </h2>
              <h3 className="text-lg md:text-base font-semibold text-gray-800 mb-1 leading-tight font-eb-garamond tracking-wide">
                {currentAd.subtitle}
              </h3>
              <p className="text-md text-gray-800 opacity-90 font-eb-garamond font-medium leading-relaxed">
                {currentAd.description}
              </p>
            </div>

            {/* Branding Section */}
            <div className="ml-4 flex items-center">
              <LiveReviewBrand size="sm" />
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default AdBanner;
