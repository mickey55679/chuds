import React, { useState } from "react";

const Login = () => {
  // State for determining if the form is in login mode or sign up mode
  const [isLogin, setIsLogin] = useState(true);

  // State for storing username input
  const [username, setUsername] = useState("");

  // State for storing password input
  const [password, setPassword] = useState("");

  // State for storing email input (only used in sign up mode)
  const [email, setEmail] = useState("");

  // State for storing the "Remember me" checkbox value
  const [isRemembered, setIsRemembered] = useState(false);

  // Style for centering the form in the middle of the page
  const centerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "75vh",
    flexDirection: "column",
  };

  // Style for the form
  const formStyle = {
    backgroundColor: "white",
    padding: "16px",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
  };

  // Style for the input fields
  const inputStyle = {
    width: "100%", // You can adjust this
    padding: "12px 20px",
    margin: "8px 0",
    display: "inline-block",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  };

  // Function to clear the form fields
  const clearForm = () => {
    setUsername("");
    setPassword("");
    setEmail("");
  };

  return (
    <div style={centerStyle}>
      <form style={formStyle} action="action_page.php" method="post">
        <h3>
          Don't have an account yet?{" "}
          <a href="/create-account">Create an account</a>
        </h3>

        <div className="imgcontainer">
          {/* Display an avatar image */}
          <img
            src="https://scontent.ffsd2-1.fna.fbcdn.net/v/t39.30808-6/436415599_407791682035993_8168994351067320526_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=C2ZS5NYEhEgQ7kNvgE-hSSS&_nc_ht=scontent.ffsd2-1.fna&oh=00_AYB8JZpx43fbwn7eK0Ek0XPsth_cFxI3_ZgzMnA1OrNoCg&oe=665708A9"
            alt="Avatar"
            className="avatar"
          />
        </div>

        <div className="container">
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          {/* Input field for username */}
          <input
            style={inputStyle}
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {/* Input field for email, displayed only in sign up mode */}
          {!isLogin && (
            <input
              style={inputStyle}
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          )}

          {/* Input field for password */}
          <input
            style={inputStyle}
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Submit button, text changes based on the form mode */}
          <button type="submit" className="button-log">
            {isLogin ? "Login" : "Sign Up"}
          </button>
          {/* Checkbox for "Remember me" */}
          <label>
            <input
              type="checkbox"
              checked={isRemembered} // Use the state variable here
              onChange={() => setIsRemembered(!isRemembered)} // Update the state when the checkbox is clicked
              name="remember"
            />
            Remember me
          </label>
        </div>

        <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
          {/* Cancel button to clear the form */}
          <button type="button" className="button-log" onClick={clearForm}>
            Cancel
          </button>
          <span className="psw">
            Forgot <a href="#">password?</a>
          </span>
          {/* Button to switch between login and sign up modes */}
          <button
            type="button"
            className="button-log"
            onClick={() => setIsLogin(!isLogin)}
          >
            Switch to {isLogin ? "Sign Up" : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
