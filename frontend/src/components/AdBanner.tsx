import React, { useEffect, useState } from "react";

// Import ad images using Astro's image handling
import ad1Image from "../assets/ad1.png";
import { default as ad2Image, default as ad4Image } from "../assets/ad2.png";
import ad3Image from "../assets/ad3.png";

// TypeScript interfaces
interface AdData {
  id: string;
  title: string;
  description: string;
  image: any;
  link?: string;
}

// Utility function to extract image source from imported images
const getImageSrc = (image: any): string => {
  if (typeof image === "string") {
    return image;
  }

  if (!image) {
    return "";
  }

  // Handle Astro ImageMetadata
  if (image.src) {
    return image.src;
  }

  // Handle imported image modules
  if (image.default) {
    return image.default;
  }

  // Try other possible properties
  if (image.url) return image.url;

  console.warn("getImageSrc: could not extract source from image:", image);
  return "";
};

interface AdBannerProps {
  className?: string;
}

// Component for handling image loading with error handling
interface AdImageProps {
  src: any;
  alt: string;
  className?: string;
}

const AdImage: React.FC<AdImageProps> = ({ src, alt, className = "" }) => {
  const imageSrc = getImageSrc(src);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`w-full h-full object-cover ${className}`}
    />
  );
};

// Advertisement data using existing ad images
const adData: AdData[] = [
  {
    id: "livereview-1",
    title: "LiveReview",
    description:
      "The AI reviewer that transforms both code quality and team performance",
    image: ad1Image,
    link: "https://hexmos.com/livereview/",
  },
  {
    id: "livereview-2",
    title: "LiveReview",
    description:
      "The AI reviewer that transforms both code quality and team performance",
    image: ad2Image,
    link: "https://hexmos.com/livereview/",
  },
  {
    id: "livereview-3",
    title: "LiveReview",
    description:
      "The AI reviewer that transforms both code quality and team performance",
    image: ad3Image,
    link: "https://hexmos.com/livereview/",
  },
  {
    id: "livereview-4",
    title: "LiveReview",
    description:
      "The AI reviewer that transforms both code quality and team performance",
    image: ad4Image,
    link: "https://hexmos.com/livereview/",
  },
];

const AdBanner: React.FC<AdBannerProps> = ({ className = "" }) => {
  const [currentVariation, setCurrentVariation] = useState(0); // Default to first image (index 0)

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

  try {
    const currentAd = adData[currentVariation] || adData[0]; // Fallback to first if invalid

    return (
      <div className={`ad-banner ${className}`}>
        {/* Desktop/Laptop Layout - Fixed Right */}
        <div
          className="hidden lg:block fixed right-4 top-1/2 transform -translate-y-1/2 w-80 z-40"
          style={{ height: "500px" }}
        >
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 transition-all duration-300">
            <div className="aspect-[4/4] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 relative overflow-hidden">
              <AdImage
                src={currentAd.image}
                alt={currentAd.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-5 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
              <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">
                {currentAd.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                {currentAd.description}
              </p>
              {currentAd.link && (
                <a
                  href={currentAd.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white text-sm font-semibold px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 group"
                  style={{
                    background:
                      "linear-gradient(to right, #8129D9, #9333ea)",
                  }}
                >
                  <span>Learn More</span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Tablet/Mobile Layout - Top Fixed */}
        <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 border-b-2 border-slate-200 dark:border-slate-700 shadow-lg">
          <div className="h-52 md:h-60">
            <div className="flex h-full bg-gradient-to-r from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 hover:from-slate-50 hover:to-slate-100 dark:hover:from-slate-800 dark:hover:to-slate-700 transition-all duration-300">
              <div className="w-2/5 md:w-1/3 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 relative overflow-hidden">
                <AdImage
                  src={currentAd.image}
                  alt={currentAd.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 dark:to-black/10"></div>
              </div>
              <div className="flex-1 p-3 md:p-5 flex flex-col justify-center space-y-2">
                <h3 className="font-bold text-sm md:text-lg text-slate-900 dark:text-slate-100 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 leading-tight">
                  {currentAd.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2 md:line-clamp-3">
                  {currentAd.description}
                </p>
                {currentAd.link && (
                  <a
                    href={currentAd.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white text-xs md:text-sm font-semibold px-3 md:px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 w-fit group"
                    style={{
                      background:
                        "linear-gradient(to right, #8129D9, #9333ea)",
                    }}
                  >
                    <span>Learn More</span>
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("AdBanner: Error rendering component:", error);

    // Return error fallback UI
    return (
      <div className={`ad-banner ${className}`}>
        <div className="hidden lg:block fixed right-4 top-1/2 transform -translate-y-1/2 w-80 z-40">
          <div className="bg-gradient-to-b from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-900/30 border border-red-200 dark:border-red-800 rounded-xl p-6 text-center shadow-xl">
            <div className="text-red-400 mb-2">
              <svg
                className="w-8 h-8 mx-auto"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-red-600 dark:text-red-400 text-sm font-medium">
              Advertisement banner unavailable
            </p>
          </div>
        </div>
        <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-900/30 border-b-2 border-red-200 dark:border-red-800 h-20 flex items-center justify-center shadow-lg">
          <div className="flex items-center space-x-2">
            <svg
              className="w-4 h-4 text-red-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-red-600 dark:text-red-400 text-sm font-medium">
              Banner unavailable
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default AdBanner;
