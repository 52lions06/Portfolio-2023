import React, { useState, ChangeEvent } from "react";
// import emailjs from "emailjs-com";

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
        value={formValues.fullname}
        onChange={handleInputChange}
        placeholder="Full Name"
        required
      />
      <input
        type="tel"
        name="phone"
        value={formValues.phone}
        onChange={handleInputChange}
        placeholder="Phone Number"
        required
      />
      <div>
        <label>
          <input
            type="radio"
            name="contactPreference"
            value="text"
            checked={formValues.contactPreference === "text"}
            onChange={handleInputChange}
          />
          Text
        </label>
        <label>
          <input
            type="radio"
            name="contactPreference"
            value="call"
            checked={formValues.contactPreference === "call"}
            onChange={handleInputChange}
          />
          Call
        </label>
        <label>
          <input
            type="radio"
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
        value={formValues.email}
        onChange={handleInputChange}
        placeholder="Email"
        required
      />
      <textarea
        name="message"
        value={formValues.message}
        onChange={handleInputChange}
        placeholder="Message"
        required
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
