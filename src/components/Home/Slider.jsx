import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";

const Slider = () => {
  return (
    <>
      <section className="py-24 px-10">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <div className="hidden size-10 rounded-md bg-[#96ACAF33] cursor-pointer md:flex justify-center items-center">
                <FaArrowLeft className="text-xl text-[#96ACAF]" />
              </div>
            </div>

            <div className="w-[920px] flex flex-col justify-center items-center gap-11">
              <div className="size-[74px] rounded-full bg-[#183A40] flex justify-center items-center">
                <RiDoubleQuotesL className="text-4xl text-secondary" />
              </div>
              <h3 className="text-3xl text-white text-center font-worksans font-light">
                Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </h3>
              <div className="text-center">
                <h3 className="text-2xl text-secondary font-worksans font-semibold">
                  Abdullah
                </h3>
                <p className="text-xl text-[#96ACAF] font-worksans font-normal">
                  abdullah@gmail.com
                </p>
              </div>
            </div>

            <div>
              <div className="hidden size-10 rounded-md bg-[#96ACAF33] cursor-pointer md:flex justify-center items-center">
                <FaArrowRight className="text-xl text-secondary" />
              </div>
            </div>
          </div>

          <div className="sliderBullet">
            <div className="flex justify-center items-center gap-3.5 mt-10">
              {Array.from(Array(5).keys()).map((el) => (
                <div
                  className="size-2.5 rounded-full bg-secondary cursor-pointer"
                  key={el}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
