import React from "react";
import UserIcon from "./UserIcon";

export default function WelcomeCard({ username, role }) {
  return (
    <div className="flex flex-col items-center">
      <UserIcon />
      <h1 className="text-2xl font-bold mt-4">Welcome, {username}</h1>
      <p className="text-gray-600 mt-2">Role: {role}</p>
    </div>
  );
}
