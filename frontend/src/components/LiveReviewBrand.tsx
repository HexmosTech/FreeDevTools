import React from "react";

interface LiveReviewBrandProps {
  size?: "sm" | "md" | "lg";
}

const LiveReviewBrand: React.FC<LiveReviewBrandProps> = ({ size = "md" }) => {
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
      logo: "w-8 h-8",
      title: "text-sm",
      subtitle: "text-[10px]",
      spacing: "space-x-2"
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className="flex flex-col items-center space-y-1 text-black">
      <p className=" text-xs pl-6">Check it out</p>

      <div className={`flex items-center ${currentSize.spacing}`}>
        <img
          src="https://hexmos.com/freedevtools/t/livereview_logo.png"
          alt="LiveReview"
          className={`${currentSize.logo}`}
        />
        <div className="text-center">
          <div className={`${currentSize.title} font-semibold `}>
            <span>Live</span>
            <span className="text-blue-800">Review</span>
          </div>
          <div className={`${currentSize.subtitle}  opacity-80 leading-tight`}>
            AI-Powered Code Review
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveReviewBrand;
