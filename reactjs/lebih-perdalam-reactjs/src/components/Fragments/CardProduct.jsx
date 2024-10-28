import { Link } from "react-router-dom";
import Button from "../Elements/Button/Button";

const CardProduct = ({ children }) => {
  return (
    <div className="mx-3 my-2 flex w-full max-w-xs flex-col justify-between rounded-lg border border-gray-700 bg-gray-800 shadow">
      {children}
    </div>
  );
};

const Header = ({ image, id }) => {
  return (
    <Link to={`/product/${id}`}>
      <img
        src={image}
        alt="product"
        className="h-60 w-full rounded-t-lg object-cover p-8"
      />
    </Link>
  );
};

const Body = ({ name, children }) => {
  return (
    <div className="h-full px-5 pb-5">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name.substring(0, 25)}...
        </h5>
        <p className="text-sm text-white">{children.substring(0, 100)}...</p>
      </a>
    </div>
  );
};

const Footer = ({ id, price, handleAddToCart }) => {
  const changeMoney = (money) => {
    const cash = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(money);

    return cash;
  };

  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{changeMoney(price)}</span>
      <Button color="bg-blue-600" onClick={() => handleAddToCart(id)}>
        Add To Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
