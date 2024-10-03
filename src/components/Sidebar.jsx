import React, { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { IoMdArrowForward } from "react-icons/io";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { TbTrash } from "react-icons/tb";
const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, total, itemQuantity, clearCart } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0 top-0" : "-right-full top-0"
      } fixed bg-white shadow-2xl   h-full z-50 w-[100vw] sm:w-[55vw] md:w-[44vw] xl:w-[400px] transition-all duration-300 px-2 lg:px-[20px] overflow-auto`}
    >
      <div className="flexBetween py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemQuantity})
        </div>
        {/* icon */}
        <div>
          <IoMdArrowForward onClick={handleClose} className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-4  h-[411px] overflow-x-hidden overflow-y-auto border-b my-6">
        {cart.map((Item) => {
          return <CartItem item={Item} key={Item.id} />;
        })}
      </div>

      <div className="flex flex-col gap-y-2">
        {/* total price */}
        <div className="flexBetween">
          <div className="uppercase bold-16">
            <span className="uppercase bold-16s">Total =</span> $
            {parseFloat(total).toFixed(2)}
          </div>
          <TbTrash onClick={() => clearCart()} className="text-2xl" />
        </div>
        <div className="flex flex-col gap-y-2">
          <button className="btn btn-light">View Cart</button>
          <button className="btn btn-dark">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
