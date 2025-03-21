import React, { useState, useEffect } from "react";
import { getToken, logout } from "../utils/Auth";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://mighty-meadow-88905-38b4888f41fb.herokuapp.com/api/user", {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch(() => logout());  // Logout if session is invalid
  }, []);

  return user ? (
    <div className="profile-container">
      <h1>Welcome, {user.firstName}!</h1>
      <p>Email: {user.email}</p>
      <p>Subscription: {user.planType}</p>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
    <p>Loading profile...</p>
  );
};

export default Profile;
