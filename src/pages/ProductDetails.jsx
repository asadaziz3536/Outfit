import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const Products = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const product = Products?.find((Product) => {
    return Product.id === parseInt(id);
  });
  // add a check for the presence of product before destructuring it
  if (!product) {
    return (
      <div className="h-screen flex justify-center items-center w-full ">
        <h3 className="h3">Loading...</h3>
      </div>
    );
  }
  const { image, title, description, price } = product;

  return (
    <section className="max-padd-container py-28 xl:py-32">
      <div className="flex flex-col xl:flex-row">
        <div className="flex-1 flexCenter">
          {/* image */}

          <img
            src={image}
            alt="Product Image"
            height={255}
            width={255}
            className="aspect-square p-1"
          />
        </div>
        {/* details */}
        <div className="flex-1">
          <h3 className="h3">{title}</h3>
          <h5 className="bold-24">${price}</h5>
          <p className="my-8">{description}</p>

          <button
            className="btn-dark"
            onClick={() => addToCart(product, product.id)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
