type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UsersServer() {
  await new Promise((resolve) => setTimeout(() => resolve("1"), 2000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();
  console.log(users);

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
