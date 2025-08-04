"use client";

const getRandomItem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export default function RootLayout({ children }) {
  const item = getRandomItem(["", "ikan"]);

  if (item === "") {
    throw new Error("Item is empty!");
  }
  return (
    <>
      <div>Layout note {item}</div>
      {children}
    </>
  );
}
