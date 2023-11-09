import sgMail from "@sendgrid/mail";

const apiKey = process.env.SENDGRID_API_KEY;
if (!apiKey) {
  throw new Error("SENDGRID_API_KEY is not defined");
}
sgMail.setApiKey(apiKey);

interface EmailData {
  fullname: string;
  phone: string;
  contactPreference: string;
  email: string;
  message: string;
  selectedOption: string;
  selectedButton?: string;
}

export async function sendEmail(data: EmailData) {
  const {
    fullname,
    phone,
    contactPreference,
    email,
    message,
    selectedOption,
    selectedButton,
  } = data;

  const subject = `${selectedOption} - ${
    selectedButton ? selectedButton : ""
  } - ${contactPreference}`;

  const body = `${contactPreference} to ${
    selectedButton ? selectedButton : email
  } from ${fullname}\n\n${message}\n\n${phone}\n${email}`;

  const msg = {
    to: "mckelveyoperations@gmail.com",
    from: email,
    subject: subject,
    text: body,
  };

  await sgMail.send(msg);
}
