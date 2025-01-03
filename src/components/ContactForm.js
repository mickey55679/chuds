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
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
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
      .finally(() => setIsLoading(false)); 
  };

  return (
    <div className="contact-form-container flex items-center justify-center  min-h-screen bg-gray-100  p-[10px]">
      <form onSubmit={handleSubmit} className="contact-form max-w-[400px] ">
        <div className="form-group mb-[20px]">
          <label className="label-name mb-[5px] font-[600] ">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="input w-full p-[10px] rounded font-medium border border-cutomGray "
            required
          />
        </div>
        <div className="form-group">
          <label className="label font-[600]">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            className="input w-full p-[10px] rounded font-medium border border-cutomGray"
            required
          />
        </div>
        <div className="form-group">
          <label className="label font-[600]">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            className="input textarea h-[150px] w-full p-[10px] rounded font-medium border border-cutomGray"
            required
          />
        </div>

        <button type="submit" className="button-contact bg-dark-red text-light cursor-pointer inline-block font-medium min-h-12 w-[50%] rounded-md" disabled={isLoading}>
          {isLoading ? "Sending..." : "Submit"}
        </button>

        {formMessage && <p>{formMessage}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
