import React from "react";
import SectionP from "../../similar/SectionP";
import { FaCheck } from "react-icons/fa";

const preferedItem = [
  "Quick to ramp",
  "Easy to optimize",
  "Quick to scale up",
  "Works with all your existing tools",
];

const Prefered = () => {
  return (
    <>
      <section className="px-5">
        <div className="container mx-auto">
          <div className="w-[327px] md:w-auto 2xl:w-[1200px] m-auto bg-[url('/mobileBg2.png')] md:bg-[url('/BG1.png')] bg-center bg-cover bg-no-repeat p-5 md:p-20 rounded-xl ">
            <div className=" flex justify-center items-start">
              <div>
                <h3 className="text-[28px] md:text-[40px] font-montserrat font-semibold text-white tracking-[-1%]">
                  Train your aiDR on your...
                </h3>
                <h3 className="text-[28px] md:text-[40px] text-secondary italic font-montserrat font-[500]">
                  prefered email st|
                </h3>
                <SectionP className="w-[280px] md:w-[420px] mt-5">
                  You’re in control. Train your aiDR on elements of your
                  Marketing strategy.
                </SectionP>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-6">
                  {preferedItem.map((item, index) => (
                    <div className="flex items-center gap-2.5" key={index}>
                      <div className="size-6 rounded-full border border-secondary flex justify-center items-center">
                        <FaCheck className="text-xs text-secondary" />
                      </div>
                      <p className="text-base md:text-xl text-acent font-montserrat font-[500]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Prefered;
