import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isRemembered, setIsRemembered] = useState(false);

  const clearForm = () => {
    setUsername("");
    setPassword("");
    setEmail("");
  };

  const toggleLogin = () => {
    setIsLogin(!isLogin);
    clearForm(); // Optionally clear form when switching modes
  };

  return (
    <div className="center-style">
      <form className="form-style" action="action_page.php" method="post">
        <h3>
          {isLogin ? (
            <>
              Don't have an account yet?{" "}
              <a href="#" onClick={toggleLogin}>
                Create an account
              </a>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <a href="#" onClick={toggleLogin}>
                Log in
              </a>
            </>
          )}
        </h3>

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
          <button type="button" className="button-log" onClick={clearForm}>
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
