// ✅ Import Styles & Icons
import './styles.css';  // Ensure Tailwind CSS is configured
import "@fortawesome/fontawesome-free/css/all.min.css";  // FontAwesome Icons

// ✅ Import React & ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// ✅ Import main components
import App from './App';
import reportWebVitals from './reportWebVitals';

try {
  // ✅ Ensure the 'root' element exists
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    throw new Error("❌ Root element not found! Ensure 'index.html' has <div id='root'></div>");
  }

  const root = ReactDOM.createRoot(rootElement);
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // ✅ Performance monitoring (optional)
  reportWebVitals(console.log);

} catch (error) {
  console.error("🔥 React App Failed to Load:", error);
  
  // ✅ Display error message on the page
  document.body.innerHTML = `
    <div style="text-align: center; padding: 50px; font-family: Arial, sans-serif;">
      <h1 style="color: red;">🚨 Error: Unable to Load SwiftSignet</h1>
      <p>${error.message}</p>
      <p>Check console for more details.</p>
    </div>
  `;
}

