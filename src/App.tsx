import React from "react";
import "./App.css";
import Posts from "./components/Posts";
import { Container, ThemeProvider } from "@mui/material";
import theme from "./mui-theme";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Container sx={{ padding: "100px 0" }}>
          <Posts />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
