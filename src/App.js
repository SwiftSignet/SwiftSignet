import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Pricing from "./pages/Pricing";
import Chatbot from "./components/Chatbot"; // Chatbot UI

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-600 to-purple-500">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
