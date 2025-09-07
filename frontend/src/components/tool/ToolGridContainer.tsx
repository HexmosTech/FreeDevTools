const ToolGridContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="
        flex
        flex-col
        gap-6
        max-w-[1600px]
        mx-auto
        mt-8
        xl:flex-row
        xl:items-start
      "
    >
      {/* Single column on mobile/tablet */}
      <div className="flex flex-col gap-6 xl:hidden">{children}</div>

      {/* Two columns on large screens */}
      <div className="hidden xl:flex xl:flex-col xl:gap-6 xl:flex-1">
        {/* Left column items */}
        {Array.isArray(children)
          ? children.filter((_, index) => index % 2 === 0)
          : [children[0]]}
      </div>
      <div className="hidden xl:flex xl:flex-col xl:gap-6 xl:flex-1">
        {/* Right column items */}
        {Array.isArray(children)
          ? children.filter((_, index) => index % 2 === 1)
          : [children[1]]}
      </div>
    </div>
  );
};

export default ToolGridContainer;
