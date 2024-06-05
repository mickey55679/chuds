import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Admin = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  if (!isAuthenticated) {
    return <button onClick={() => loginWithRedirect()}>Log in</button>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {user.name} {console.log(user.name)}</p>
      
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log out
      </button>
    </div>
  );
};

export default Admin;
