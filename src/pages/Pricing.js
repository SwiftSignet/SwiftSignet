import React from "react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-5xl font-extrabold text-gray-900">Choose Your Plan</h1>
      <p className="text-lg text-gray-700 mt-4 max-w-2xl">
        SwiftSignet offers flexible plans with industry-leading security, AI-powered verification, and blockchain protection.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Monthly Subscription */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-80 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900">Monthly Plan</h2>
          <p className="text-gray-600 mt-2">$14.99/month</p>
          <ul className="mt-4 text-left space-y-2">
            <li>✅ Unlimited document signing</li>
            <li>✅ AI-powered contract generation</li>
            <li>✅ Biometric & Blockchain Security</li>
            <li>✅ Priority support</li>
          </ul>
          <button
            onClick={() => navigate("/signup")}
            className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-all w-full"
          >
            Buy Now
          </button>
        </div>

        {/* Pay-Per-Sign */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-80 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900">Pay Per Sign</h2>
          <p className="text-gray-600 mt-2">$2.99 per document</p>
          <ul className="mt-4 text-left space-y-2">
            <li>✅ One-time secure e-signature</li>
            <li>✅ AI-powered verification</li>
            <li>✅ Blockchain security</li>
            <li>✅ No subscription required</li>
          </ul>
          <button
            onClick={() => navigate("/signup")}
            className="mt-6 px-6 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition-all w-full"
          >
            Pay as You Go
          </button>
        </div>

        {/* Annual Subscription */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-80 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900">Annual Plan</h2>
          <p className="text-gray-600 mt-2">$149.99/year (Save 16%)</p>
          <ul className="mt-4 text-left space-y-2">
            <li>✅ Unlimited document signing</li>
            <li>✅ AI-powered contract drafting</li>
            <li>✅ Smart reminders & automation</li>
            <li>✅ 24/7 priority support</li>
          </ul>
          <button
            onClick={() => navigate("/signup")}
            className="mt-6 px-6 py-3 bg-purple-600 text-white text-lg rounded-lg hover:bg-purple-700 transition-all w-full"
          >
            Get Annual Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
