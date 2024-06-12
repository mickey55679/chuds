import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // To manage loading state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // To manage logged-in state

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Simulate API call or authentication logic
    try {
      // Replace this with actual authentication logic
      // For example purposes, just set isLoggedIn to true after a timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Failed to log in", error);
      alert("Failed to log in");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoggedIn) {
    // Redirect or show success message
    return <div>Logged in successfully!</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Log In"}
      </button>
    </form>
  );
};

export default Login;
