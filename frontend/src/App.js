import Header from "./components/layout/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./redux/slices/productSlice";
import Product from "./components/product/Product";

function App() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className="container sm:px-12 px-4 mx-auto">
        <div className="flex gap-1.5 pb-8 pt-10 items-center">
          <h1 className="text-2xl font-bold">Svi proizvodi</h1>
          <span className="text-xl text-slate-400">
            {products.length} proizvoda
          </span>
        </div>
        <div className="grid sm:grid-cols-4 grid-cols-1 gap-x-5 gap-y-14 sm:mb-36 mb-16">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
