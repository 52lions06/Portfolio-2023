"use client";
import React from "react";
import styles from "./WhatIDo.module.css";

const WhatIDo = () => {
  return (
    <main>
      <h1 className={styles.title}>What I Do</h1>
      <section className={styles.flexContainer}>
        <div className={`${styles.manage} ${styles.box}`}>
          <h2 className={styles.title}>I Manage</h2>
          <b>
            {" "}
            Your Partner in People, Processes, Projects, and Products –
            Delivering with Heart and Results
          </b>
          <p style={{ textAlign: "center" }}>
            {" "}
            In partnering with me, you'll find a commitment to compassionate
            leadership and efficient management that uplifts teams and exceeds
            goals. My approach delivers exceptional value to both people and
            products, ensuring your success is met with integrity and meaningful
            results.
          </p>
        </div>
        <div className={`${styles.make} ${styles.box}`}>
          <h2 className={styles.title}> I Make </h2>
          <b>
            Tech Maestro: Coding Expertise and Integration Wizardry for
            Next-Level Solutions
          </b>
          <p>
            As a tech specialist who is commited to innovation, I excel in
            problem-solving and programming across languages like JavaScript,
            JAVA, and C++, using frameworks such as React, JQuery, and Kotlin. I
            swiftly deploy and manage digital platforms using Webflow,
            WordPress, and Wix.
          </p>
        </div>
        <div className={`${styles.markup} ${styles.box}`}>
          <h2 className={styles.title}> I Markup </h2>
          <b>
            Documentation Dynamo: Mastering Clarity and Continuity in Workflow
            Design
          </b>
          <p>
            I specialize in creating comprehensive, user-friendly documentation
            and workflows. My proficiency with tools like Atlassian's
            Confluence, Microsoft Office suite, GitHub, and more, allows me to
            create resources that are comprehensive, easily updatable, and able
            to facilitate continuous improvement and knowledge sharing.
          </p>
        </div>
      </section>
    </main>
  );
};

export default WhatIDo;
