import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import { FavoritesProvider } from "./context/FavoritesContext";
import { CartProvider } from "./context/CartContext";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FavoritesProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FavoritesProvider>
  </StrictMode>
);

