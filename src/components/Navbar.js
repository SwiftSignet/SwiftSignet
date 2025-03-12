import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="bg-gradient-to-r from-green-500 via-blue-500 to-pink-500 shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-white">SwiftSignet</Link>
      <div className="space-x-4">
        {isLoggedIn ? (
          <>
            <Link to="/dashboard" className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-300">
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
            <Link to="/login" className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-300">
              Log In
            </Link>
            <Link to="/signup" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
