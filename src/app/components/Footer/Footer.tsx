"use client";
import React from "react";
import ResumeBtn from "../ResumeBtn/ResumeBtn";
import styles from "./Footer.module.css";

const Footer = () => {
  // Function to download the software engineer resume
  const downloadSoftwareResume = () => {
    window.location.href = "/WilliamMcKelvey_SoftwareEngineerLeader.pdf";
  };

  // Function to download the project manager resume
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

      <p>© 2023 Another One....DJ Khaled voice anyone???</p>

      <ResumeBtn
        onClick={downloadProjectManagerResume}
        className={styles.downloadResume}
        text={"Project Manager Resume"}
      />
    </footer>
  );
};

export default Footer;
