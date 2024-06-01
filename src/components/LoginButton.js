import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="center-style">
      <button onClick={() => loginWithRedirect()} className="button-log">
        Log In / Sign Up
      </button>
    </div>
  );
};

export default LoginButton;
