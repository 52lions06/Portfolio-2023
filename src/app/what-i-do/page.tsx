"use client";
import React from "react";
import styles from "./WhatIDo.module.css";

const WhatIDo = () => {
  const boxStyle = {
    transition: "background-color 0.3s",
    ":hover": {
      backgroundColor: "#e0e0ff",
    },
  };

  return (
    <main>
      <h1>What I Do</h1>
      <section className={styles.flexContainer}>
        <div className={styles.box} style={boxStyle}>
          <h2>I Manage</h2>
          <p> People| Processes | Projects | Products</p>
          <p> short description of what I am managing</p>
        </div>
        <div className={styles.box} style={boxStyle}>
          <h2> I Make </h2>
          <ul>
            <li>Code</li>
            <p>Javascript | JAVA | C++</p>
            <li> Websites </li>
            <p> Wix | Webflow | Wordpress </p>
            <p> Maybe just replace with a short description of what I do</p>
          </ul>
        </div>
        <div className={styles.box} style={boxStyle}>
          <h2> I Markup </h2>
          <p>
            {" "}
            short description stating that I have used confluence, atlassian,
            Microsoft Office to document clear no nonesence processes and
            workflows that are easy to understand implement and update when
            necessary
          </p>
        </div>
      </section>
    </main>
  );
};

export default WhatIDo;
