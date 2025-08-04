"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <ul className="flex items-center text-sm text-blue-500 gap-2">
        <Link prefetch={false} scroll={false} href="/products/food" className={pathname === "/products/food" ? "text-red-500" : ""}>
          Food
        </Link>
        <Link replace={true} scroll={false} href="/products/sports" className={pathname === "/products/sports" ? "text-red-500" : ""}>
          Sports
        </Link>
        <Link scroll={false} href="/products/technology" className={pathname === "/products/technology" ? "text-red-500" : ""}>
          Technology
        </Link>
      </ul>
      {children}
    </>
  );
}
