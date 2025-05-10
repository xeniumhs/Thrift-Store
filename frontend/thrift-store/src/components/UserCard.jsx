import React from "react";
import { FiEye, FiEdit, FiTrash2 } from "react-icons/fi";
import "../styles/UserCard.css"; // Import the CSS file

const UserCard = ({
  user = {
    username: "default_user",
    email: "user@example.com",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  onDelete = () => {},
}) => {
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${user.username}?`
    );
    if (confirmDelete) {
      try {
        await onDelete(user.id); // Trigger delete from parent component
        alert(`${user.username} has been deleted`);
      } catch (error) {
        alert("Error deleting user: " + error.message);
      }
    }
  };
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
          <button className="action-btn" title="Delete" onClick={handleDelete}>
            <FiTrash2 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
