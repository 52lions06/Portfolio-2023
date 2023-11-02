"use client";
import React from "react";
import Link from "next/link";
import ResumeBtn from "../ResumeBtn/ResumeBtn";
import styles from "./Footer.module.css";

const Footer = () => {
  const downloadSoftwareResume = () => {
    window.location.href = "/WilliamMcKelvey_SoftwareEngineerLeader.pdf";
  };

  const downloadProjectManagerResume = () => {
    window.location.href = "/WilliamMcKelvey_Project_Manager.pdf";
  };

  return (
    <footer className={styles.footer}>
      <ResumeBtn
        onClick={downloadSoftwareResume}
        className={styles.downloadResume}
        text={"Software Engineer Resume"}
      />

      <p>
        <a
          href="https://github.com/52lions06"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2023 Another One....DJ Khaled voice anyone???
        </a>
      </p>

      <ResumeBtn
        onClick={downloadProjectManagerResume}
        className={styles.downloadResume}
        text={"Project Manager Resume"}
      />
    </footer>
  );
};

export default Footer;
