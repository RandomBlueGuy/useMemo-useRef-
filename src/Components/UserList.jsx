import React, { useState, useMemo, useRef } from "react";
import { User } from "./User";

export const UserList = ({ users }) => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const userCacheRef = useRef({});

  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
  };

  const selectedUser = useMemo(() => {
    if (!selectedUserId) {
      console.log("el usuario no exise")
      return null;
    }

    if (userCacheRef.current[selectedUserId]) {
      console.log("el usuario ya existe y se usa la caché");
      return userCacheRef.current[selectedUserId];
    }

    fetch(`https://jsonplaceholder.typicode.com/users/${selectedUserId}`)
      .then((response) => response.json())
      .then((data) => {
        userCacheRef.current[selectedUserId] = data;
        return data;
      });
  }, [selectedUserId]);

  return (
    <div>
      <h1>Lista de usuarios</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user.id)}>
            {user.name}
          </li>
        ))}
      </ul>
      {selectedUserId && <User user={selectedUser} />}
    </div>
  );
};
