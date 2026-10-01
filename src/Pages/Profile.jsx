import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector(
    (state) => state.auth
  );

  return (
    <div className="page">
      <div className="profile">
        <h1>My Profile</h1>

        <div className="profile-card">
          <div className="avatar">
            {user?.name
              ? user.name.charAt(0).toUpperCase()
              : "U"}
          </div>

          <h2>
            {user?.name || "User"}
          </h2>

          <p>
            {user?.email || "No email available"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;