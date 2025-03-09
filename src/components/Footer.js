import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center p-6 mt-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Brand Section */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold">SwiftSignet</h2>
          <p className="text-gray-400 text-sm">Secure & Smart e-Signatures</p>
        </div>

        {/* Quick Links */}
        <div className="flex space-x-6">
          <Link to="/pricing" className="text-gray-300 hover:text-white">Pricing</Link>
          <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          <Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-4 text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} SwiftSignet. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
