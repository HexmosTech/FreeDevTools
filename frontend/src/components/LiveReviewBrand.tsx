import React from "react";

interface LiveReviewBrandProps {
  size?: "sm" | "md" | "lg";
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  className?: string;
  textColor?: string;
  showFullSubtitle?: boolean;
}

const LiveReviewBrand: React.FC<LiveReviewBrandProps> = ({
  size = "lg",
  position = "bottom-right",
  className = "",
  textColor = "text-gray-800 dark:text-gray-200",
  showFullSubtitle = true
}) => {
  const sizeClasses = {
    sm: {
      logo: "w-4 h-4",
      title: "text-xs",
      subtitle: "text-[10px]",
      spacing: "space-x-1"
    },
    md: {
      logo: "w-5 h-5",
      title: "text-sm",
      subtitle: "text-[10px]",
      spacing: "space-x-1.5"
    },
    lg: {
      logo: "w-9 h-9",
      title: "text-sm",
      subtitle: "text-[10px]",
      spacing: "space-x-2"
    }
  };

  const positionClasses = {
    "bottom-right": "absolute bottom-4 right-4",
    "bottom-left": "absolute bottom-4 left-4",
    "top-right": "absolute top-4 right-4",
    "top-left": "absolute top-4 left-4"
  };

  const currentSize = sizeClasses[size];
  const currentPosition = positionClasses[position];

  return (
    <div
      className={`${currentPosition} ${currentSize.spacing} flex items-center ${className}`}
    >

      <div className="text-right">
        <div className={`${currentSize.title} font-semibold ${textColor}`}>
          <span className="text-black">Live</span>
          <span className="text-blue-800">Review</span>
        </div>
        <div className={`${currentSize.subtitle} ${textColor} opacity-80 leading-tight`}>
          {showFullSubtitle ? "AI-Powered Code Review" : "AI-Powered"}
        </div>
      </div>
      <img
        src="https://hexmos.com/freedevtools/t/livereview_logo.png"
        alt="LiveReview"
        className={`${currentSize.logo} transition-transform duration-300 group-hover:scale-110`}
      />
    </div>
  );
};

export default LiveReviewBrand;
