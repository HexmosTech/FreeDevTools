import React from "react";
import Breadcrumb from "../Breadcrumb";

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

export interface ToolHeadProps {
    name: string;
    description: string;
    breadcrumbItems?: BreadcrumbItem[];
    id?: string;
}

const ToolHead: React.FC<ToolHeadProps> = ({ name, description, breadcrumbItems, id = "tool-head" }) => {
    return (
        <div id={id + "-head-container"}>
            {breadcrumbItems && (
                <div id={id + "-breadcrumb-container"} className="mb-10 mt-10">
                    <Breadcrumb items={breadcrumbItems} id={id} />
                </div>
            )}
            <div id={id + "-head-content"}>
                <h1 id="head-title" className="text-2xl font-medium mb-2 text-black dark:text-slate-300">
                    {name}
                </h1>
                <p className="text-muted-foreground">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ToolHead;
