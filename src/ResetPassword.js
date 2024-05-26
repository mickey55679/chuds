import React, { useState } from "react";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Assuming you have a backend API to handle the email submission
    try {
      // Example: POST request to your API endpoint
      const response = await fetch("/api/send-reset-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
        setError("");
      } else {
        throw new Error("Failed to send reset email.");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  if (submitted) {
    return (
      <div>
        Email sent! Please check your inbox to continue the reset process.
      </div>
    );
  }

  return (
    <div className="reset-password-container">
      <h2>Reset Your Password</h2>
      <p>
        Please enter your email address, and we will send you a link to reset
        your password.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Email</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default ResetPassword;
