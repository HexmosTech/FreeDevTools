import React from "react";

interface LiveReviewBrandProps {
  size?: "sm" | "md" | "lg";
}

const LiveReviewBrand: React.FC<LiveReviewBrandProps> = ({ size = "md" }) => {
  const sizeClasses = {
    sm: {
      logo: "w-6 h-6",
      title: "text-xs",
      subtitle: "text-[10px]",
      spacing: "space-x-1",
    },
    md: {
      logo: "w-5 h-5",
      title: "text-sm",
      subtitle: "text-[10px]",
      spacing: "space-x-1.5",
    },
    lg: {
      logo: "w-8 h-8",
      title: "text-sm",
      subtitle: "text-[10px]",
      spacing: "space-x-2",
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className="flex flex-col items-center space-y-1 text-black">
      {/* Desktop/Laptop: original layout, Mobile/Tablet: vertical layout */}
      {/* Desktop: row, Mobile/Tablet: column */}
      <div
        className={`
          flex
          items-center
          ${currentSize.spacing}
          flex-row 
          lg:space-x-2 space-x-0
          lg:space-y-0 space-y-1
        `}
      >
        <img
          src="/freedevtools/livereview_logo_32.webp"
          alt="LiveReview"
          className={`${currentSize.logo} mb-0 lg:mb-0`}
        />
        <div className="text-left">
          <div className={`${currentSize.title} font-semibold`}>
            <span>Live</span>
            <span className="text-blue-800">Review</span>
          </div>
          <div className={`${currentSize.subtitle} opacity-80 leading-tight`}>
            AI-Powered Code Review
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveReviewBrand;
