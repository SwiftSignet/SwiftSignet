import React from "react";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51QzywxPQvJWCKOQv6ECF3W3ZGedoTUZNKCBPumJvCN4umScf065Z64zrhJIv8bJsGyIDKTWJCZKMM8IOBgz8J5ad00kdTJBpug");

const CheckoutButton = ({ planType, email }) => {
  const navigate = useNavigate();

  const handleCheckout = async () => {
    const response = await fetch("https://mighty-meadow-88905-38b4888f41fb.herokuapp.com/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ planType }),
    });

    const { id } = await response.json();
    if (id) {
      // Redirect to Stripe Checkout
      window.location.href = `https://checkout.stripe.com/pay/${id}`;
      
  // Save payment status when they return
  await fetch("https://mighty-meadow-88905-38b4888f41fb.herokuapp.com/api/payment-success", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, planType, sessionId: id }),
  });

  // Redirect user to the dashboard
  setTimeout(() => {
    navigate("/dashboard");
  }, 3000);
} else {
  alert("Payment failed! Please try again.");
}
};
  return (
    <button
      onClick={handleCheckout}
      className="mt-4 px-8 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-all"
    >
      Subscribe Now
    </button>
  );
};

const Checkout = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className="flex flex-col items-center space-y-4">
        <CheckoutButton planType="monthly" />
        <CheckoutButton planType="annual" />
        <CheckoutButton planType="payPerSign" />
      </div>
    </Elements>
  );
};

export default Checkout;
