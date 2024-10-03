import React, { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // load the initial cart state from local storage
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [total, setTotal] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(0);

  useEffect(() => {
    const total = cart.reduce((prevVal, currentVal) => {
      return prevVal + currentVal.price * currentVal.quantity;
    }, 0);

    setTotal(total);
  }, [cart]);
  useEffect(() => {
    const itemQuantity = cart.reduce((prevVal, currentVal) => {
      return prevVal + currentVal.quantity;
    }, 0);
    setItemQuantity(itemQuantity);
  }, [cart]);

  // add cart to local storage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // add product to cart
  const addToCart = (product, id) => {
    const cartItem = cart.find((Item) => {
      return Item.id === id;
    });

    if (cartItem) {
      const UpdatedCart = cart.map((Item) => {
        if (Item.id === id) {
          return { ...Item, quantity: cartItem.quantity + 1 };
        } else {
          return Item;
        }
      });

      setCart(UpdatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // remove product from cart

  const removeFromCart = (id) => {
    const newCart = cart.filter((Item) => {
      return Item.id !== id;
    });

    setCart(newCart);
  };

  // clear cart

  const clearCart = () => {
    setCart([]);
  };

  // increase quantity

  const increaseQuantity = (product, id) => {
    addToCart(product, id);
  };
  // decrease quantity

  const decreaseQuantity = (id) => {
    const cartItem = cart.find((Item) => {
      return Item.id === id;
    });
    if (cartItem) {
      const UpdatedCart = cart.map((Item) => {
        if (Item.id === id) {
          return { ...Item, quantity: cartItem.quantity - 1 };
        } else {
          return Item;
        }
      });
      setCart(UpdatedCart);
    }
    if (cartItem.quantity < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        total,
        itemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
