import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { UserProvider } from "./components/contexts/user.context";
import { ShopProvider } from "./components/contexts/shop.context";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserProvider>
      <ShopProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ShopProvider>
    </UserProvider>
  </BrowserRouter>
);

reportWebVitals();
