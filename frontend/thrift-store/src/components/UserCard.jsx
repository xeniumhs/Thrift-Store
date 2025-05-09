import React from "react";
import { FiEye, FiEdit, FiTrash2 } from "react-icons/fi";
import "../styles/UserCard.css"; // Import the CSS file

const UserCard = ({
  user = {
    username: "default_user",
    email: "user@example.com",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
}) => {
  return (
    <div className="user-card-wrapper">
      <div className="user-card">
        <div className="user-avatar">
          <img
            src={user.avatar || "https://i.pravatar.cc/150?img=3"}
            alt={user.username}
          />
        </div>

        <div className="user-info">
          <h3>{user.username}</h3>
          <p>{user.email}</p>
        </div>

        <div className="user-actions">
          <button className="action-btn" title="View">
            <FiEye />
          </button>
          <button className="action-btn" title="Edit">
            <FiEdit />
          </button>
          <button className="action-btn" title="Delete">
            <FiTrash2 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
