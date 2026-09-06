import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import {
  ThemeProvider
} from "./contexts/ThemeContext";

import {
  StudentProvider
} from "./contexts/StudentContext";

createRoot(
  document.getElementById("root")!
).render(

  <StrictMode>

    <ThemeProvider>

      <StudentProvider>

        <App />

      </StudentProvider>

    </ThemeProvider>

  </StrictMode>

);