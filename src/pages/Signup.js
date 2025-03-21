import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config"; 

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Password Strength Validation
  const isPasswordStrong = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    // ✅ Field Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
      setErrorMessage("⚠ All fields are required!");
      return;
    }

    // ✅ Email Validation
    if (!formData.email.includes("@")) {
      setErrorMessage("⚠ Please enter a valid email address.");
      return;
    }

    // ✅ Password Strength Check
    if (!isPasswordStrong(formData.password)) {
      setErrorMessage("⚠ Password must be at least 6 characters long and include a number and a special character.");
      return;
    }

    // ✅ Check Password Match
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("⚠ Passwords do not match!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/signup`, { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(`🎉 Welcome, ${data.firstName}! Redirecting...`);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data));

        setTimeout(() => navigate("/dashboard"), 2000); // Redirect after success
      } else {
        setErrorMessage(data.message || "⚠ Sign-up failed! Please try again.");
      }
    } catch (error) {
      setErrorMessage("⚠ Something went wrong! Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-extrabold text-green-600">Create an Account</h1>

      <form className="mt-6 flex flex-col space-y-4 w-full max-w-md" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="firstName" 
          placeholder="First Name" 
          value={formData.firstName} 
          onChange={handleChange} 
          className="px-4 py-2 border rounded-lg w-full" 
          required 
        />
        <input 
          type="text" 
          name="lastName" 
          placeholder="Last Name" 
          value={formData.lastName} 
          onChange={handleChange} 
          className="px-4 py-2 border rounded-lg w-full" 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email Address" 
          value={formData.email} 
          onChange={handleChange} 
          className="px-4 py-2 border rounded-lg w-full" 
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password (Min 6, 1 number, 1 special)" 
          value={formData.password} 
          onChange={handleChange} 
          className="px-4 py-2 border rounded-lg w-full" 
          required 
        />
        <input 
          type="password" 
          name="confirmPassword" 
          placeholder="Confirm Password" 
          value={formData.confirmPassword} 
          onChange={handleChange} 
          className="px-4 py-2 border rounded-lg w-full" 
          required 
        />

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}

        <button 
          type="submit" 
          className={`px-8 py-3 text-white text-lg rounded-lg transition-all ${loading ? "bg-gray-500" : "bg-green-600 hover:bg-green-700"}`} 
          disabled={loading}
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
