import React from "react";
import { cn } from "../utility/cn";

const SectionTitle = ({ children, className }) => {
  return (
    <>
      <h2
        className={cn(
          "text-2xl lg:text-[28px] text-white font-semibold font-montserrat",
          className
        )}
      >
        {children}
      </h2>
    </>
  );
};

export default SectionTitle;
