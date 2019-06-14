import React, { Component } from "react";
import Amplify from "aws-amplify";
import { aws_config } from "./aws_config";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import AiMarketplace from "./components/AiMarketplace/index.js";
import SignUp from "./components/Login/signup.js";
import Login from "./components/Login";

//  material ui theme
import { ThemeProvider } from "@material-ui/styles";
import theme from "./assets/theme.js";

import "./App.css";

Amplify.configure(aws_config);

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/aimarketplace" component={AiMarketplace} />
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
