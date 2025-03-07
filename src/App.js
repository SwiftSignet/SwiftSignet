import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Pricing from "./pages/Pricing";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Notifications from "./components/Notifications"; // ✅ Notifications UI
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react"; // Import Speed Insights
import Navbar from "./components/Navbar"; // Import Navbar for navigation
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login"; // Import Login page
import Dashboard from "./pages/Dashboard";

// ✅ Set API URL from environment variables or use default
const apiUrl = process.env.REACT_APP_API_URL || 'https://mighty-meadow-88905-38b4888f41fb.herokuapp.com';
>>>>>>> 15f31e5 (UI Enhancements for Signup and Login)

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Navbar />
      <SpeedInsights />
=======
      <Navbar /> {/* ✅ Added Navbar for navigation */}
      <SpeedInsights /> {/* ✅ Speed Insights for performance monitoring */}
>>>>>>> 15f31e5 (UI Enhancements for Signup and Login)
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
<<<<<<< HEAD
        <Route path="/pricing" element={<Pricing />} />
=======
        <Route path="/login" element={<Login />} /> {/* ✅ Added Login Route */}
>>>>>>> 15f31e5 (UI Enhancements for Signup and Login)
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Notifications />
    </Router>
  );
}

export default App;
