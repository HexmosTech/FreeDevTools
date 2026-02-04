import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const ToolCardWrapper: React.FC<WrapperProps> = ({ children, className }) => {
  return <div className={`space-y-6 py-6 ${className ?? ""}`}>{children}</div>;
};

export default ToolCardWrapper;
