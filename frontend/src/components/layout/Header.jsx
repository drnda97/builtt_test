import React from "react";
import { Logo } from "../../assets/icons/Logo";
import { Cart } from "../../assets/icons/Cart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { totalQuantity } = useSelector((state) => state.cart);
  return (
    <header className="flex justify-center items-center bg-customGray sm:px-0 px-4">
      <div className="container flex justify-between items-center pt-5 pb-2.5">
        <Link to={"/"}>
          <Logo />
        </Link>
        <Link to={"/cart"}>
          <div className="relative flex justify-center items-center">
            <span className="absolute top-50 left-50 pt-1 text-xs">
              {totalQuantity}
            </span>
            <Cart />
          </div>
        </Link>
      </div>
    </header>
  );
};
export default Header;
