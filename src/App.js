import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Pricing from "./pages/Pricing";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Notifications from "./components/Notifications"; // ✅ Notifications UI

function App() {
  return (
    <Router>
      <Navbar />
      <SpeedInsights />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Notifications />
    </Router>
  );
}

export default App;
