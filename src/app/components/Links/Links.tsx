// src/app/components/Links/Links.tsx

import React from "react";
import Link from "next/link";
import styles from "./Links.module.css";

const Links = () => {
  return (
    <>
      <Link href="/what-i-do" className={styles.links}>
        What I Do
      </Link>
      <Link href="/what-im-building" className={styles.links}>
        What I&apos;m Building
      </Link>
      <Link href="/lets-chat" className={styles.links}>
        Let&apos;s Chat
      </Link>
    </>
  );
};

export default Links;
