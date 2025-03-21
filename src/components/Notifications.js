import React, { useEffect, useState } from "react";
import { getToken } from "../utils/Auth";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch("https://mighty-meadow-88905-38b4888f41fb.herokuapp.com/api/notifications", {
          headers: { Authorization: `Bearer ${getToken()}` },
        });

        if (!response.ok) throw new Error("Failed to fetch notifications");

        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error("❌ Notification Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      {loading ? (
        <p>Loading...</p>
      ) : notifications.length > 0 ? (
        notifications.map((note, index) => (
          <div key={index} className="notification">
            {note.message} - {new Date(note.createdAt).toLocaleString()}
          </div>
        ))
      ) : (
        <p>No new notifications.</p>
      )}
    </div>
  );
};

export default Notifications;
