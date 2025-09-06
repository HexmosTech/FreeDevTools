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
      <div className="mb-16 mt-8 ">
        <AdBanner />
      </div>
      <div className="mb-2">
        <h2 className="text-xl md:text-2xl lg:text-2xl font-medium mb-2 text-black dark:text-slate-300">
          {name}
        </h2>
        <h4 className="text-muted-foreground ">{description}</h4>
      </div>
    </>
  );
};

export default ToolHead;
