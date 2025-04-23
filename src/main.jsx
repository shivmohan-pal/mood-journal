import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { WeatherProvider } from "./context/WeatherCotext.jsx";
import { NotesProvider } from "./context/NotesContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WeatherProvider>
      <NotesProvider>
        <App />
      </NotesProvider>
    </WeatherProvider>
  </StrictMode>
);
