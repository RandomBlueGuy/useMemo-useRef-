import React, { useState, useEffect } from "react";
import { UserList } from "./Components/UserList";
import { User } from "./Components/User";
import axios from "axios";

export default function App() {
  const [userArray, setUserArray] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUserArray(response.data);
      })
      .catch(function (err) {
        console.log("LMAO LOSER", err);
      });
  }, []);

  return (
    <div>
      <div className="lmao">
        <UserList users={userArray} />
      </div>
    </div>
  );
}
