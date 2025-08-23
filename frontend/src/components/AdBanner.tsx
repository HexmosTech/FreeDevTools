import React, { useState } from "react";
import LiveReviewBrand from "./LiveReviewBrand";

interface AdVariation {
  id: string;
  title: string;
  description: string;
  backgroundColor: string;
  textColor: string;
}
const link = "https://hexmos.com/livereview/"

const adVariations: AdVariation[] = [
  {
    id: "variation-1",
    title: "Code Review In Seconds",
    description: "Self-Hosted AI Code Reviewer",
    backgroundColor: "bg-blue-200",
    textColor: "text-gray-800"
  },
  {
    id: "variation-2",
    title: "Reduce Production Outages",
    description: "Self-Hosted AI Code Reviewer",
    backgroundColor: "bg-blue-200",
    textColor: "text-gray-800"
  },
  {
    id: "variation-3",
    title: "Reduce costly production bugs",
    description: "Self-Hosted AI Code Reviewer",
    backgroundColor: "bg-blue-200",
    textColor: "text-gray-800"
  },
  {
    id: "variation-4",
    title: "Minimize downtime from code errors",
    description: "Self-Hosted AI Code Reviewer",
    backgroundColor: "bg-blue-200",
    textColor: "text-gray-800"
  },
  {
    id: "variation-5",
    title: "Avoid expensive production outages",
    description: "Self-Hosted AI Code Reviewer",
    backgroundColor: "bg-blue-200",
    textColor: "text-gray-800"
  },
  {
    id: "variation-6",
    title: "Reduce bottlenecks in code reviews",
    description: "Self-Hosted AI Code Reviewer",
    backgroundColor: "bg-blue-200",
    textColor: "text-gray-800"
  },
  {
    id: "variation-7",
    title: "Reduce context-switching for engineers",
    description: "Self-Hosted AI Code Reviewer",
    backgroundColor: "bg-blue-200",
    textColor: "text-gray-800"
  }
];

const AdBanner: React.FC = () => {
  const [currentVariation, setCurrentVariation] = useState(() =>
    Math.floor(Math.random() * adVariations.length)
  );

  const currentAd = adVariations[currentVariation] || adVariations[0];

  return (
    <>
      {/* Desktop Layout - Auto-fit to parent width */}
      <div className="hidden lg:block w-full bg-blue-200 border border-gray-200 shadow-sm h-40 rounded-md">
        <a
          href={link + "?variation=" + currentVariation}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full hover:bg-blue-400 transition-colors duration-300 rounded-lg flex justify-center"
        >
          <div className="px-6 h-full w-auto flex flex-col">
            {/* Content Section */}
            <div className=" text-left">
              <h2 className="text-6xl font-bold text-red-700   leading-tight font-eb-garamond tracking-wide">
                {currentAd.title}
              </h2>
            </div>
            <div className="text-left flex flex-row justify-between">
              <p className="text-3xl font-normal text-gray-600   font-eb-garamond   leading-relaxed">
                {currentAd.description}
              </p>
              {/* Branding Section */}
              <div className="ml-6 flex items-left">
                <LiveReviewBrand size="lg" />
              </div>
            </div>
          </div>
        </a>
      </div>

      {/* Mobile Layout - Auto-fit to parent width */}
      <div className="lg:hidden w-full bg-blue-200 border border-gray-200 shadow-sm h-32 md:h-16 rounded-lg">
        <a
          href={link + "?variation=" + currentVariation}
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
