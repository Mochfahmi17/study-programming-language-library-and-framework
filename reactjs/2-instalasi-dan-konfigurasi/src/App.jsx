/* eslint-disable react/prop-types */
import { useState } from "react";
import Header from "./components/Header.jsx";

function App() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header />
      <button onClick={handleClick}>like ({likes})</button>
    </div>
  );
}

export default App;
