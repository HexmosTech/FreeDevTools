import React from "react";
import AdBanner from "../banner/AdBanner";

interface ToolHeadProps {
  name: string;
  description: string;
  showAdBanner?: boolean; // Optional prop to control AdBanner visibility
}

const ToolHead: React.FC<ToolHeadProps> = ({ name, description, showAdBanner = true }) => {
  return (
    <>
      {/* Ad Banner */}
      {showAdBanner && (
        <div className="mb-10 mt-10">
          <AdBanner />
        </div>
      )}
      <div>
        <h1 id="head-title" className="text-2xl font-medium mb-2 text-black dark:text-slate-300">
          {name}
        </h1>
        <p className="text-muted-foreground text-sm md:text-lg lg:text-lg font-normal ">
          {description}
        </p>
      </div>
    </>
  );
};

export default ToolHead;
