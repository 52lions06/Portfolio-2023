// import { NextApiRequest, NextApiResponse } from "next";
// import sgMail from "@sendgrid/mail";
// import { NextHandler } from "next-connect";
// import nextConnect from "next-connect";

// const apiKey = process.env.SENDGRID_API_KEY;
// if (!apiKey) {
//   throw new Error("SENDGRID_API_KEY is not defined");
// }
// sgMail.setApiKey(apiKey);

// const handler = nextConnect();

// handler.use((req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
//   req.body = JSON.parse(req.body);
//   next();
// });

// handler.post((req: NextApiRequest, res: NextApiResponse) => {
//   console.log("request: ", req);
//   console.log("BODY: ", req.body);
//   console.log("response: ", res);

//   const {
//     fullname,
//     email,
//     phone,
//     contactPreference,
//     message,
//     selectedOption,
//     selectedButton,
//   } = req.body;

//   const msg = {
//     to: "mckelveyoperations@gmail.com",
//     from: "will@robotwork.ai",
//     subject: `${selectedOption} - ${
//       selectedButton ? selectedButton : ""
//     } - ${contactPreference} would like to work together 😎`,
//     text: `${fullname}\n${email}\n${phone}\nContact Preference: ${contactPreference}\n\nMessage: ${message}`,
//   };

//   try {
//     sgMail.send(msg);
//     res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error sending email" });
//   }
// });

// export default handler;
