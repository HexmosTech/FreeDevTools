import React, { useEffect, useState } from "react";
import LiveReviewBrand from "./LiveReviewBrand";

// Learn More Button Component
const LearnMoreButton: React.FC<{ size?: "sm" | "md" }> = ({ size = "md" }) => {
  const isSmall = size === "sm";

  return (
    <button
      className={`flex justify-between items-center cursor-pointer shadow-[1px_2px_0px_black] border border-black rounded-[6px] relative overflow-hidden z-100 transition-all duration-250 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[0px_1px_0px_black] active:brightness-75 group ${isSmall ? "px-1 py-0.5" : "px-1 py-1"
        } bg-yellow-100 hover:bg-yellow-600`}
    >
      <div
        className={`relative text-black flex justify-start items-center font-semibold ${isSmall ? "text-[10px]" : "text-xs"
          }`}
      >
        <span className="relative transition-all duration-250 mr-1">Learn</span>
        <span className="relative transition-all duration-250 mr-1">More</span>
      </div>
      <div
        className={`border border-black rounded-full bg-red-200 group-hover:bg-red-600 relative overflow-hidden transition-all duration-250 group-hover:translate-x-[1px] group-active:translate-x-[2px] ${isSmall ? "p-0.5 mr-0.5" : "p-1 mr-1"
          }`}
      >
        <svg
          width={isSmall ? "8" : "12"}
          height={isSmall ? "8" : "12"}
          viewBox="0 0 45 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          <path
            d="M43.7678 20.7678C44.7441 19.7915 44.7441 18.2085 43.7678 17.2322L27.8579 1.32233C26.8816 0.34602 25.2986 0.34602 24.3223 1.32233C23.346 2.29864 23.346 3.88155 24.3223 4.85786L38.4645 19L24.3223 33.1421C23.346 34.1184 23.346 35.7014 24.3223 36.6777C25.2986 37.654 26.8816 37.654 27.8579 36.6777L43.7678 20.7678ZM0 21.5L42 21.5V16.5L0 16.5L0 21.5Z"
            fill="black"
          ></path>
        </svg>
      </div>
    </button>
  );
};

// Close Button Component - Updated to handle responsive sizing
const CloseButton: React.FC<{
  size?: "sm" | "md";
  onClick: (e: React.MouseEvent) => void;
}> = ({ size = "md", onClick }) => {
  const isSmall = size === "sm";

  return (
    <button
      onClick={onClick}
      aria-label="Close"
      className={`absolute top-2 right-2 flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-yellow-200 rounded-full transition-colors duration-200 z-10 py-2 pr-2`}
    >
      <svg
        className={`${isSmall ? "w-4 h-4" : "w-5 h-5"} xl:w-5 xl:h-5`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

interface AdVariation {
  id: string;
  title: string;
  description: string;
  backgroundColor: string;
  textColor: string;
}

const link = "https://hexmos.com/livereview/";

const adVariations: AdVariation[] = [
  {
    id: "variation-1",
    title: "Code Review In Seconds",
    description: "Self-Hosted AI Code Reviewer",
    backgroundColor: "bg-blue-200",
    textColor: "text-gray-800",
  },
  {
    id: "variation-2",
    title: "Reduce Production Outages",
    description: "Self-Hosted AI Code Reviewer",
    backgroundColor: "bg-blue-200",
    textColor: "text-gray-800",
  },
  {
    id: "variation-3",
    title: "Reduce costly production bugs",
    description: "Self-Hosted AI Code Reviewer",
    backgroundColor: "bg-blue-200",
    textColor: "text-gray-800",
  },
  {
    id: "variation-4",
    title: "Minimize downtime from code errors",
    description: "Self-Hosted AI Code Reviewer",
    backgroundColor: "bg-blue-200",
    textColor: "text-gray-800",
  },
  {
    id: "variation-5",
    title: "Avoid expensive production outages",
    description: "Self-Hosted AI Code Reviewer",
    backgroundColor: "bg-blue-200",
    textColor: "text-gray-800",
  },
  {
    id: "variation-6",
    title: "Reduce bottlenecks in code reviews",
    description: "Self-Hosted AI Code Reviewer",
    backgroundColor: "bg-blue-200",
    textColor: "text-gray-800",
  },
  {
    id: "variation-7",
    title: "Reduce context-switching for engineers",
    description: "Self-Hosted AI Code Reviewer",
    backgroundColor: "bg-blue-200",
    textColor: "text-gray-800",
  },
];

const AdBanner: React.FC = () => {
  // Only keep state for things that actually need JS
  const [currentVariation, setCurrentVariation] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setCurrentVariation(Math.floor(Math.random() * adVariations.length));
  }, []);

  const currentAd = adVariations[currentVariation] || adVariations[0];

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="w-full bg-yellow-100 hover:bg-yellow-200 border border-gray-200 shadow-sm rounded-md relative transition-colors duration-300
      /* Mobile layout (default) */
      mb-8 mt-6
      /* Tablet layout */
      md:mb-10 md:mt-6
      /* Desktop layout */
      xl:h-40 xl:mb-10 xl:mt-2 xl:flex xl:justify-center"
    >
      <CloseButton size="sm" onClick={handleClose} />
      <a
        href={link + "?variation=" + currentVariation}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full hover:bg-yellow transition-colors duration-300 rounded-lg
          xl:w-full xl:flex xl:justify-start"
      >
        <div className="px-4 py-2 h-full flex flex-col justify-center md:px-2 md:py-2 xl:px-6 xl:py-0 xl:w-full xl:min-w-96">
          <div className="text-left mb-4 xl:mb-0">
            <p className="text-red-700 mb-2 leading-tight tracking-wide font-semibold text-3xl md:text-5xl md:mb-3">
              {currentAd.title}
            </p>
            <p className="text-gray-800 leading-relaxed font-medium text-lg md:text-2xl xl:hidden">
              {currentAd.description}
            </p>
          </div>

          {/* Mobile and Tablet button row */}
          <div className="flex flex-row items-center justify-between mb-2 xl:hidden">
            <LearnMoreButton size="sm" />
            <LiveReviewBrand size="sm" />
          </div>

          {/* Desktop layout - description and buttons in a row */}
          <div className="hidden xl:flex xl:flex-row xl:justify-between xl:items-center xl:gap-24 xl:mt-0">
            <div className="flex flex-row justify-between items-center gap-12">
              <p className="text-gray-800 leading-relaxed text-3xl font-medium">
                {currentAd.description}
              </p>
              <LearnMoreButton size="md" />
            </div>
            <div className="flex items-center gap-4 mt-1">
              <LiveReviewBrand size="lg" />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default AdBanner;
