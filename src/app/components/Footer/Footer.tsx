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

  const adjustTextForScreenSize = (typeOfText: string) => {
    let screenWidth = window.innerWidth;
    let text;

    if (screenWidth <= 400) {
      if (typeOfText === "software") {
        text = "Developer Resume";
      } else {
        text = "PM Resume";
      }
    } else {
      if (typeOfText === "software") {
        text = "Software Engineer Resume";
      } else {
        text = "Project Manager Resume";
      }
    }

    return text;
  };

  // Initial check

  return (
    <footer className={styles.footer}>
      <ResumeBtn
        onClick={downloadSoftwareResume}
        className={styles.downloadResume}
        text={adjustTextForScreenSize("software")}
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
        text={adjustTextForScreenSize("project-management")}
      />
    </footer>
  );
};

export default Footer;
