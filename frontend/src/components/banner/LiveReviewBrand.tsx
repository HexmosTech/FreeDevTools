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
          src="data:image/png;base64,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"
          alt="Hexmos LiveReview AI-Powered Code Review"
          className={`${currentSize.logo} mb-0 lg:mb-0`}

          loading="lazy"
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
