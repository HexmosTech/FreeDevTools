import React from "react";

interface ToolGridContainerProps {
  children: React.ReactNode;
  className?: string;
}

const ToolGridContainer = ({
  children,
  className = "",
}: ToolGridContainerProps) => {
  return (
    <div
      className={`
        grid
        grid-cols-1
        gap-x-8
        gap-y-2
        max-w-[1600px]
        mx-auto
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default ToolGridContainer;
