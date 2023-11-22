import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SimpleContextProvider from './SimpleContext';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <SimpleContextProvider>
      <App />
    </SimpleContextProvider>
  </React.StrictMode>
);
