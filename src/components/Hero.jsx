import React from "react";
import { PiArrowUpRightBold, PiBagBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="max-padd-container bg-hero bg-cover bg-no-repeat h-[811px] bg-center  inset-0"
    >
      <div className="relative top-44 xs:top-60 max-w-[777px]">
        <h2 className="h1 capitalize max-w-[611px]">
          Elevate your wardrobe with trendy fashion from
          <span className="bg-secondary px-2 rounded-full">OutFit</span>
        </h2>
        <div className="flex-col-reverse md:flex md:flex-row gap-x-10 mt-28">
          <Link
            to={""}
            className="bg-tertiary text-white flexCenter rounded-full pl-5 gap-x-2 w-full"
          >
            Latest Products
            <PiBagBold className="bg-white text-tertiary text-4xl rounded-full p-2.5" />
            <PiArrowUpRightBold className="bg-white text-tertiary text-4xl rounded-full p-2.5" />
          </Link>
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iusto
            deleniti rem amet architecto velit ipsam, tenetur doloremque. Quasi
            neque tempore rerum veniam
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
