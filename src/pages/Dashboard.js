import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
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
    </div>
  );
};

export default Dashboard;
