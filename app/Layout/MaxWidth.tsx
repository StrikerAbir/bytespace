import React from "react";


interface MaxWidthProps {
  children: React.ReactNode; // Children can be any valid React node
  maxWidth?: string; // Optional prop for max width
  otherClass?: string; // Optional prop for additional classes
}

const MaxWidth: React.FC<MaxWidthProps> = ({
  children,
  maxWidth = "max-w-[1400px]",
  otherClass = "",
}) => {
  return (
    <div className={`mx-auto ${maxWidth} ${otherClass}`}>
      <div className="md:w-full lg:w-full xl:w-full xs:w-[92%] xs:overflow-clip mx-auto">
        {children}
      </div>
    </div>
  );
};

export default MaxWidth;
