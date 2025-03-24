import React from "react";
import SectionP from "../../similar/SectionP";
import Button from "../../similar/Button";
import { LuSquareArrowUpRight } from "react-icons/lu";

const Hero = () => {
  return (
    <>
      <section className="bg-[url('/mobileBg.png')] md:bg-[url('/Hero.png')] bg-cover bg-center bg-no-repeat py-16 lg:py-28 px-5 lg:px-10">
        <div className="container mx-auto">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-base lg:text-2xl text-secondary font-montserrat tracking-[5%]">
              AI SDRs (aiDRs)
            </h3>
            <h1 className="w-[300px] md:w-[391px] m-auto md:m-0 text-5xl md:text-6xl text-white font-montserrat font-bold tracking-[-1%]">
              More <span className="italic font-[500]">leads</span>, less{" "}
              <span className="italic font-[500]">people</span>.
            </h1>
            <SectionP className="w-[343px] md:w-[450px] m-auto md:m-0 py-5">
              Train an aiDR on your ICP and messaging matrix. Activate it on a
              patch. It will send personalized sequences to every target
              contact.
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

export default Hero;
