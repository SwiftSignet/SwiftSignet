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
    <nav className="bg-green-600 text-white shadow-md p-4 flex justify-between items-center">
      {/* Brand Name */}
      <Link to="/" className="text-2xl font-bold text-white hover:text-gray-200 transition-all">
        SwiftSignet
      </Link>

      {/* Navigation Links */}
      <div className="flex flex-col space-y-2 text-center">
        {isLoggedIn ? (
          <>
            <Link
              to="/dashboard"
              className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-all"
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-all"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="px-6 py-2 bg-white text-green-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-all"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-all"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
