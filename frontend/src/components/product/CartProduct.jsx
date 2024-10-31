import React, { useEffect, useState } from "react";
import QuantityButton from "../UIComponents/QuantityButton";
import { useDispatch } from "react-redux";
import { changeQuantity, removeItem } from "../../redux/slices/cartSlice";

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(parseInt(product.quantity));

  useEffect(() => {
    dispatch(changeQuantity({ id: product.id, quantity }));
  }, [quantity]);

  const removeFromCartHandler = (id) => {
    dispatch(removeItem(id));
  };

  const updateQuantityHandler = (q) => {
    setQuantity((currQuantity) => currQuantity + q);
  };

  return (
    <div className="w-full flex justify-between border-b-2 border-gray-200 pb-8 mb-8 flex-col sm:flex-row">
      <div className="flex flex-col sm:flex-row gap-9">
        <img src={product.image} alt="Product Image" className="sm:max-w-36" />
        <div className="flex flex-col sm:justify-between gap-4 sm:gap-0">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold gap-2 sm:gap-0">{product.name}</h2>
            <p className="text-sm">{product.description}</p>
          </div>
          <div className="flex items-center gap-7">
            <QuantityButton
              border={true}
              updateQuantity={updateQuantityHandler}
              quantity={product.quantity}
            />
            <span
              className="cursor-pointer underline underline-offset-8"
              onClick={() => removeFromCartHandler(product.id)}
            >
              Ukloni
            </span>
            <div className="sm:hidden flex-col gap-1.5 flex">
              <p className="text-3xl">
                {parseInt(product.price).toFixed(2)}{" "}
                <sup className="text-base">RSD</sup>
              </p>
              <p className="text-sm text-red-700 line-through">
                746 <sup className="no-underline">RSD</sup>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:flex flex-col gap-1.5 hidden">
        <p className="text-3xl">
          {parseInt(product.totalDiscountedPrice).toFixed(2)}{" "}
          <sup className="text-base">RSD</sup>
        </p>
        <p className="text-sm text-red-700 line-through">
          {parseInt(product.price).toFixed(2)}
          <sup className="no-underline">RSD</sup>
        </p>
      </div>
    </div>
  );
};
export default CartProduct;
