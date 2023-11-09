import React, { useState, ChangeEvent } from "react";
// import emailjs from "emailjs-com";
import styles from "./ContactForm.module.css";

interface Props {
  setFormSubmitted: (submitted: boolean) => void;
}

const ContactForm: React.FC<Props> = ({ setFormSubmitted }) => {
  const [formValues, setFormValues] = useState({
    fullname: "",
    phone: "",
    contactPreference: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    // emailjs
    //   .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formValues, "YOUR_USER_ID")
    //   .then(
    //     (response) => {
    //       console.log("SUCCESS!", response.status, response.text);
    //       setFormSubmitted(true);
    //     },
    //     (err) => {
    //       console.log("FAILED...", err);
    //     }
    //   );
  };

  return (
    <form onSubmit={handleSubmit}>
      {" "}
      <input
        type="text"
        name="fullname"
        className={`${styles.forminput} ${styles.inputheight}`}
        value={formValues.fullname}
        onChange={handleInputChange}
        placeholder="Full Name"
        required
      />
      <input
        type="tel"
        name="phone"
        className={`${styles.forminput} ${styles.inputheight}`}
        value={formValues.phone}
        onChange={handleInputChange}
        placeholder="Phone Number"
      />
      <div className={styles.radiosection}>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            name="contactPreference"
            value="text"
            checked={formValues.contactPreference === "text"}
            onChange={handleInputChange}
          />
          Text
        </label>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            name="contactPreference"
            value="call"
            checked={formValues.contactPreference === "call"}
            onChange={handleInputChange}
          />
          Call
        </label>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            name="contactPreference"
            value="email"
            checked={formValues.contactPreference === "email"}
            onChange={handleInputChange}
          />
          Email
        </label>
      </div>
      <input
        type="email"
        name="email"
        className={`${styles.forminput} ${styles.inputheight}`}
        value={formValues.email}
        onChange={handleInputChange}
        placeholder="Email"
        required
      />
      <textarea
        name="message"
        className={`${styles.forminput} ${styles.messageheight}`}
        value={formValues.message}
        onChange={handleInputChange}
        placeholder="Message"
        required
      />
      <div className={styles.buttonsection}>
        <button type="submit" className={styles.glowingBtn}>
          <span className={styles.glowingTxt}>
            S<span className={styles.faultyLetter}>E</span>ND
          </span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

{
  /* <button classname="glowing-btn">
  <span class="glowing-txt">
    C<span class="faulty-letter">L</span>ICK
  </span>
</button>; */
}
