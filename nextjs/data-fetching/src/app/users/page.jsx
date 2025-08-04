import Link from "next/link";
import React from "react";

async function fetchUsers() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users", { cache: "no-store" });
    return data.json();
  } catch (error) {
    console.log(error);
  }
}

const Users = async () => {
  const users = await fetchUsers();
  console.log(users);
  return (
    <div className="grid grid-cols-5 gap-4 m-12">
      {users.map((user, i) => (
        <div key={i} className="h-[150px] border-black border-4 p-4">
          <div>name: {user.name}</div>
          <div>email: {user.email}</div>
          <Link href={`/users/${user.id}`}>Go to user detail</Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
