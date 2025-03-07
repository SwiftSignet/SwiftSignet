<<<<<<< HEAD
<<<<<<< HEAD

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";
=======
import React, { useState } from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> 15f31e5 (UI Enhancements for Signup and Login)
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config"; // Keep API URL

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        setErrorMessage(data.message || "Invalid credentials. Try again.");
      }
    } catch (error) {
      setErrorMessage("Something went wrong! Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center p-6">
      <button className="absolute top-4 right-4 p-2 rounded bg-gray-200 dark:bg-gray-700" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
      <h1 className="text-4xl font-bold text-green-600 dark:text-green-400">Login to Your Account</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">Enter your credentials to continue.</p>

      <form className="mt-6 space-y-4 w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        {["email", "password"].map((field, index) => (
          <input key={index} type={field === "password" ? "password" : "email"} name={field} placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={formData[field]} onChange={handleChange} className="px-4 py-2 border rounded-lg w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white" required />
        ))}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button type="submit" className={`w-full py-3 text-white rounded-lg transition-all ${loading ? "bg-gray-500" : "bg-green-600 hover:bg-green-700"}`} disabled={loading}>
          {loading ? "Logging In..." : "Log In"}
        </button>
      </form>
    </div>
  );
};
>>>>>>> 4561fb9 (Updated Signup.js to use config.js)

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    try {
      const response = await fetch("https://mighty-meadow-88905.herokuapp.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/dashboard");
      } else {
        setErrorMessage(data.message || "Invalid email or password.");
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">SwiftSignet Login</h2>

        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full py-2 text-white rounded-lg transition ${
              loading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Don’t have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
