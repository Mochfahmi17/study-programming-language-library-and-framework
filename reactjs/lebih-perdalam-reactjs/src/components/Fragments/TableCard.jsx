import { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";

const TableCard = ({ products }) => {
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);
  const { isDarkMode } = useContext(DarkMode);

  const changeMoney = (money) => {
    const cash = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(money);

    return cash;
  };

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <table
      className={`w-full table-auto overflow-x-scroll text-left ${isDarkMode && "text-white"}`}
    >
      <thead className={`bg-gray-100 ${isDarkMode && "bg-slate-800"}`}>
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
            const product = products.find((product) => product.id === item.id);
            return (
              <tr key={item.id}>
                <td className="px-4 py-2">
                  {product.title.substring(0, 15)}...
                </td>
                <td className="px-4 py-2">{changeMoney(product.price)}</td>
                <td className="px-4 py-2">{item.qty}</td>
                <td className="px-4 py-2">
                  {changeMoney(product.price * item.qty)}
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
  );
};

export default TableCard;
