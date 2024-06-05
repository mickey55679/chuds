import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    audience={`https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`}
    scope="read:current_user update:current_user_metadata"
    redirectUri={window.location.origin}
    useRefreshTokens={true} // Enable refresh tokens
    cacheLocation="localstorage" // Change token storage to local storage
  >
    <App />
  </Auth0Provider>
);
