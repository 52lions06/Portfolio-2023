import React from "react";
import styles from "./ThankYouMessage.module.css";

const Bird = () => {
  return (
    <>
      <div
        style={{
          width: "25%", // set the width to 25% of the parent
          height: "0",
          paddingBottom: "25%", // set the padding-bottom to 25% of the width to maintain aspect ratio
          position: "relative",
          borderRadius: "50%", // this will make the div circular
          overflow: "hidden", // this will hide the excess part of the iframe to maintain the circular shape
          background: "transparent", // assuming the iframe background is white and you want to make it transparent
        }}
      >
        <iframe
          src="https://giphy.com/embed/5PSPV1ucLX31u"
          width="100%"
          height="100%"
          style={{ position: "absolute" }}
          frameBorder="0"
          className="giphy-embed"
        ></iframe>
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
          cursor: "default", // Optional: change the cursor to indicate non-interactivity
          zIndex: "1", // Ensure this div is above the iframe
        }}
      ></div>
      <div className={styles.thankyoumessage}>
        <strong>Thank you for your message, I&apos;ll be in touch soon </strong>
      </div>
    </>
  );
};

export default Bird;
