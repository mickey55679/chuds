import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Auth0Provider } from "@auth0/auth0-react";

library.add(faBars);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN} // Use environment variable for Auth0 domain
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID} // Use environment variable for Auth0 client ID
      redirectUri={window.location.origin} // Redirect URI
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
