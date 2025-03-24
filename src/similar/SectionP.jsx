import React from "react";
import { cn } from "../utility/cn";

const SectionP = ({ children, className }) => {
  return (
    <>
      <p
        className={cn(
          "text-lg lg:text-[22px] text-white font-worksans font-light tracking-tight",
          className
        )}
      >
        {children}
      </p>
    </>
  );
};

export default SectionP;
