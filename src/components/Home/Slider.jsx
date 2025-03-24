import React, { useState } from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import { useSwipeable } from "react-swipeable";

const sliderItem = [
  {
    id: 1,
    text: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    userName: "Abdullah",
    userInfo: "abdullah@gmail.com",
  },
  {
    id: 2,
    text: "Donec auctor turpis at nisi vulputate, non pretium risus sagittis. Nulla facilisi. Etiam varius leo ac est dapibus luctus.",
    userName: "Shihab",
    userInfo: "shihab@gmail.com",
  },
  {
    id: 3,
    text: "Curabitur tempor ut lectus nec varius. Fusce feugiat libero ac mauris volutpat, in gravida sem pulvinar.",
    userName: "Shahin",
    userInfo: "shahin@gmail.com",
  },
  {
    id: 4,
    text: "Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
    userName: "Jousna",
    userInfo: "jousna@gmail.com",
  },
  {
    id: 5,
    text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Duis aliquet egestas purus in blandit.",
    userName: "Siam",
    userInfo: "siam@gmail.com",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlider = sliderItem[currentIndex];

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < sliderItem.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handelDotClick = (el) => {
    setCurrentIndex(el);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <>
      <section className="py-24 px-10">
        <div className="container mx-auto">
          <div className="flex justify-between items-center gap-5">
            {/* Prev Arrow Btn  */}
            <div>
              <div
                className={`hidden size-10 rounded-md bg-[#96ACAF33] cursor-pointer md:flex justify-center items-center`}
                onClick={handlePrev}
              >
                <FaArrowLeft
                  className={`text-xl  ${
                    currentIndex === 0 ? "text-[#96ACAF]" : "text-secondary"
                  }`}
                />
              </div>
            </div>

            <div
              {...handlers}
              className="w-[920px] flex flex-col justify-center items-center gap-11"
            >
              <div className="size-[56px] lg:size-[74px] rounded-full bg-[#183A40] flex justify-center items-center">
                <RiDoubleQuotesL className="text-4xl text-secondary" />
              </div>
              <h3 className=" text-2xl lg:text-3xl text-white text-center font-worksans font-light">
                {currentSlider.text}
              </h3>
              <div className="text-center">
                <h3 className="text-lg lg:text-2xl text-secondary font-worksans font-semibold">
                  {currentSlider.userName}
                </h3>
                <p className="text-xl text-[#96ACAF] font-worksans font-normal">
                  {currentSlider.userInfo}
                </p>
              </div>
            </div>

            {/* Next Arrow Btn  */}
            <div>
              <div
                className="hidden size-10 rounded-md bg-[#96ACAF33] cursor-pointer md:flex justify-center items-center"
                onClick={handleNext}
              >
                <FaArrowRight
                  className={`text-xl ${
                    currentIndex === sliderItem.length - 1
                      ? " text-[#96ACAF]"
                      : "text-secondary"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Arrow Dot Btn  */}
          <div>
            <div className="flex justify-center items-center gap-3.5 mt-10">
              {Array.from(Array(sliderItem.length).keys()).map((el) => (
                <div
                  className={`size-2.5 rounded-full cursor-pointer ${
                    el === currentIndex ? "bg-secondary" : "bg-[#394648]"
                  }`}
                  key={el}
                  onClick={() => handelDotClick(el)}
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
