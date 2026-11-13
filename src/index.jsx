import React from "react";
import { createRoot } from "react-dom/client";
import { Theme } from "@astryxdesign/core/theme";
import App from "./App";
import { themes, defaultThemeSlug } from "./astryx-themes";
import "@astryxdesign/core/reset.css";
import "@astryxdesign/core/astryx.css";
import "./styles/tailwind.css";
import "./styles/index.css";
import { HelmetProvider } from "react-helmet-async";
import { CartProvider } from "./context/CartContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Theme theme={themes[defaultThemeSlug]}>
        <CartProvider>
          <App />
        </CartProvider>
      </Theme>
    </HelmetProvider>
  </React.StrictMode>
);