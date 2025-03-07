import React from "react";
import Checkout from "../components/Checkout"; // Import Checkout Component

const Pricing = () => {
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
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-all w-full">
            Choose Plan
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
          <button className="mt-6 px-6 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition-all w-full">
            Pay as You Go
          </button>
        </div>

        {/* Free Trial */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-80 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900">30-Day Free Trial</h2>
          <p className="text-gray-600 mt-2">5 documents allowed</p>
          <ul className="mt-4 text-left space-y-2">
            <li>✅ Full feature access</li>
            <li>✅ AI verification included</li>
            <li>✅ Secure document storage</li>
            <li>✅ Requires credit card (auto-charge after 30 days)</li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-yellow-500 text-white text-lg rounded-lg hover:bg-yellow-600 transition-all w-full">
            Start Free Trial
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
          <button className="mt-6 px-6 py-3 bg-purple-600 text-white text-lg rounded-lg hover:bg-purple-700 transition-all w-full">
            Get Annual Plan
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-80 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900">Enterprise</h2>
          <p className="text-gray-600 mt-2">Custom pricing</p>
          <ul className="mt-4 text-left space-y-2">
            <li>✅ High-volume signing solutions</li>
            <li>✅ Bulk document automation</li>
            <li>✅ API integrations for business</li>
            <li>✅ Dedicated account manager</li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-black text-white text-lg rounded-lg hover:bg-gray-800 transition-all w-full">
            Contact Sales
          </button>
        </div>
      </div>

      {/* Additional Features */}
      <div className="mt-12 bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900">Why Choose SwiftSignet?</h2>
        <p className="text-gray-700 mt-4">
          Unlike competitors like DocuSign, SwiftSignet offers cutting-edge technology for seamless, secure, and smart document signing.
        </p>
        <ul className="mt-4 text-left space-y-2">
          <li>🔹 **AI-Powered Smart Contracts** – Auto-generate contracts based on user input</li>
          <li>🔹 **Biometric Signature Verification** – Face ID & Fingerprint authentication</li>
          <li>🔹 **Blockchain Security** – Ensures documents are tamper-proof</li>
          <li>🔹 **Voice & Video Signature Confirmation** – Record signer's consent</li>
          <li>🔹 **Payment Collection After Signing** – Request payments directly in documents</li>
        </ul>
        <button className="mt-6 px-6 py-3 bg-gray-800 text-white text-lg rounded-lg hover:bg-gray-900 transition-all w-full">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Pricing;
