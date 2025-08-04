"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  console.log(searchParams.get("q"));
  return (
    <div>
      <h1>Food Page</h1>
      <button onClick={() => router.push("/products")} className="border-4 border-slate-700 text-green-400">
        Go back to products
      </button>
    </div>
  );
};

export default Page;
