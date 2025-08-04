import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <h2>
        <Link href="/">MyWebsite</Link>
      </h2>

      <nav className={styles.nav}>
        <ul className={styles.navLink}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/product">Product</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
