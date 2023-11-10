import { NextApiRequest, NextApiResponse } from "next";
import mail from "@sendgrid/mail";

const apiKey = process.env.SENDGRID_API_KEY;
if (!apiKey) {
  throw new Error("SENDGRID_API_KEY is not defined");
}

mail.setApiKey(apiKey);

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("request: ", req);
  console.log("response: ", res);

  if (req.method === "POST") {
    const {
      fullname,
      email,
      phone,
      contactPreference,
      message,
      selectedOption,
      selectedButton,
    } = req.body;

    const msg = {
      to: "mckelveyoperations@gmail.com",
      from: "will@robotwork.ai",
      subject: `${selectedOption} - ${
        selectedButton ? selectedButton : ""
      } - ${contactPreference} would like to work together 😎`,
      text: `${fullname}\n${email}\n${phone}\nContact Preference: ${contactPreference}\n\nMessage: ${message}`,
    };

    try {
      await mail.send(msg);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error sending email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

export default POST;
