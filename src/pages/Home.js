import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-5xl font-extrabold text-gray-900">Welcome to SwiftSignet</h1>
      <p className="text-lg text-gray-700 mt-4 max-w-2xl">
        The most secure and efficient way to sign documents online. With AI-powered verification, biometric authentication, and blockchain security, your documents are safer than ever.
      </p>
      <button 
        onClick={() => navigate("/signup")}
        className="mt-6 px-8 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-all"
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;
