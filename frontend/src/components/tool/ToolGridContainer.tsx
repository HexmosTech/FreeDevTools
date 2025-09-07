const ToolGridContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-6
          max-w-[1600px]
          mx-auto
          mt-8
        "
    >
      {children}
    </div>
  );
};

export default ToolGridContainer;
