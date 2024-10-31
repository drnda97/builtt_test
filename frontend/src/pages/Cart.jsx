import Header from "../components/layout/Header";
import Button from "../components/UIComponents/Button";
import CartProduct from "../components/product/CartProduct";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, totalPriceWithoutDiscount, totalDiscountedPrice } =
    useSelector((state) => state.cart);

  return (
    <>
      <Header />
      <main className="container sm:px-12 px-4 mx-auto">
        <h1 className="text-2xl font-bold pb-11 pt-12">Tvoja korpa</h1>
        <div className="flex flex-col sm:flex-row gap-14">
          <div className="w-full flex flex-col">
            {items.length ? (
              items.map((product) => (
                <CartProduct product={product} key={product.id} />
              ))
            ) : (
              <div className="flex gap-6">
                <h2 className="text-xl font-bold">Korpa je prazna</h2>
                <Link to="/">
                  <Button className="w-full" text="Nazad na kupovinu" />
                </Link>
              </div>
            )}
          </div>
          <aside className="flex flex-col bg-gray-100 h-fit p-6 pb-28 rounded-md w-full max-w-96">
            <h2 className="text-xl font-bold">Tvoja narudžbina</h2>
            <div className="flex justify-between mt-3">
              <h3 className="text-lg">Ukupno</h3>
              <span className="text-lg">
                {totalPriceWithoutDiscount} <sup>RSD</sup>
              </span>
            </div>
            <div className="flex justify-between mt-3">
              <h3 className="text-lg">Ušteda</h3>
              <span className="text-lg">
                -{(totalPriceWithoutDiscount - totalDiscountedPrice).toFixed(2)}
                <sup>RSD</sup>
              </span>
            </div>
            <div className="flex justify-between mt-3">
              <h3 className="text-lg">Isporuka Daily Express*</h3>
              <span className="text-sm">Besplatna</span>
            </div>
            <div className="flex justify-between mt-3 border-t-2 border-gray-300 pt-3">
              <h3 className="text-lg">Ukupno za uplatu</h3>
              <span className="text-lg">
                {totalDiscountedPrice.toFixed(2)} <sup>RSD</sup>
              </span>
            </div>
            <small className="mb-8 mt-2.5">Cena je sa uključenim PDV-om</small>
            <Link to="/login">
              <Button className="w-full" text="Prijavi se za brže plaćanje" />
            </Link>
          </aside>
        </div>
      </main>
    </>
  );
};

export default Cart;
