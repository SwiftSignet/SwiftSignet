// src/index.js

import React from 'react';  // Import React
import ReactDOM from 'react-dom/client';  // Import ReactDOM
import './styles.css';  // Import Tailwind CSS styles (instead of index.css)

import App from './App';  // Import the root component (App.js)
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

