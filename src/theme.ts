import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

export let theme = createTheme({
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
    },

    h1: {
      fontSize: "56px",
      fontFamily: "Merriweather",
    },
    h2: {
      fontSize: "48px",
      fontFamily: "Merriweather",
    },
    h3: {
      fontSize: "40px",
      fontFamily: "Merriweather",
    },

    h4: {
      fontSize: "32px",
      fontFamily: "Merriweather",
    },

    h6: {
      fontWeight: 500,
    },

    h5: {
      fontSize: "24px",
      fontFamily: "Merriweather",
    },
  },
  shadows: "none",

  components: {
    MuiTypography: {
      defaultProps: {
        padding: 0,
      },
    },
  },
});

theme = responsiveFontSizes(theme);
