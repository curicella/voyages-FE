import React from "react";
import "./userCard.css";

const User = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <div className="user-card">
      <h3>User Information</h3>
      <p>
        <strong>First Name:</strong> {user.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {user.lastName}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Age:</strong> {user.age}
      </p>
      <p>
        <strong>Username:</strong> {user.userName}
      </p>
    </div>
  );
};

export default User;
