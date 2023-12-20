import { createTheme, ThemeProvider } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#007026",
      dark: "#00511B",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#F55800",
      main: "#DF1B00",
      dark: "#DF1B00",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Inter, Roboto",
    button: {
      textTransform: "none",
    },

    title: {
        fontFamily: "Merriweather",

    }
  },
  shadows: "none",
});
