import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { DatosProvider } from "./context/datosContext";
import "./index.css";
import router from "./router/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DatosProvider>
      <RouterProvider router={router} />
    </DatosProvider>
  </React.StrictMode>
);
