import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    setIsLoggedIn(false);
    navigate("/"); // Redirect to homepage
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Brand Name */}
      <Link to="/" className="text-2xl font-bold text-blue-600">SwiftSignet</Link>

      {/* Navigation Links */}
      <div className="space-x-4">
        {isLoggedIn ? (
          <>
            <Link to="/dashboard" className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400">
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400">
              Log In
            </Link>
            <Link to="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
