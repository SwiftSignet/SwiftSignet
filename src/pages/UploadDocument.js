import React, { useState } from "react";

const UploadDocument = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(""); // To show messages
  const [uploading, setUploading] = useState(false); // Show loading state

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // ✅ Validate File Type (Allow only PDF, DOCX, PNG)
    const allowedTypes = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/png"];
    if (file && !allowedTypes.includes(file.type)) {
      setUploadStatus("⚠ Invalid file type! Only PDF, DOCX, or PNG allowed.");
      setSelectedFile(null);
      return;
    }

    // ✅ Validate File Size (Max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setUploadStatus("⚠ File size exceeds 10MB limit.");
      setSelectedFile(null);
      return;
    }

    setSelectedFile(file);
    setUploadStatus(""); // Clear previous messages
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus("⚠ Please select a document to upload.");
      return;
    }

    setUploading(true);
    setUploadStatus("Uploading...");

    const formData = new FormData();
    formData.append("document", selectedFile);

    try {
      const response = await fetch("https://mighty-meadow-88905-38b4888f41fb.herokuapp.com/api/upload-document", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setUploadStatus(`✅ Successfully uploaded: ${selectedFile.name}`);
      } else {
        setUploadStatus(`⚠ Upload failed: ${data.message}`);
      }
    } catch (error) {
      setUploadStatus("⚠ Error uploading document. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-6">
      <h1 className="text-4xl font-extrabold text-green-600">Upload a Document</h1>
      <p className="text-gray-700 mt-4">Select a document to upload and add signature fields.</p>

      <div className="mt-6">
        <input type="file" onChange={handleFileChange} className="mb-4" />
        <button 
          onClick={handleUpload} 
          className={`px-6 py-3 text-white text-lg rounded-lg transition-all ${uploading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"}`} 
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload Document"}
        </button>
        {uploadStatus && <p className="mt-4 text-sm text-gray-600">{uploadStatus}</p>}
      </div>
    </div>
  );
};

export default UploadDocument;
