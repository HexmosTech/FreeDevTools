import React from "react";

interface ToolContainerProps {
    children: React.ReactNode;
}

const ToolContainer: React.FC<ToolContainerProps> = ({ children }) => {
    return <div className="mb-10">{children}</div>;
};

export default ToolContainer;
