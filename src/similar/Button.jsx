import React from "react";
import { cn } from "../utility/cn";

const Button = ({ children, className }) => {
  return (
    <>
      <button
        className={cn(
          "w-[122px] h-[36px] bg-secondary rounded-full cursor-pointer text-sm font-worksans font-[500] shadow-btnShadow",
          className
        )}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
