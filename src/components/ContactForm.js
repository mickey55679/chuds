import React, { useState } from "react";

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState("");


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setIsLoading(true); 
    setFormMessage(""); 

    // Send POST request to the backend
    fetch(process.env.REACT_APP_BACKEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        senderEmail: formData.email,
        message: formData.message,
      }),
    })
      .then((response) => {
        // Check if response is ok (status code 2xx)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Parse JSON response
        return response.json();
      })
      .then((data) => {
        setFormMessage(data.message);
        console.log(data);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error:", error);
        setFormMessage("Something went wrong. Please try again later.");
      })
      .finally(() => setIsLoading(false)); // Reset loading state whether fetch succeeded or failed
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label className="label-name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="input textarea"
            required
          />
        </div>
        {/* Submit button, disabled when loading */}
        <button type="submit" className="button-27" disabled={isLoading}>
          {isLoading ? "Sending..." : "Submit"}
        </button>
        {/* Display form message */}
        {formMessage && <p>{formMessage}</p>}
      </form>
      {/* <ReviewSlideshow /> */}
    </div>
  );
};

export default ContactForm;
