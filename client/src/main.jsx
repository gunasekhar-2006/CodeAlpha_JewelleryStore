import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./styles.css";

import WishlistProvider
from "./context/WishlistContext";

import OrderProvider
from "./context/OrderContext";

import AuthProvider
from "./context/AuthContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <AuthProvider>

      <WishlistProvider>

        <OrderProvider>

          <App />

        </OrderProvider>

      </WishlistProvider>

    </AuthProvider>

  </React.StrictMode>
);