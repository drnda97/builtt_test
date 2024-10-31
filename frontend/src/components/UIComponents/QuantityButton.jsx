import React from "react";
import { Minus } from "../../assets/icons/Minus";
import { Plus } from "../../assets/icons/Plus";

const QuantityButton = ({ border, updateQuantity, quantity }) => {
  return (
    <>
      <div
        className={`relative flex items-center max-w-[8rem] rounded-3xl ${border ? "border border-black" : ""}`}
      >
        <button
          type="button"
          id="decrement-button"
          data-input-counter-decrement="quantity-input"
          className="bg-white border-0 rounded-s-3xl p-3 h-11 focus:ring-gray-100 focus:outline-none"
          onClick={() => updateQuantity(-1)}
        >
          <Minus />
        </button>
        <input
          disabled={true}
          type="text"
          id="quantity-input"
          data-input-counter="0"
          aria-describedby="helper-text-explanation"
          className="bg-white border-0 h-11 text-center text-gray-900 text-lg block w-full py-2.5 focus:border-0 focus:outline-none"
          placeholder="1"
          value={quantity}
          required
        />
        <button
          type="button"
          id="increment-button"
          data-input-counter-increment="quantity-input"
          className="bg-white border-0 rounded-e-3xl p-3 h-11 focus:outline-none"
          onClick={() => updateQuantity(1)}
        >
          <Plus />
        </button>
      </div>
    </>
  );
};
export default QuantityButton;
