import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  // Function to handle login
  const handleLogin = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", {
        username: email,
        password: password,
      });

      if (response.data && response.data.token) {
        setIsLoggedIn(true);
        localStorage.setItem("token", response.data.token);
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
    const response = await axios.post("http://localhost:3000/api/auth/register", {
      username: email, // Assuming your backend expects 'username' for registration
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
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    setMessage("");
    setUsers([]);
  };

  // Function to fetch users
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/auth", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUsers(response.data);
    } catch (error) {
      console.error("Failed to fetch users", error);
      alert("Failed to fetch users");
    }
  };

  // Event handler for the action buttons (Login, Register, Logout)
  const handleAction = (action) => {
    switch (action) {
      case "login":
        handleLogin();
        break;
      case "register":
        handleRegister();
        break;
      case "logout":
        handleLogout();
        break;
      default:
        break;
    }
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
          onClick={() => handleAction("login")}
          disabled={isLoading || isLoggedIn}
        >
          Login
        </button>
        <button
          type="button"
          id="registerBtn"
          onClick={() => handleAction("register")}
          disabled={isLoading || isLoggedIn}
        >
          Register
        </button>
        <button
          type="button"
          id="logoutBtn"
          onClick={() => handleAction("logout")}
          disabled={!isLoggedIn}
        >
          Logout
        </button>
        <button
          type="button"
          id="fetchUsers"
          onClick={fetchUsers}
          disabled={!isLoggedIn}
        >
          Fetch Users
        </button>
      </div>
      <div id="message">{message}</div>
      <ol id="users">
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ol>
    </form>
  );
};

export default Login;
