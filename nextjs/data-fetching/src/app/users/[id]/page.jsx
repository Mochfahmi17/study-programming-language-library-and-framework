import Link from "next/link";
import React from "react";

async function fetchUserDetail(id) {
  try {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { cache: "no-store" });
    return data.json();
  } catch (error) {
    console.log(error);
  }
}

const UserDetail = async ({ params }) => {
  const userDetail = await fetchUserDetail(params.id);
  console.log(userDetail);

  return (
    <div>
      <p>name: {userDetail.name}</p>
      <p>email: {userDetail.email}</p>
      <p>company: {userDetail.company.name}</p>
      <Link href="/users">Go back to Users</Link>
    </div>
  );
};

export default UserDetail;
