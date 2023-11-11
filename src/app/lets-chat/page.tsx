"use client";
import React, { useState } from "react";
import styles from "./LetsChat.module.css";
import SelectOption from "./SelectOption";
import ServiceButtons from "./ServiceButtons";
import ContactForm from "./ContactForm";
import ThankYou from "./ThankYouMessage";

const LetsChat = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedButton, setSelectedButton] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <main className={styles.letschat}>
      <h1 className={styles.title}>Lets chat</h1>
      {formSubmitted ? (
        <ThankYou />
      ) : (
        <section className={`${styles.selectbox} ${styles.contact}`}>
          {!selectedOption && (
            <SelectOption setSelectedOption={setSelectedOption} />
          )}
          {selectedOption === "Potential Job 💼" && !selectedButton && (
            <ContactForm
              setFormSubmitted={setFormSubmitted}
              selectedOption={selectedOption}
            />
          )}
          {selectedOption === "Would you like my services 💻" &&
            !selectedButton && (
              <ServiceButtons setSelectedButton={setSelectedButton} />
            )}
          {selectedOption === "Want to buy me a coffee 😎" &&
            !selectedButton && <h1>YOU ARE AWESOME, MAYBE LATER 😁</h1>}
          {selectedButton && !formSubmitted && (
            <ContactForm
              setFormSubmitted={setFormSubmitted}
              selectedOption={selectedOption}
              selectedButton={selectedButton}
            />
          )}
        </section>
      )}
    </main>
  );
};

export default LetsChat;
