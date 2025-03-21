import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-5xl font-bold text-red-600">404</h1>
      <p className="text-lg text-gray-700 mt-4">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-all">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
