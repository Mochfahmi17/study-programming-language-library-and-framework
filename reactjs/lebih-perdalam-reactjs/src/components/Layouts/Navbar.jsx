import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button/Button";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";

const Navbar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  const handleLogout = () => {
    if (confirm("Yakin ingin logout ?")) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
  };

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  return (
    <div className="flex h-20 items-center justify-end bg-blue-600 px-10 text-white">
      {username}
      <Button onClick={handleLogout} color="ml-5 bg-black">
        Logout
      </Button>
      <div className="mx-5 flex items-center rounded-md bg-gray-800 p-2">
        {totalCart}
      </div>
      <Button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="mx-5 rounded bg-black px-10 text-white"
      >
        {isDarkMode ? "Light" : "Dark"}
      </Button>
    </div>
  );
};

export default Navbar;
