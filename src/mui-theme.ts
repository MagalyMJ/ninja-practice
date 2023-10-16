import { createTheme } from "@mui/material/styles";
import { green, orange } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    primary: { main: "#1e9983" },
    secondary: { main: "#a96812" },
  },
});

export default theme;
