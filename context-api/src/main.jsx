import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
//Context
import { CounterContextProvider } from "./context/counterContext/CounterContextProvider.jsx";
import { TitleColorContextProvider } from "./context/titleColorContext/TitleColorContextProvider.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterContextProvider>
      <TitleColorContextProvider>
        <App />
      </TitleColorContextProvider>
    </CounterContextProvider>
  </StrictMode>,
);
