import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isRemembered, setIsRemembered] = useState(false);

  const centerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "75vh",

    flexDirection: "column",
  };

  const formStyle = {
    backgroundColor: "white",
    padding: "16px",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
  };

  const inputStyle = {
    width: "100%", // You can adjust this
    padding: "12px 20px",
    margin: "8px 0",
    display: "inline-block",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  };
  const clearForm = () => {
    setUsername("");
    setPassword("");
    setEmail("");
  };

  return (
    <div style={centerStyle}>
      <form style={formStyle} action="action_page.php" method="post">
        <div className="imgcontainer">
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
          <input
            style={inputStyle}
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {/* Add an email field for sign up form */}
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

          <input
            style={inputStyle}
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Change the button text based on the form mode */}
          <button type="submit" className="button-log">
            {isLogin ? "Login" : "Sign Up"}
          </button>
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
          <button type="button" className="button-log" onClick={clearForm}>
            Cancel
          </button>
          <span className="psw">
            Forgot <a href="#">password?</a>
          </span>
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
