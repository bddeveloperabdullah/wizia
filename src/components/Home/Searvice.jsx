import React from "react";
import SectionTitle from "../../similar/SectionTitle";
import SectionP from "../../similar/SectionP";

const searviceItem = [
  {
    icon: "/icon1.png",
    title: "You’re in Control",
    desc: "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
  },
  {
    icon: "/icon2.png",
    title: "Infinitely Scalable",
    desc: "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.",
  },
  {
    icon: "/icon3.png",
    title: "Incredibly Flexible",
    desc: "Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.",
  },
];

const Searvice = () => {
  return (
    <>
      <section className="bg-primary py-20 px-5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-around gap-10 md:gap-5">
            {searviceItem.map((item, index) => (
              <div
                className="w-full md:w-[384px] flex flex-col gap-4"
                key={index}
              >
                <div>
                  <img
                    className="w-[40px] md:w-[64px]"
                    src={item.icon}
                    alt=""
                  />
                </div>
                <SectionTitle>{item.title}</SectionTitle>
                <SectionP>{item.desc}</SectionP>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Searvice;
