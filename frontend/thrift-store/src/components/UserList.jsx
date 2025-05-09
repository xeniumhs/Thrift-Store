import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard"; // adjust the path if needed

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
        <UserCard key={user._id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
