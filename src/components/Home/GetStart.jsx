import React from "react";
import SectionP from "../../similar/SectionP";
import Button from "../../similar/Button";
import { LuSquareArrowUpRight } from "react-icons/lu";

const GetStart = () => {
  return (
    <>
      <section className="py-24">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center gap-5">
            <h3 className="text-xl text-secondary font-montserrat uppercase tracking-[5%]">
              GET STARTED
            </h3>
            <h2 className="w-[327px] md:w-full text-4xl font-montserrat font-[500] text-white italic text-center">
              Embrace <span className="font-bold">the new era of</span>{" "}
              outbound.
            </h2>
            <SectionP className="w-8/12 md:w-6/12 m-auto text-center">
              Wizia lets you train, activate, and optimize aiDRs. Take your
              outbound to new levels of performance and efficiency.
            </SectionP>
            <Button className="w-[300px] md:!w-[216px] !h-[52px] m-auto md:m-0 flex justify-center items-center gap-2.5">
              Sign Up for the Beta
              <LuSquareArrowUpRight className="text-xl" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStart;
