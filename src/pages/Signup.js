import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate(); // For redirection
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // For validation errors
  const [successMessage, setSuccessMessage] = useState(""); // Show success messages

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error message
    setSuccessMessage(""); // Reset success message

    // ✅ Basic Form Validation
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    if (!formData.email || !formData.password) {
      setErrorMessage("Please fill out all fields!");
      return;
    }

    setLoading(true);

    console.log("Submitting Data:", formData); // Debugging log

    try {
      const response = await fetch("https://mighty-meadow-88905-38b4888f41fb.herokuapp.com/api/signup", { // Use your Heroku backend URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Response Data:", data); // Debugging log

      if (response.ok) {
        console.log("Signup successful! Redirecting...");
        setSuccessMessage("Signup successful! Redirecting...");

        setTimeout(() => {
          navigate("/dashboard"); // Redirect to the dashboard or next page
        }, 2000);
      } else {
        console.error("Signup failed:", data);
        setErrorMessage(data.message || "Sign-up failed! Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Something went wrong! Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-5xl font-extrabold text-gray-900">Create an Account</h1>
      <p className="text-lg text-gray-700 mt-4 max-w-2xl">
        Join SwiftSignet and start signing documents securely.
      </p>

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
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-2 border rounded-lg w-full"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
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

        {/* Display error message if any */}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}

        <button
          type="submit"
          className={`mt-4 px-8 py-3 text-white text-lg rounded-lg transition-all ${
            loading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
          }`}
          disabled={loading}
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
