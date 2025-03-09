import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react"; // Import Speed Insights
import Navbar from "./components/Navbar"; // Import Navbar for navigation
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login"; // Import Login page
import Dashboard from "./pages/Dashboard";

// ✅ Set API URL from environment variables or use default
const apiUrl = process.env.REACT_APP_API_URL || 'https://mighty-meadow-88905-38b4888f41fb.herokuapp.com';

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Added Navbar for navigation */}
      <SpeedInsights /> {/* ✅ Speed Insights for performance monitoring */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> {/* ✅ Added Login Route */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
