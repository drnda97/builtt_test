import React from "react";

const Button = ({ disabled, text, className }) => {
  return (
    <button
      disabled={disabled}
      className={`${className} bg-black text-white py-2 px-4 rounded-full text-lg font-light`}
    >
      {text}
    </button>
  );
};
export default Button;
