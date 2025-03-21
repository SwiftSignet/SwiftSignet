import React, { useEffect, useState } from "react";

const PaymentHistory = () => {
  const [history, setHistory] = useState([]);
<<<<<<< HEAD
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true);
      setError("");

      try {
        const token = localStorage.getItem("token"); // Get authentication token

        const response = await fetch("https://mighty-meadow-88905-38b4888f41fb.herokuapp.com/api/payment-history", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Secure API call with token
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch payment history. Please try again.");
        }

        const data = await response.json();
        setHistory(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
=======

  useEffect(() => {
    const fetchHistory = async () => {
      const response = await fetch("https://mighty-meadow-88905-38b4888f41fb.herokuapp.com/api/payment-history", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      setHistory(data);
>>>>>>> 4561fb9 (Updated Signup.js to use config.js)
    };

    fetchHistory();
  }, []);

  return (
    <div className="container mx-auto p-6">
<<<<<<< HEAD
      <h1 className="text-3xl font-bold text-center text-gray-700 mb-4">Payment History</h1>

      {loading && <p className="text-center text-gray-500">Loading payment history...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {history.length > 0 ? (
        <div className="bg-white shadow-md rounded p-4">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Plan</th>
                <th className="p-2 border">Amount</th>
                <th className="p-2 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {history.map((payment, index) => (
                <tr key={index} className="border-b text-center">
                  <td className="p-2 border">{payment.planType}</td>
                  <td className="p-2 border">${(payment.amount / 100).toFixed(2)}</td>
                  <td className="p-2 border">{new Date(payment.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        !loading && <p className="text-center text-gray-600">No payment history available.</p>
=======
      <h1 className="text-3xl font-bold mb-4">Payment History</h1>
      {history.length > 0 ? (
        <ul className="bg-white shadow-md rounded p-4">
          {history.map((payment, index) => (
            <li key={index} className="border-b p-2">
              <strong>Plan:</strong> {payment.planType} | 
              <strong> Amount:</strong> ${payment.amount / 100} | 
              <strong> Date:</strong> {new Date(payment.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      ) : (
        <p>No payment history available.</p>
>>>>>>> 4561fb9 (Updated Signup.js to use config.js)
      )}
    </div>
  );
};

export default PaymentHistory;
