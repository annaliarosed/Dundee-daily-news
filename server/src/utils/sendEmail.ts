import nodemailer from "nodemailer";
import "dotenv/config";

export async function sendEmail(from: string, name: string, text: string) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "dundeedailynews@gmail.com",
      pass: process.env.NODE_MAILER_PASSWORD,
    },
  });

  let mailOptions = {
    from: { name: name, address: from },
    to: "dundeedailynews@gmail.com",
    subject: "Web contact form",
    text: text,
    replyTo: from,
    sender: from,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    }

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
}
