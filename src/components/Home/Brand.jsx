import React from "react";

const Brand = () => {
  return (
    <>
      <section className="bg-[#07292F] text-white pt-8 pb-10 px-5 -mt-0.5">
        <div className="container mx-auto">
          <div>
            <h3 className="text-center font-montserrat uppercase text-secondary">
              our trusted partners
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-5 mt-7">
              <img src="/BackHub logo.png" alt="" />
              <img src="/CableLabs logo.png" alt="" />
              <img src="/DBS logo.png" alt="" />
              <img src="/EasyEuro logo.png" alt="" />
              <img src="/AMD logo.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
