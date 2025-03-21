import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Chatbot from "../components/Chatbot"; // Import chatbot component

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect logged-in users to the dashboard
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="container min-h-screen flex flex-col items-center justify-center text-center">
      {/* Navigation Bar */}
      <nav className="navbar flex justify-between w-full p-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-green-600">SwiftSignet</h1>
        <div className="space-x-4">
          <button className="btn" onClick={() => navigate("/login")}>Log In</button>
          <button className="btn btn-signup" onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero mt-10">
        <h1 className="text-4xl font-extrabold text-green-600">Welcome to SwiftSignet</h1>
        <p className="text-lg text-gray-700 mt-3 max-w-2xl mx-auto">
          The most secure and efficient way to sign documents online with AI-powered verification, biometric authentication, and blockchain security.
        </p>
        <div className="cta-buttons mt-6 flex space-x-4">
          <button className="btn" onClick={() => navigate("/signup")}>Get Started</button>
          <button className="btn btn-outline" onClick={() => navigate("/pricing")}>View Pricing</button>
        </div>
      </div>

      {/* AI Chatbot Section */}
      <div className="mt-12 w-full flex justify-center">
        <Chatbot />
      </div>
    </div>
  );
};

export default Home;

