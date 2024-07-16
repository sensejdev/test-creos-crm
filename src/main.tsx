import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.scss";
import { ThemeProvider } from "./app/providers/ThemeProvider";
import "src/config/i18n/i18n.ts";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "src/app/providers/StoreProvider/ui/StoreProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
);
