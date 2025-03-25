import React, { useState } from "react";
import Button from "../../similar/Button";
import { IoIosClose, IoMdMenu } from "react-icons/io";

const menuItem = [
  { itemName: "About Us", url: "#" },
  { itemName: "Pricing", url: "#" },
  { itemName: "Customers", url: "#" },
  { itemName: "Solutions", url: "#" },
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
          {/* Desktop Menu  */}
          <nav className="flex justify-between items-center">
            <div>
              <a href="#">
                <img src="Logo.png" alt="Logo" />
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
                <IoMdMenu />
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 right-0 w-64 h-full bg-primary text-white transform ${
              menu ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out md:hidden`}
          >
            <button
              className="absolute top-5 right-5 text-3xl"
              onClick={handelToggleMenu}
            >
              <IoIosClose />
            </button>
            <ul className="flex flex-col gap-5 p-10 mt-16">
              {menuItem.map((item, index) => (
                <li key={index}>
                  <a href={item.url} className="text-lg">
                    {item.itemName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
