
const ToolGridContainer = ({ children }: { children: React.ReactNode }) => {
    return (
      <div
        className="
          columns-1
          xl:columns-2
          gap-6
          [column-fill:_balance]
          max-w-[1600px]
          mx-auto
           mt-16
        "
      >
        {children}
      </div>
    );
  };
  
export default ToolGridContainer;