import React from "react";
import AdBanner from "../banner/AdBanner";
import Breadcrumb from "../Breadcrumb";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface ToolHeadProps {
  name: string;
  description: string;
  breadcrumbItems?: BreadcrumbItem[];
}

const ToolHead: React.FC<ToolHeadProps> = ({ name, description, breadcrumbItems }) => {
  return (
    <>
      {/* Ad Banner */}
      <div className="mb-12 mt-[74px]">
        <AdBanner />
      </div>
      {breadcrumbItems && (
        <div className="mb-10 mt-10">
          <Breadcrumb items={breadcrumbItems} />
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
