import React, { Component } from 'react';

// components
import AiMarketplace from './components/AiMarketplace/index.js';
// import Login from './components/Login/index.js';
import SignUp from './components/Login/signup.js';
// import ForgotPassword from './components/Login/forgotpassword.js';

//  material ui theme
import { ThemeProvider } from '@material-ui/styles';

import theme from './assets/theme.js';

import './App.css';

class App extends Component {
  render () {
     return (
     	<ThemeProvider theme={theme}>
      <SignUp />
        	<AiMarketplace />
        </ThemeProvider>
    );
  }
}

export default App;
