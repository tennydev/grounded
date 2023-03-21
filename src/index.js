import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { UserProvider } from "./components/contexts/user.context";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <UserProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </UserProvider>
  </BrowserRouter>
);

reportWebVitals();
