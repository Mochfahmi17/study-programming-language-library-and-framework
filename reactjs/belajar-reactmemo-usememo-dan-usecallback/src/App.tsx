import { memo, useState } from "react";

export default function App() {
  console.log("parent rendered");
  const [product, setProduct] = useState({
    name: "Handphone",
    price: "2000000",
  });
  const [counter, setCounter] = useState(0);

  const handleChangeName = () => {
    setProduct((prev) => ({ ...prev, name: "Laptop" }));
  };
  return (
    <div className="">
      <p>counter is {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Click for increment</button>
      <Child product={product} />
      <button onClick={handleChangeName}>Click for change name</button>
    </div>
  );
}

type ChildProps = {
  product: {
    name: string;
    price: string;
  };
};

export const Child = memo(({ product }: ChildProps) => {
  console.log("child is rendered");
  return <p>my name {product.name}</p>;
});
