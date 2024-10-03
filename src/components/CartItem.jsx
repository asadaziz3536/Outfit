import React, { useContext } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { id, title, image, description, quantity, price } = item;

  console.log(item);
  const {
    addToCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  return (
    <div className="flex gap-x-3">
      {/* image */}
      <Link
        to={`/product/${id}`}
        className="flexCenter flex-grow-0 flex-shrink-0 flex-auto m-1 p-1 rounded-xl ring-1 ring-slate-900/5 h-[74px]"
      >
        <img
          src={image}
          alt=""
          width={55}
          height={55}
          className="object-contain aspect-square p-1"
        />
      </Link>
      {/* title and remove icon */}
      <div className="flex flex-col gap-y-2 flex-[4] mr-3">
        <div className="flex justify-between gap-8 items-baseline">
          <div className="medium-14 uppercase line-clamp-2">{title}</div>
          <div className="cursor-pointer text-gray-50">
            <MdClose onClick={() => removeFromCart(id)} />
          </div>
        </div>
        <div className="flexBetween items-baseline gap-8">
          <div className="flexBetween justify-between gap-4 ring-1 ring-slate-900/5 px-2">
            <FaMinus onClick={() => decreaseQuantity(id)} />
            <span>{quantity}</span>

            <FaPlus onClick={() => increaseQuantity(item, id)} />
          </div>

          <p>${price}</p>
          {/* final price */}
          <div className="">{`${parseFloat(price * quantity).toFixed(2)}`}</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
