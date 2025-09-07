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
      <div className="mb-16 mt-[64px]">
        <AdBanner />
      </div>
      <div>
        <h1 className="text-2xl font-medium mb-2 text-black dark:text-slate-300">
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
