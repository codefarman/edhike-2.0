
import { StrictMode, } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import "./index.css";
import App from "./App.jsx";
import theme from "./theme";
import { LeadPopupProvider } from "./context/LeadPopupContext";
import LeadPopup from "./components/LeadPopup";
import posthog from 'posthog-js'

// Initialize PostHog ONCE
posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
  api_host: 'https://us.i.posthog.com', 
  autocapture: true,
  capture_pageview: true,
  persistence: 'localStorage',
})

function handleABRedirect() {

  posthog.onFeatureFlags(() => {
    const variant = posthog.getFeatureFlag('contact_page_a-b_test')
    const currentUrl = window.location.href
    const wixUrl = 'https://www.edhike.in/contact-us-new-page'

    // Preserve query params (UTMs)
    const query = window.location.search
    // If assigned CONTROL but on Vercel → redirect to Wix
    if (variant === 'control' && !currentUrl.startsWith(wixUrl)) {
      window.location.replace(wixUrl + query)
    }
  })
}

handleABRedirect()



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



