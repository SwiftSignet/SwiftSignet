import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 via-pink-500 to-blue-500 text-center p-6 relative">
      
      {/* Login Button at Top Left */}
      <div className="absolute top-4 left-4">
        <button
          onClick={() => {
            setActiveButton("login");
            navigate("/login");
          }}
          className={`px-4 py-2 rounded-lg ${
            activeButton === "login" ? "bg-green-700 text-white" : "bg-white text-green-600 hover:bg-green-700 hover:text-white"
          }`}
        >
          Log In
        </button>
      </div>

      {/* Main Content Box */}
      <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-4xl font-extrabold text-green-600">Welcome to SwiftSignet</h1>
        <p className="text-lg text-gray-700 mt-4">
          The most secure and efficient way to sign documents online with AI-powered verification, biometric authentication, and blockchain security.
        </p>

        {/* Buttons: Get Started & Pricing */}
        <div className="mt-6 flex flex-col space-y-4">
          <button
            onClick={() => {
              setActiveButton("get-started");
              navigate("/signup");
            }}
            className={`px-6 py-3 text-white text-lg rounded-lg transition-all ${
              activeButton === "get-started" ? "bg-green-700" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Get Started
          </button>

          <button
            onClick={() => {
              setActiveButton("pricing");
              navigate("/pricing");
            }}
            className={`px-6 py-3 text-white text-lg rounded-lg transition-all ${
              activeButton === "pricing" ? "bg-green-700" : "bg-green-600 hover:bg-green-700"
            }`}
          >
            View Pricing
          </button>
        </div>
      </div>

      {/* Chat with an Expert - Bottom of Screen */}
      <div className="fixed bottom-4 w-full flex justify-center">
        <a
          href="sms:+12532238065&body=Hello, I need assistance with SwiftSignet!"
          className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all"
        >
          💬 Chat with an Expert
        </a>
      </div>
    </div>
  );
};

export default Home;
