import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 text-center p-6">
      {/* Logo and Branding */}
      <div className="flex items-center space-x-3">
        <img src="/logo.png" alt="SwiftSignet Logo" className="h-12" />
        <h1 className="text-5xl font-extrabold text-blue-700 tracking-tight">SwiftSignet</h1>
      </div>

      <p className="text-xl text-gray-800 mt-4 max-w-3xl leading-relaxed">
        **Experience seamless document signing with AI-powered verification, biometric authentication, and blockchain security.**  
        **Start your 30-day free trial today – No charges upfront!**
      </p>

      {/* Features Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <i className="fas fa-shield-alt text-blue-600 text-4xl"></i>
          <h3 className="text-lg font-semibold mt-4">Secure & Compliant</h3>
          <p className="text-gray-600 text-sm mt-2">
            Encrypted storage with **blockchain verification** & **legal compliance**.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <i className="fas fa-fingerprint text-blue-600 text-4xl"></i>
          <h3 className="text-lg font-semibold mt-4">Biometric Authentication</h3>
          <p className="text-gray-600 text-sm mt-2">
            Sign with **Face ID, Touch ID, or voice recognition** for added security.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <i className="fas fa-rocket text-blue-600 text-4xl"></i>
          <h3 className="text-lg font-semibold mt-4">Lightning-Fast Signing</h3>
          <p className="text-gray-600 text-sm mt-2">
            AI-assisted document processing ensures **quick and smooth** signing.
          </p>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="mt-10 max-w-2xl bg-white p-6 rounded-lg shadow-lg text-gray-800">
        <h2 className="text-2xl font-bold text-blue-700">30-Day Free Trial</h2>
        <p className="mt-2 text-lg">**$0.00 today** – Add your card now, but you won’t be charged until your trial ends.</p>
        <p className="text-sm text-gray-600 mt-2">
          After 30 days, choose the plan that works best for you:
        </p>

        {/* Pricing Options */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Pay Per Sign</h3>
            <p className="text-2xl font-bold text-blue-600">$2.99</p>
            <p className="text-sm text-gray-600">For occasional users</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Monthly Plan</h3>
            <p className="text-2xl font-bold text-blue-600">$14.99/mo</p>
            <p className="text-sm text-gray-600">Unlimited signatures</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Annual Plan</h3>
            <p className="text-2xl font-bold text-blue-600">$149.99/yr</p>
            <p className="text-sm text-gray-600">Save $30 annually</p>
          </div>
        </div>

        <button
          onClick={() => navigate("/signup")}
          className="mt-6 px-8 py-3 bg-blue-700 text-white text-lg rounded-lg shadow-lg hover:bg-blue-800 transition-all"
        >
          Start Free Trial
        </button>
        <p className="text-gray-600 mt-2 text-sm">No hidden fees. Cancel anytime.</p>
      </div>
    </div>
  );
};

export default Home;

