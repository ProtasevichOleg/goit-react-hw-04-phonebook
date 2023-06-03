import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import App from 'components/App';

const theme = {
  colors: {
    label: '#000000',
    item: {
      border: '#ccc',
    },
    input: {
      border: '#ccc',
    },
    button: {
      background: {
        default: '#3f51b5',
        hover: '#303f9f',
      },
      text: '#fff',
    },
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
