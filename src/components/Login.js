import React, { useState } from "react";
import axios from "axios";

const Login = ({ updateAuthStatus }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const baseUrl = "http://localhost:3000";

  // Function to handle login
  const handleLogin = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${baseUrl}/api/auth/login`,
        {
          username: email,
          password: password,
        },
        { withCredentials: true }
      );

      // Session-based login, no token returned, just check for isAdmin
      if (response.data && response.data.isAdmin !== undefined) {
        updateAuthStatus(true, response.data.isAdmin); // Update auth status based on isAdmin
        setMessage(`Welcome, ${email}!`);
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

  // Function to handle registration
  const handleRegister = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post(`${baseUrl}/api/auth/register`, {
        username: email,
        password: password,
      });

      if (response.status === 201) {
        alert("Registration successful! Please log in.");
        setEmail("");
        setPassword("");
      } else {
        throw new Error("Failed to register");
      }
    } catch (error) {
      console.error("Registration failed", error);
      alert("Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // No need for this line in session-based auth
    updateAuthStatus(false, false); // Reset auth status
    setMessage("");
  };

  return (
    <form id="authForm">
      <div>
        Username
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <button
          type="button"
          id="loginBtn"
          onClick={handleLogin}
          disabled={isLoading}
        >
          Login
        </button>
        <button
          type="button"
          id="registerBtn"
          onClick={handleRegister}
          disabled={isLoading}
        >
          Register
        </button>
        <button
          type="button"
          id="logoutBtn"
          onClick={handleLogout}
          disabled={!localStorage.getItem("token")}
        >
          Logout
        </button>
      </div>
      <div id="message">{message}</div>
    </form>
  );
};

export default Login;
