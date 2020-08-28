import React from "react";
import "../App.css";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Material UI's theme provider to add the theme throughout entire application
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";

export default function App() {
  return (

    <Router>
        <Switch>
            <Route exact path="/">
              <ThemeProvider theme={theme}>
                <Login />
              </ThemeProvider>
            </Route>
            <Route path="/home">
              <ThemeProvider theme={theme}>
                <Home />
              </ThemeProvider>
            </Route>
            <Route path="/signup">
              <ThemeProvider theme={theme}>
                <Signup />
              </ThemeProvider>
            </Route>
          
        </Switch>
    </Router>
    
  );
}
