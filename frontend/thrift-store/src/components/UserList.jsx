import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  const handleDelete = async (userId) => {
    console.log("Frontend requesting deletion for:", userId); // ✅ debug log
    try {
      const response = await fetch(
        `http://localhost:5000/api/users/${userId}`,
        {
          method: "DELETE",
        }
      );

      const result = await response.json();
      console.log("Backend response:", result);

      if (response.ok) {
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user._id !== userId)
        );
      } else {
        alert("Deletion failed: " + result.message);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user._id} user={user} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default UserList;
