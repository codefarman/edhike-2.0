import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Outfit', sans-serif",
    h1: { fontWeight: 800, lineHeight: 1.1 },
    h2: { fontWeight: 700, lineHeight: 1.1 },
    h3: { fontWeight: 600, lineHeight: 1.1 },
    h4: { fontWeight: 600 },
    body1: { lineHeight: 1.5 },
    body2: { lineHeight: 1.5 },
  },
});

export default theme;
