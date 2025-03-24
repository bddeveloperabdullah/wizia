import React, { useState } from "react";
import Button from "../../similar/Button";
import { IoIosClose, IoMdMenu } from "react-icons/io";

const menuItem = [
  {
    itemName: "About Us",
    url: "#",
  },
  {
    itemName: "Pricing",
    url: "#",
  },
  {
    itemName: "Customers",
    url: "#",
  },
  {
    itemName: "Solutions",
    url: "#",
  },
];

const Header = () => {
  const [menu, setMenu] = useState(false);
  const handelToggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <header className="bg-primary border-b border-borderColor py-6 px-5 lg:px-10">
        <div className="container mx-auto">
          <nav className="flex justify-between items-center">
            <div>
              <a href="#">
                <img src="Logo.png" alt="" />
              </a>
            </div>
            <div className="hidden md:flex gap-3.5 lg:gap-7">
              {menuItem.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  className="text-white font-worksans"
                >
                  {item.itemName}
                </a>
              ))}
            </div>
            <div className="flex gap-5">
              <div className="hidden md:flex gap-2.5 lg:gap-5">
                <Button>Book a Demo</Button>
                <Button className="bg-transparent border border-white text-white">
                  Contact Us
                </Button>
              </div>
              <button
                className="md:hidden text-3xl text-white cursor-pointer"
                onClick={handelToggleMenu}
              >
                {menu ? <IoIosClose /> : <IoMdMenu />}
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
