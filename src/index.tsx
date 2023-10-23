import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { AsiaChemicalTheme } from "./helper/theme";
import { RouterProvider } from "react-router-dom";
import PageRoute from "./routes/route";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={AsiaChemicalTheme}>
      <PageRoute />
    </ThemeProvider>
  </React.StrictMode>
);
