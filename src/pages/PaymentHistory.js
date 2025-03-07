import React, { useEffect, useState } from "react";

const PaymentHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const response = await fetch("https://mighty-meadow-88905-38b4888f41fb.herokuapp.com/api/payment-history", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      setHistory(data);
    };

    fetchHistory();
  }, []);

  return (
    <div className="container mx-auto p-6">
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
      )}
    </div>
  );
};

export default PaymentHistory;
