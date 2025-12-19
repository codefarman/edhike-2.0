// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import "./index.css";
import App from "./App.jsx";
import theme from "./theme";
import { LeadPopupProvider } from "./context/LeadPopupContext";
import LeadPopup from "./components/LeadPopup";

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



// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import { ThemeProvider } from "@mui/material";
// import "./index.css";
// import App from "./App.jsx";
// import theme from "./theme";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <ThemeProvider theme={theme}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </ThemeProvider>
//   </StrictMode>
// );
