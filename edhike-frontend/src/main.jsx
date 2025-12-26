
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import "./index.css";
import App from "./App.jsx";
import theme from "./theme";
import { LeadPopupProvider } from "./context/LeadPopupContext";
import LeadPopup from "./components/LeadPopup";
import posthog from 'posthog-js'

// Initialize PostHog ONCE

posthog.init(
  import.meta.env.VITE_POSTHOG_KEY,
  {
    api_host: 'https://us.i.posthog.com', // or eu.posthog.com
    autocapture: true,
    capture_pageview: true
  }
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <LeadPopupProvider>
      <App />
      <LeadPopup />
    </LeadPopupProvider>
    </ThemeProvider>
  </StrictMode>
);



