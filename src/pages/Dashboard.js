import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Redirect if user is not logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-6">
      <h1 className="text-4xl font-extrabold text-green-600">
        {user ? `Hello, ${user.firstName}!` : "Welcome to SwiftSignet"}
      </h1>
      <p className="text-gray-700 mt-2">Manage your documents securely.</p>

      <div className="mt-8 flex flex-col space-y-4">
        <button
          onClick={() => navigate("/upload")}
          className="px-6 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition-all"
        >
          Upload a Document
        </button>
        <button
          onClick={() => navigate("/past-activities")}
          className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-all"
        >
          View Past Activities
        </button>
        <button
          onClick={() => navigate("/pricing")}
          className="px-6 py-3 bg-purple-600 text-white text-lg rounded-lg hover:bg-purple-700 transition-all"
        >
          Upgrade Plan
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
