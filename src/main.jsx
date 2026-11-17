/**
 * Application Entrypoint: main.jsx
 * 
 * Mounts the root React application into the DOM #root node with StrictMode.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
