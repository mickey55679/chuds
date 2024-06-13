import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // To manage loading state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // To manage logged-in state

 const handleSubmit = async (event) => {
   event.preventDefault();
   setIsLoading(true);

   try {
     const response = await axios.post("http://localhost:3000/login", {
       username: email, // replace with the actual field name expected by your backend
       password: password,
     });

     if (response.data && response.data.token) {
       setIsLoggedIn(true);
       // You would typically also store the token somewhere (like localStorage)
       // and include it in future authenticated requests
       localStorage.setItem("token", response.data.token);
     } else {
       throw new Error("Invalid login response");
     }
   } catch (error) {
     console.error("Failed to log in", error);
     alert("Failed to log in");
   } finally {
     setIsLoading(false);
   }
 };

  return (
    <form onSubmit={handleSubmit}>
      <h2>username</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <h2>password</h2>
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
