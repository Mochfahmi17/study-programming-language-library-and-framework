import { redirect } from "next/navigation";
import React from "react";

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return { message: "Sports Page" };
};

const Page = async () => {
  const isAdmin = true;
  const data = await getData();
  if (!isAdmin) {
    redirect("/products");
  }
  return <div>{data.message}</div>;
};

export default Page;
