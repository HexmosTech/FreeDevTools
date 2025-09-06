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
      <div className="mb-16 mt-6 ">
        <AdBanner />
      </div>
      <div className="mb-2">
        <h1 className="text-2xl font-medium mb-2 text-black dark:text-slate-300">
          {name}
        </h1>
        <p className="text-muted-foreground text-base md:text-lg lg:text-xl font-normal ">
          {description}
        </p>
      </div>
    </>
  );
};

export default ToolHead;
