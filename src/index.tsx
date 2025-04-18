import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DebugApp from './DebugApp';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// Simple way to access debug mode with ?debug=emailjs in the URL
const urlParams = new URLSearchParams(window.location.search);
const isDebugMode = urlParams.get('debug') === 'emailjs';

root.render(
  <React.StrictMode>
    {isDebugMode ? <DebugApp /> : <App />}
  </React.StrictMode>
);
