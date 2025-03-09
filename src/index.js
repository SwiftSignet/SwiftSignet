// src/index.js
// ✅ Import global styles
import './styles.css';  // Tailwind CSS (Ensure Tailwind is configured)
import "@fortawesome/fontawesome-free/css/all.min.css";  // FontAwesome Icons

// ✅ Import React & ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';  

// ✅ Import main components
import App from './App';  
import reportWebVitals from './reportWebVitals';

// ✅ Use React 18's createRoot API
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ✅ Performance monitoring (optional)
reportWebVitals(console.log);
