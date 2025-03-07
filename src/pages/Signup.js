import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
import { API_BASE_URL } from "../utils/config";
=======
import { API_BASE_URL } from "../config"; // Import API URL from config.js
>>>>>>> 4561fb9 (Updated Signup.js to use config.js)
=======
import { API_BASE_URL } from "../config"; // Keep API URL
>>>>>>> 15f31e5 (UI Enhancements for Signup and Login)

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
<<<<<<< HEAD

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isPasswordStrong = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
    return regex.test(password);
  };
=======
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
>>>>>>> 15f31e5 (UI Enhancements for Signup and Login)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

<<<<<<< HEAD
<<<<<<< HEAD
    // Basic validation
    const { firstName, lastName, email, password, confirmPassword } = formData;
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return setErrorMessage("⚠ All fields are required!");
    }
    if (!email.includes("@")) {
      return setErrorMessage("⚠ Please enter a valid email address.");
    }
    if (!isPasswordStrong(password)) {
      return setErrorMessage("⚠ Password must be at least 6 characters, include a number and special character.");
    }
    if (password !== confirmPassword) {
      return setErrorMessage("⚠ Passwords do not match!");
=======
    // ✅ **Basic Form Validation**
=======
>>>>>>> 15f31e5 (UI Enhancements for Signup and Login)
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
      setErrorMessage("All fields are required!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
>>>>>>> 4561fb9 (Updated Signup.js to use config.js)
    }

    setLoading(true);
<<<<<<< HEAD

    try {
<<<<<<< HEAD
      const response = await fetch(`${API_BASE_URL}/signup`, {
=======
      const response = await fetch(`${API_BASE_URL}/signup`, { 
>>>>>>> 4561fb9 (Updated Signup.js to use config.js)
=======
    try {
      const response = await fetch(`${API_BASE_URL}/signup`, {
>>>>>>> 15f31e5 (UI Enhancements for Signup and Login)
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
<<<<<<< HEAD

      if (response.ok) {
        setSuccessMessage(`🎉 Welcome, ${data.firstName || data.user?.firstName}! Redirecting...`);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user || data));

        setTimeout(() => navigate("/dashboard"), 2000);
      } else {
        setErrorMessage(data.message || "⚠ Sign-up failed. Please try again.");
      }
    } catch (err) {
      setErrorMessage("⚠ Something went wrong. Please check your internet connection.");
=======
      if (response.ok) {
        setSuccessMessage("Signup successful! Redirecting...");
        setTimeout(() => navigate("/dashboard"), 2000);
      } else {
        setErrorMessage(data.message || "Sign-up failed! Try again.");
      }
    } catch (error) {
      setErrorMessage("Something went wrong! Please check your connection.");
>>>>>>> 15f31e5 (UI Enhancements for Signup and Login)
    } finally {
      setLoading(false);
    }
  };

  return (
<<<<<<< HEAD
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-extrabold text-green-600">Create an Account</h1>

      <form className="mt-6 flex flex-col space-y-4 w-full max-w-md" onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="px-4 py-2 border rounded-lg w-full" required />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="px-4 py-2 border rounded-lg w-full" required />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="px-4 py-2 border rounded-lg w-full" required />
        <input type="password" name="password" placeholder="Password (Min 6, 1 number, 1 special)" value={formData.password} onChange={handleChange} className="px-4 py-2 border rounded-lg w-full" required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} className="px-4 py-2 border rounded-lg w-full" required />

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}

        <button type="submit" disabled={loading} className={`px-8 py-3 text-white text-lg rounded-lg transition-all ${loading ? "bg-gray-500" : "bg-green-600 hover:bg-green-700"}`}>
=======
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center p-6">
      <button className="absolute top-4 right-4 p-2 rounded bg-gray-200 dark:bg-gray-700" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
      <h1 className="text-4xl font-bold text-green-600 dark:text-green-400">Create an Account</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">Join SwiftSignet and sign documents securely.</p>

      <form className="mt-6 space-y-4 w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        {["firstName", "lastName", "email", "password", "confirmPassword"].map((field, index) => (
          <input key={index} type={field.includes("password") ? "password" : "text"} name={field} placeholder={field.replace(/([A-Z])/g, " $1")}
            value={formData[field]} onChange={handleChange} className="px-4 py-2 border rounded-lg w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white" required />
        ))}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        <button type="submit" className={`w-full py-3 text-white rounded-lg transition-all ${loading ? "bg-gray-500" : "bg-green-600 hover:bg-green-700"}`} disabled={loading}>
>>>>>>> 15f31e5 (UI Enhancements for Signup and Login)
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
