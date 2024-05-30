import React, { useState } from "react";
import chudsBar from "./images/chudsbar.jpeg";


const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isRemembered, setIsRemembered] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      // Logic for login
      console.log("Logging in with:", username, password);
    } else {
      // Logic for sign-up
      console.log("Signing up with:", username, email, password);
    }
  };

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="center-style">
      <form className="form-style" onSubmit={handleFormSubmit}>
        <h3>
          {isLogin ? (
            <>
              Don't have an account yet?
              <button
                onClick={toggleLogin}
                style={{ marginLeft: "10px" }}
                className="link-button"
              >
                Create an account
              </button>
            </>
          ) : (
            <>
              Already have an account?
              <button onClick={toggleLogin} className="link-button">
                Log in
              </button>
            </>
          )}
        </h3>

        <div className="imgcontainer">
          <img src={chudsBar} alt="Avatar" className="avatar" />
        </div>

        <div className="container">
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            className="input-style"
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          {!isLogin && (
            <input
              className="input-style"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          )}

          <input
            className="input-style"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="button-log">
            {isLogin ? "Login" : "Sign Up"}
          </button>

          <label>
            <input
              type="checkbox"
              checked={isRemembered}
              onChange={() => setIsRemembered(!isRemembered)}
              name="remember"
            />
            Remember me
          </label>
        </div>

        <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
          <button
            type="button"
            className="button-log"
            onClick={() => setUsername("") || setPassword("") || setEmail("")}
          >
            Cancel
          </button>
          <span className="psw">
            Forgot <a href="/reset-password">password?</a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
