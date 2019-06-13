import React, { Component } from 'react';
import './App.css';

// import Login from './components/Login/index.js';
import SignUp from './components/Login/signup.js';
// import ForgotPassword from './components/Login/forgotpassword.js';

class App extends Component {
  render () {
    return (
      // <Login />
      <SignUp />
      // <ForgotPassword />
    );
  }
}

export default App;
