import React from "react";
import AdBanner from "../banner/AdBanner";

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
        <p className="text-xl md:text-2xl lg:text-3xl font-medium mb-2 text-black dark:text-slate-300">
          {name}
        </p>
        <p className="text-muted-foreground ">
          {description}
        </p>
      </div>
    </>
  );
};

export default ToolHead;
