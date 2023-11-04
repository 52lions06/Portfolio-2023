// src/app/components/Header/Header.tsx

import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Links from "../Links/Links";

const Header = () => (
  <header className={styles.header}>
    <div>
      <Link href={"/"} className={styles.icon} />
    </div>
    <nav>
      <Links />
    </nav>
  </header>
);

export default Header;
