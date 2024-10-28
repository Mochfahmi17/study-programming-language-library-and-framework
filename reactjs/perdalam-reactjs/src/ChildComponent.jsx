import { memo } from "react";
const ChildComponent = ({ name, aksi }) => {
  console.log("ChildComponent rendered");
  return (
    <div>
      <h1>ChildComponent dengan nama {name}</h1>
      <button onClick={aksi}>Channel Name</button>
    </div>
  );
};

export default memo(ChildComponent);
