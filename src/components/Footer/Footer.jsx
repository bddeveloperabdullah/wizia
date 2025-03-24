import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#07292F] py-10 lg:px-10">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row  justify-between items-center gap-5 lg:gap-0">
            <a href="#">
              <img src="footerLogo.png" alt="" />
            </a>
            <p className="text-[#96ACAF] font-worksans">
              Copyright © {new Date().getFullYear()} Wizia. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
