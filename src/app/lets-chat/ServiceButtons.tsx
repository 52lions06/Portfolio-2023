import React from "react";
import styles from "./ServiceButtons.module.css";

interface Props {
  setSelectedButton: (button: string) => void;
}

const ServiceButtons: React.FC<Props> = ({ setSelectedButton }) => {
  return (
    <>
      <button className={styles.btn} onClick={() => setSelectedButton("Make")}>
        <div>Make</div>
      </button>
      <button
        className={styles.btn}
        onClick={() => setSelectedButton("Markup")}
      >
        <div>Markup</div>{" "}
      </button>
      <button
        className={styles.btn}
        onClick={() => setSelectedButton("Manage")}
      >
        <div>Manage</div>{" "}
      </button>
    </>
  );
};

export default ServiceButtons;
