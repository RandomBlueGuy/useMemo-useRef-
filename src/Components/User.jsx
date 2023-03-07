import React from "react";

export const User = ({ user }) => {

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  //     .then((response) => response.json())
  //     .then((data) => setUser(data));
  // }, [userId]);

  if (!user) {
    return <div>
      Cargando usuario...
      (clickeame luego)
    </div>;
  }

  return (
    <div>
      <p>EJECUCIÓN POR PRIMERA VEZ</p>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
};

