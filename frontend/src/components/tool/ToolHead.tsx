import React from "react";
import AdBanner from "../AdBanner";

interface ToolHeadProps {
  name: string;
  description: string;
}

const ToolHead: React.FC<ToolHeadProps> = ({ name, description }) => {
  return (
    <>
      {/* Ad Banner */}
      <div className="mb-6">
        <AdBanner />
      </div>
      <div className="mb-6">
        <h1 className="text-lg md:text-3xl mb-2 text-black dark:text-slate-300">
          {name}
        </h1>
        <p className="text-muted-foreground text-xs md:text-md">
          {description}
        </p>
      </div>
    </>
  );
};

export default ToolHead;
