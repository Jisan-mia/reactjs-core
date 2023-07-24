import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await fetchUser();
      setUsers(data);
      setLoading(false);
    })();
  }, []);


  const fetchUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  };

  return (
    <ul>
      {loading
        ? "loading users data..."
        : users && users.map((user) => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
};

export default Users;
