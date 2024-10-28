import { useContext, createContext, useState } from "react";

function App() {
  const [nama, setNama] = useState("Reza Darmawangsa");
  return (
    <>
      <Context.Provider value={{ nama, setNama, umur: 23 }}>
        <Child1 />
      </Context.Provider>
    </>
  );
}

function Child1() {
  const data = useContext(Context);
  return (
    <>
      <h1>Saya dari Child1</h1>
      <p>yang isinya : {data.nama}</p>
      <Child2 />
    </>
  );
}
function Child2() {
  const data = useContext(Context);
  return (
    <>
      <h1>Saya dari Child2</h1>
      <p>yang isinya : {data.nama}</p>
      <Child3 />
    </>
  );
}
function Child3() {
  const data = useContext(Context);
  function clickHandler() {
    if (data.nama == "Reza Darmawangsa") {
      data.setNama("Ucup Susanto");
    } else {
      data.setNama("Reza Darmawangsa");
    }
  }
  return (
    <>
      <h1>
        Hello dari Child3 nama saya {data.nama} umur saya {data.umur}
      </h1>
      <button onClick={clickHandler}>Ganti nama</button>
    </>
  );
}

const Context = createContext();

export default App;
