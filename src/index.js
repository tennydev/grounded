import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { UserProvider } from "./components/contexts/user.context";
import { ShopProvider } from "./components/contexts/shop.context";
import { CartProvider } from "./components/contexts/cart.context";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserProvider>
      <ShopProvider>
        <CartProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </CartProvider>
      </ShopProvider>
    </UserProvider>
  </BrowserRouter>
);

reportWebVitals();
