import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); // For redirection
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
    setLoading(true);

    console.log("Submitting Login Data:", formData); // Debugging log

    try {
      const response = await fetch(
        "https://mighty-meadow-88905-38b4888f41fb.herokuapp.com/api/login", // Use your backend URL
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      console.log("Response Data:", data); // Debugging log

      if (response.ok) {
        console.log("Login successful! Redirecting...");
        localStorage.setItem("token", data.token); // Store token for authentication
        navigate("/dashboard"); // Redirect on success
      } else {
        console.error("Login failed:", data);
        setErrorMessage(data.message || "Invalid credentials. Please try again.");
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
      <h1 className="text-5xl font-extrabold text-gray-900">Login to Your Account</h1>
      <p className="text-lg text-gray-700 mt-4 max-w-2xl">
        Welcome back! Please enter your credentials to continue.
      </p>

      <form className="mt-6 flex flex-col space-y-4 w-full max-w-md" onSubmit={handleSubmit}>
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

        {/* Display error message if any */}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <button
          type="submit"
          className={`mt-4 px-8 py-3 text-white text-lg rounded-lg transition-all ${
            loading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
          }`}
          disabled={loading}
        >
          {loading ? "Logging In..." : "Log In"}
        </button>
      </form>
    </div>
  );
};

export default Login;
