import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DocumentDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [documents, setDocuments] = useState({
    sent: [],
    completed: [],
  });

  // Ensure user is logged in, otherwise redirect to login
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      fetchDocuments(); // Fetch documents after user is loaded
    } else {
      navigate("/login"); // Redirect to login if not authenticated
    }
  }, [navigate]);

  // Fetch user's documents (replace with actual API endpoint)
  const fetchDocuments = async () => {
    try {
      const response = await fetch("https://yourbackend.com/api/documents", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const data = await response.json();
      setDocuments({
        sent: data.sent || [],
        completed: data.completed || [],
      });
    } catch (error) {
      console.error("Error fetching documents:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-6">
      <h1 className="text-4xl font-extrabold text-green-600">Document Dashboard</h1>
      <p className="text-gray-700 mt-2">Manage your documents efficiently.</p>

      <div className="mt-6 flex space-x-4">
        <button
          onClick={() => navigate("/documents/sent")}
          className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-all"
        >
          View Sent Documents ({documents.sent.length})
        </button>
        <button
          onClick={() => navigate("/documents/completed")}
          className="px-6 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition-all"
        >
          View Completed Documents ({documents.completed.length})
        </button>
      </div>

      {documents.sent.length === 0 && documents.completed.length === 0 && (
        <p className="text-gray-500 mt-4">No documents found.</p>
      )}
    </div>
  );
};

export default DocumentDashboard;
