// app/layout.tsx

import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link href={"/"}>
          <img src="icon.png" alt="Icon" className={styles.icon} />
        </Link>
      </div>
      <nav>
        <Link href="/what-i-do" className={styles.links}>
          What I Do
        </Link>
        <Link href="/what-im-building" className={styles.links}>
          What I'm Building
        </Link>
        <Link href="/lets-chat" className={styles.links}>
          Let's Chat
        </Link>
      </nav>
    </header>
  );
};

export default Header;
