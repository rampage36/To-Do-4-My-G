import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
    mode: "light",

    primary: {
      light: "#F8B195",
      main: "#F8B195",
      dark: "#F8B195",
    },

    secondary: {
      light: "#ba000d",
      main: "#ba000d",
      dark: "#ba000d",
    },

    error:{
      light: "#F8B195",
      main: "#F8B195",
      dark: "#ba000d",
    }
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",

    primary: {
      light: "#ffffff",
      main: "#eceff1",
      dark: "#babdbe",
    },

    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
    },

    error:{
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
    }
  },
});