import { Fragment, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProduct } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCard from "../components/Fragments/TableCard";
import Navbar from "../components/Layouts/Navbar";

const ProductsPage = () => {
  // const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  useLogin();

  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);

  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className="flex justify-center py-5">
        <div className="flex w-4/6 flex-wrap">
          {products.length > 0 &&
            products.map((product) => {
              return (
                <CardProduct key={product.id}>
                  <CardProduct.Header image={product.image} id={product.id} />
                  <CardProduct.Body name={product.title}>
                    {product.description}
                  </CardProduct.Body>
                  <CardProduct.Footer id={product.id} price={product.price} />
                </CardProduct>
              );
            })}
        </div>
        <div className="w-2/6">
          <h1 className="mb-3 ml-3 text-3xl font-bold text-slate-700">Cart</h1>
          <TableCard products={products} />
          <div className="overflow-auto"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
