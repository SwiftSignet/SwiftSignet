import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
<<<<<<< HEAD

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
=======
  const [loading, setLoading] = useState(true);

  // Fetch user details from backend
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login"); // Redirect if not authenticated
        return;
      }

      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        if (response.ok) {
          setUser(data);
        } else {
          console.error("Error fetching user:", data);
          navigate("/login");
        }
      } catch (error) {
        console.error("Error:", error);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    navigate("/login"); // Redirect to login
  };

  if (loading) return <p className="text-center text-lg">Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard</h1>
      
      {user ? (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg text-center">
          <h2 className="text-2xl font-semibold">{user.firstName} {user.lastName}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-blue-600 mt-2 font-medium">
            Plan: {user.plan || "Free"}
          </p>

          <button
            onClick={handleLogout}
            className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      ) : (
        <p className="text-red-500">User not found</p>
      )}
>>>>>>> 15f31e5 (UI Enhancements for Signup and Login)
    </div>
  );
};

export default Dashboard;
