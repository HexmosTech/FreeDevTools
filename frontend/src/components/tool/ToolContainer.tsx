import React from "react";

interface ToolContainerProps {
  children: React.ReactNode;
}

const ToolContainer: React.FC<ToolContainerProps> = ({ children }) => {
  return (
    <div className="max-w-6xl mx-auto px-2 md:px-6">
      {children}
    </div>
  );
};

export default ToolContainer;
