import React, { useContext } from "react";
import { FaLink, FaPlus, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Product = ({ product }) => {
  const { category, description, id, image, price, rating, title } = product;
  const { addToCart } = useContext(CartContext);
  return (
    <div className="bg-white ring-1 ring-slate-900/5 rounded-xl group">
      <div className="bg-white flexCenter rounded-xl ring-1 ring-slate-200/20 shadow-sm m-1.5 py-10 relative">
        <img
          src={image}
          alt=""
          width={122}
          height={122}
          className="object-contain aspect-square"
        />

        <span
          className={
            id === 1 || id === 2 || id === 3
              ? "font-bold absolute  top-3 left-3 bg-[#e3f7fa] rounded-full p-1 px-2"
              : "hidden"
          }
        >
          NEW
        </span>
        <span className="flexCenter gap-x-1 font-bold absolute top-3 right-3 bg-[#e3f7fa] rounded-full p-1 px-2">
          <FaStar className="text-yellow-500" />
          {rating.rate}
        </span>

        <div className="absolute -bottom-4 right-3 flexCenter flex-col ring-1 ring-slate-900/5 rounded-full gap-2 p-1">
          <Link
            to={`/product/${id}`}
            className="hidden group-hover:flex duration-300"
          >
            <FaLink className="bg-secondary text-white h-7 w-7 p-1.5 rounded-full" />
          </Link>
          <FaPlus
            onClick={() => addToCart(product, id)}
            className="bg-secondary text-white h-7 w-7 p-1.5 rounded-full"
          />
        </div>
      </div>
      <div className="p-3">
        <h5 className="text-gray-900/50 mb-1">{category}</h5>
        <h4 className="bold-15 mb-1 line-clamp-1">{title}</h4>
        <p className="line-clamp-2">{description}</p>
        <div className="flexBetween my-1">
          <h6 className="bold-16 text-secondary">${price}</h6>
          <p className="text-sm">sales ({rating.count})</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Product;
