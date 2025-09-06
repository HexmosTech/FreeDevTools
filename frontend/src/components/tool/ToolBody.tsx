import React from "react";

interface ToolBodyProps {
  children: React.ReactNode;
  className?: string;
}

const ToolBody: React.FC<ToolBodyProps> = ({ children, className }) => {
  return (
    <div className={`space-y-12 mt-6 ${className ?? ""}`}>
      {children}
    </div>
  );
};

export default ToolBody;

