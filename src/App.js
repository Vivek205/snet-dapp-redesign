import React, { Component } from 'react';

//  material ui theme
import { ThemeProvider } from 'material-ui/styles';

// components
import AiMarketplace from './components/AiMarketplace/index.js';

import theme from './assets/theme.js';

import './App.css';

class App extends Component {
  render () {
     return (
     	<ThemeProvider theme={theme}>
        	<AiMarketplace />
        </ThemeProvider>
    );
  }
}

export default App;
