import React from "react";

const counterItem = [
  {
    counter: "32%",
    title: "Improvement in Open Rates",
  },
  {
    counter: "75%",
    title: "Improvement in Ramp Time",
  },
  {
    counter: "35%",
    title: "Improvement in Meetings Booked",
  },
];

const Counter = () => {
  return (
    <>
      <section className="px-5">
        <div className="container mx-auto">
          <div className="bg-[url('/mobileBg2.png')] md:bg-[url('/BG2.png')] bg-center bg-cover bg-no-repeat p-10 lg:p-20 rounded-2xl">
            <div className="space-y-3.5">
              <h2 className="w-[279px] lg:w-[591px] text-[28px] lg:text-[32px] text-white font-montserrat font-semibold">
                Allocate effort where your reps make an inpact.
              </h2>
              <h3 className="text-2xl lg:text-[32px] text-secondary italic font-montserrat font-[500]">
                Let us handle the rest.
              </h3>
              <p className="w-[279px] lg:w-[582px] text-lg md:text-xl text-white font-worksans font-light">
                Keep your reps “in the air” -- out in the field and on the phone
                where they can build relationships.
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-start gap-5 md:gap-10 mt-10 md:mt-20">
              {counterItem.map((item, index) => (
                <div key={index}>
                  <h2 className="text-[32px] lg:text-[40px] text-secondary font-montserrat font-bold">
                    {item.counter}
                  </h2>
                  <p className="w-full md:w-[174px] text-lg md:text-xl text-[#E9EEF1] font-montserrat font-[500]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
