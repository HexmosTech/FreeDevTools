import React from "react";

interface ToolContainerProps {
  children: React.ReactNode;
  className?: string;
}

const ToolContainer: React.FC<ToolContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`max-w-6xl mx-auto px-2 md:px-6 mb-10 ${className}`}>
      {children}
    </div>
  );
};

export default ToolContainer;
