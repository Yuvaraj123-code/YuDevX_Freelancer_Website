const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const gmailEmail = process.env.GMAIL_EMAIL;
const gmailPassword = process.env.GMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.sendEmailOnFormSubmit = functions.firestore
  .document("contacts/{contactId}") // ✅ correct dynamic segment
  .onCreate((snap, context) => {
        console.log("Triggered email function");
console.log("📨 Firestore Trigger Called");
    const data = snap.data();
console.log("🧾 Received Data:", data);
    const mailOptions = {
      from: gmailEmail,
      to: gmailEmail, // Change if you want to receive it at another email
      subject: `New Contact Form Submission`,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Subject: ${data.subject}
        Message: ${data.message}
      `,
    };

    return transporter.sendMail(mailOptions)
      .then(() => {
        console.log("✅ Email sent successfully.");
      })
      .catch((error) => {
        console.error("❌ Error sending email:", error);
      });
  });
