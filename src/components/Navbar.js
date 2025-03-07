import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
<<<<<<< HEAD
  const [isMenuOpen, setIsMenuOpen] = useState(false);

=======

  // Check if the user is logged in
>>>>>>> 15f31e5 (UI Enhancements for Signup and Login)
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

<<<<<<< HEAD
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold hover:text-gray-200 transition">
        SwiftSignet
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6">
        {isLoggedIn ? (
          <>
            <Link
              to="/upload-document"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Upload Document
            </Link>
            <Link
              to="/dashboard"
              className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-green-600 transition"
            >
=======
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
>>>>>>> 15f31e5 (UI Enhancements for Signup and Login)
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
<<<<<<< HEAD
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
=======
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
>>>>>>> 15f31e5 (UI Enhancements for Signup and Login)
            >
              Log Out
            </button>
          </>
        ) : (
          <>
<<<<<<< HEAD
            <Link
              to="/login"
              className="px-4 py-2 bg-white text-green-600 rounded-lg hover:bg-green-700 hover:text-white transition"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
=======
            <Link to="/login" className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400">
              Log In
            </Link>
            <Link to="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
>>>>>>> 15f31e5 (UI Enhancements for Signup and Login)
              Sign Up
            </Link>
          </>
        )}
      </div>
<<<<<<< HEAD

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-green-600 text-white rounded-lg shadow-lg p-4 flex flex-col space-y-4 md:hidden">
          {isLoggedIn ? (
            <>
              <Link
                to="/upload-document"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Upload Document
              </Link>
              <Link
                to="/dashboard"
                className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-green-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 bg-white text-green-600 rounded-lg hover:bg-green-700 hover:text-white transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
=======
>>>>>>> 15f31e5 (UI Enhancements for Signup and Login)
    </nav>
  );
};

export default Navbar;
