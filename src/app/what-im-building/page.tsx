import React from "react";
import styles from "./WhatImBuilding.module.css";

const WhatImBuilding = () => {
  return (
    <main>
      <h1 className={styles.title}>What I&apos;m Building</h1>
      <div className={styles.scene}>
        <iframe
          src="https://giphy.com/embed/iHD88spVFkL7mZakwa"
          width="160"
          height="160"
          className={`${styles.circleiframe} ${styles.animate}`}
        ></iframe>
        <iframe
          src="https://giphy.com/embed/cfGmVRsJI6wq6noGxP"
          width="160"
          height="160"
          className={`${styles.circleiframe} ${styles.animate}`}
          style={{ animationDelay: "3.3s" }}
        ></iframe>
        <iframe
          src="https://giphy.com/embed/fVeAI9dyD5ssIFyOyM"
          width="160"
          height="160"
          className={`${styles.circleiframe} ${styles.animate}`}
          style={{ animationDelay: "6.6s" }}
        ></iframe>
      </div>
    </main>
  );
};

export default WhatImBuilding;
