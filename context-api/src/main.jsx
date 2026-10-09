import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
//Context
import { CounterContextProvider } from "./context/CounterContextProvider.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </StrictMode>,
);
