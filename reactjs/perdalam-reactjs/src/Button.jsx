import { useState, useEffect } from "react";

const Button = () => {
  const [countLike, setCountLike] = useState(0);
  const [countDislike, setCountDislike] = useState(0);
  useEffect(() => {
    console.log(`like di klik ${countLike} kali | dislike di klik ${countDislike} kali`);
  }, [countLike]);
  return (
    <>
      <button onClick={() => Button(setCountLike(countLike + 1))}>Like 👍({countLike})</button>
      <button onClick={() => Button(setCountDislike(countDislike + 1))}>Dislike 👎({countDislike})</button>
    </>
  );
};

export default Button;
