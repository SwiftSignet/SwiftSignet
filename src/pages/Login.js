import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        setErrorMessage(data.message || "Invalid credentials.");
      }
    } catch (error) {
      setErrorMessage("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-500 via-blue-500 to-pink-500 text-white p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-black">
        <h1 className="text-4xl font-extrabold text-center">Login to Your Account</h1>
        <p className="text-md text-center mt-2 text-gray-600">Welcome back! Please enter your credentials to continue.</p>

        <form className="mt-6 flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="px-4 py-3 border rounded-lg w-full" required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="px-4 py-3 border rounded-lg w-full" required />

          {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

          <button type="submit" className="mt-4 px-8 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition-all">{loading ? "Logging In..." : "Log In"}</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
