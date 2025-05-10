import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard"; // adjust the path if needed

const handleDelete = async (userId) => {
  try {
    const response = await fetch(`/api/users/${userId}`, {
      method: "DELETE", // Make sure your backend is handling DELETE requests
    });
    if (response.ok) {
      console.log(`User with ID ${userId} deleted successfully`);
      // Handle successful deletion (e.g., update state or UI)
    } else {
      throw new Error("Failed to delete user");
    }
  } catch (error) {
    console.error("Error deleting user:", error.message);
  }
};


const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Replace with your actual backend endpoint
    axios
      .get("http://localhost:5000/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user._id} user={user}
        onDelete={handleDelete}/>
      ))}
    </div>
  );
};

export default UserList;
