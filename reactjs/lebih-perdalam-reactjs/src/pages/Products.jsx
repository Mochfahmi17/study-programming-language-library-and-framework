import { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button/Button";
import { getProduct } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin();

  const handleLogout = () => {
    if (confirm("Yakin ingin logout ?")) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qyt: item.qyt + 1 } : item,
        ),
      );
    } else {
      setCart([...cart, { id, qyt: 1 }]);
    }
  };

  const changeMoney = (money) => {
    const cash = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(money);

    return cash;
  };

  // useRef
  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  const handleAddToCartRef = (id) => {
    cartRef.current = [...cartRef.current, { id, qyt: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  };

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qyt;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Fragment>
      <div className="flex h-20 items-center justify-end bg-blue-600 px-10 text-white">
        {username}
        <Button onClick={handleLogout} color="ml-5 bg-black">
          Logout
        </Button>
      </div>
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
                  <CardProduct.Footer
                    id={product.id}
                    price={product.price}
                    handleAddToCart={handleAddToCart}
                  />
                </CardProduct>
              );
            })}
        </div>
        <div className="w-2/6">
          <h1 className="mb-3 ml-3 text-3xl font-bold text-slate-700">Cart</h1>

          <div className="overflow-auto">
            <table className="w-full table-auto overflow-x-scroll text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Product</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Total</th>
                </tr>
              </thead>
              <tbody className="text-nowrap text-sm">
                {products.length > 0 &&
                  cart.map((item) => {
                    const product = products.find(
                      (product) => product.id === item.id,
                    );
                    return (
                      <tr key={item.id}>
                        <td className="px-4 py-2">
                          {product.title.substring(0, 15)}...
                        </td>
                        <td className="px-4 py-2">
                          {changeMoney(product.price)}
                        </td>
                        <td className="px-4 py-2">{item.qyt}</td>
                        <td className="px-4 py-2">
                          {changeMoney(product.price * item.qyt)}
                        </td>
                      </tr>
                    );
                  })}
                <tr ref={totalPriceRef}>
                  <th colSpan={3} className="px-4 py-2">
                    Total Price
                  </th>
                  <th className="px-4 py-2">{changeMoney(totalPrice)}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
