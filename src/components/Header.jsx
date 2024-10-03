import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./NavBar";
import { MdClose, MdMenu } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { SidebarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const [menuOpened, setmenuOpened] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemQuantity } = useContext(CartContext);

  const toggleMenu = () => {
    setmenuOpened(!menuOpened);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 40 ? setIsActive(true) : setIsActive(false);
    });
  }, []);
  return (
    <header
      className={`${
        isActive ? "bg-white shadow-sm py-2" : "bg-transparent py-4"
      } flex items-center justify-between w-full fixed top-0 left-0 right-0 transition-all z-10 duration-300 max-padd-container`}
    >
      {/* logo */}
      <Link to={"/"}>
        <h4 className="bold-24">
          Out <span className="text-secondary">Fit</span>
        </h4>
      </Link>

      {/* Navbar */}

      <div className="gap-x-10 flexBetween">
        {/* Navbar Desktop */}
        <Navbar
          containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"}
        />
        {/* Navbar Mobile */}
        <Navbar
          containerStyles={`${
            menuOpened
              ? "flex items-start flex-col top-20 fixed w-64 shadow-md rounded-3xl right-8 p-12 gap-y-12 bg-white medium-16 ring-1 ring-slate-900/5 transition-all"
              : "flex items-start flex-col top-20 fixed w-64 shadow-md rounded-3xl -right-[100%] p-12 gap-y-12 bg-white medium-16 ring-1 ring-slate-900/5 transition-all"
          }`}
        />
        {/* Navbar buttons */}

        <div className="flexBetween gap-x-3 sm:gap-x-8">
          {!menuOpened ? (
            <MdMenu
              onClick={toggleMenu}
              className="md:hidden cursor-pointer hover:text-secondary text-2xl"
            />
          ) : (
            <MdClose
              onClick={toggleMenu}
              className="md:hidden cursor-pointer hover:text-secondary text-2xl"
            />
          )}
          <Link className="flex relative" onClick={() => setIsOpen(!isOpen)}>
            <GiShoppingBag className="text-[25px]" />
            <span className="bg-secondary rounded-full absolute text-white flex justify-center items-center w-5 h-5 -top-1 -right-2.5 shadow-md">
              {itemQuantity}
            </span>
          </Link>
        </div>
        <button className="btn-outline rounded-full">login</button>
      </div>
    </header>
  );
};

export default Header;
