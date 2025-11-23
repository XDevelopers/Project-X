


import nodemailer from "nodemailer";

const sendEmail = async (to, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your gmail
        pass: process.env.EMAIL_PASS, // app password
      },
    });
    console.log(transporter)

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: to,
      subject: "Your OTP Code",
      text: text,
    });

    console.log("Email sent successfully");
  } catch (error) {
    console.log("Email not sent:", error);
    throw new Error("Email sending failed");
  }
};

export default sendEmail;
   