import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full p-4 bg-transparent absolute top-0 left-0">
      {/* Logo */}
      <Link to="/" className="text-white text-2xl font-bold">
        SwiftSignet
      </Link>

      {/* Navigation Buttons */}
      <div className="space-x-4">
        <Link to="/login" className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
          Log In
        </Link>
        <Link to="/signup" className="px-4 py-2 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
