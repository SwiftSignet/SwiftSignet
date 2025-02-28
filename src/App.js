import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react"; // Import Speed Insights
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

// Set the API URL for the backend (Heroku)
const apiUrl = process.env.REACT_APP_API_URL || 'https://your-backend-url.herokuapp.com';  // Replace with your backend URL

function App() {
  return (
    <Router>
      <SpeedInsights /> {/* Add Speed Insights inside Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
