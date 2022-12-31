import React from 'react';
import { ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { getStylesTheme } from './style';
import LandingView from './components/Landing/views';

const App = () => {
  const muiTheme = responsiveFontSizes(getStylesTheme('dark'));

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <LandingView />
    </ThemeProvider>
  );
};

export default App;
