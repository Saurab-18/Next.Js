"use client";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default function UsersClient() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUser = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const response = await data.json();
      setUsers(response);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <>
      <h1>Client Side Users</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user?.id}>
              <div>{user?.name}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
