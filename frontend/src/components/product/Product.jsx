import React, { useState } from "react";
import QuantityButton from "../UIComponents/QuantityButton";
import { Cart } from "../../assets/icons/Cart";
import { addItem } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { Minus } from "../../assets/icons/Minus";
import { Plus } from "../../assets/icons/Plus";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const addToCartHandler = () => {
    dispatch(
      addItem({
        id: product.id,
        price: product.price,
        quantity: quantity,
        name: product.name,
        description: product.description,
        image: product.image,
        discount: parseInt(product.discount),
      }),
    ); // Add product to cart
  };

  const updateQuantityHandler = (q) => {
    setQuantity((currQuantity) => currQuantity + q);
  };

  return (
    <div className="card group">
      <div className="card-body relative">
        <img src={product.image} alt="Product Image" />
        <div className="absolute bottom-2 left-2 group-hover:flex gap-2 cursor-pointer hidden">
          <QuantityButton
            quantity={quantity}
            updateQuantity={updateQuantityHandler}
          ></QuantityButton>
          <span
            onClick={addToCartHandler}
            className="bg-black w-25 h-25 text-white p-2 rounded-full flex justify-center items-center cursor-pointer"
          >
            <Cart />
          </span>
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-4 mb-2">{product.name}</h2>
      <p className="text-3xl">
        {product.price} <sup className="text-base">RSD</sup>
      </p>
    </div>
  );
};
export default Product;
