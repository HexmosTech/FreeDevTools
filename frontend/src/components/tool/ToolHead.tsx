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
      <div className="mb-24 mt-20 ">
        <AdBanner />
      </div>
      <div className="mb-2">
        <h1 className="text-xl md:text-2xl lg:text-2xl font-medium mb-2 text-black dark:text-slate-300">
          {name}
        </h1>
        <h3 className="text-muted-foreground ">{description}</h3>
      </div>
    </>
  );
};

export default ToolHead;
