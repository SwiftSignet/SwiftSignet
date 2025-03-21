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

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {/* Monthly Subscription */}
        <PricingCard
          title="Monthly Plan"
          price="$14.99/month"
          features={[
            "✅ Unlimited document signing",
            "✅ AI-powered contract generation",
            "✅ Biometric & Blockchain Security",
            "✅ Priority support",
          ]}
          buttonText="Buy Now"
          onClick={() => navigate("/signup")}
        />

        {/* Pay-Per-Sign Plan */}
        <PricingCard
          title="Pay Per Sign"
          price="$2.99 per document"
          features={[
            "✅ One-time secure e-signature",
            "✅ AI-powered verification",
            "✅ Blockchain security",
            "✅ No subscription required",
          ]}
          buttonText="Pay as You Go"
          onClick={() => navigate("/signup")}
        />

        {/* Annual Subscription */}
        <PricingCard
          title="Annual Plan"
          price="$149.99/year"
          features={[
            "✅ Unlimited document signing",
            "✅ AI-powered contract drafting",
            "✅ Smart reminders & automation",
            "✅ 24/7 priority support",
          ]}
          buttonText="Get Annual Plan"
          onClick={() => navigate("/signup")}
        />
      </div>
    </div>
  );
};

// ✅ Reusable Pricing Card Component
const PricingCard = ({ title, price, features, buttonText, onClick }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all w-full max-w-sm">
      <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
      <p className="text-gray-600 mt-2 text-lg font-medium">{price}</p>
      <ul className="mt-4 text-left space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-700">{feature}</li>
        ))}
      </ul>
      <button
        onClick={onClick}
        className="mt-6 w-full py-3 text-white text-lg font-bold rounded-lg transition-all bg-blue-600 hover:bg-blue-700"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Pricing;
