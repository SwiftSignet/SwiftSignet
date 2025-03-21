import React, { useState, useEffect } from "react";

const ManageDocuments = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    // Fetch user's documents
    fetch("https://mighty-meadow-88905-38b4888f41fb.herokuapp.com/api/documents")
      .then((res) => res.json())
      .then((data) => setDocuments(data))
      .catch((err) => console.error("Error fetching documents:", err));
  }, []);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">📄 Manage Your Documents</h2>
      {documents.length > 0 ? (
        <ul>
          {documents.map((doc, index) => (
            <li key={index} className="border-b py-2">
              {doc.name} - {doc.status}
            </li>
          ))}
        </ul>
      ) : (
        <p>No documents found</p>
      )}
    </div>
  );
};

export default ManageDocuments;
