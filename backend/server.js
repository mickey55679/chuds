import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT || 465,
  secure: process.env.EMAIL_PORT === "465",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.error("Transporter configuration error:", error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

// Your existing route for sending emails
app.post("/send", async (req, res) => {
  // Implementation remains the same
});

// New route for handling reset password email submission
app.post("/api/send-reset-email", async (req, res) => {
  const { email } = req.body;

  const mailOptions = {
    from: `"Your Name" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Reset Your Password",
    text: "Instructions to reset your password.",
    // You can customize the email message as needed
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Reset email sent: %s", info.messageId);
    res.send({
      success: true,
      message: "Reset email successfully sent!",
    });
  } catch (error) {
    console.error("Error sending reset email: %s", error);
    res.status(500).send({
      success: false,
      message: "Failed to send reset email. Try again later.",
      error: error.message,
    });
  }
});

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server is running on port ${port}`));
