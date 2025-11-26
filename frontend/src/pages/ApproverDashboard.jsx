import React from "react";
import { useNavigate } from "react-router-dom";
import UserIcon from "../components/UserIcon";
import Button from "../components/Button";


export default function ApproverDashboard({ user }) {
  const navigate = useNavigate();
  const currentUser = user || { username: "John Doe", role: "Approver" };

  return (
    <div className="p-6 min-h-screen bg-blue-100">
      <div className="flex flex-col items-center">
        <UserIcon />
        <h1 className="text-2xl font-bold mt-4">Welcome, {currentUser.username}</h1>
        <p className="text-gray-600 mt-2">Role: {currentUser.role}</p>

        {/* Buttons in center */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md">
          <Button
            className="bg-green-500 hover:bg-green-600"
            onClick={() => navigate("/approver/pending-requests")}
          >
            Pending Approval
          </Button>
          <Button
            className="bg-blue-500 hover:bg-blue-600"
            onClick={() => navigate("/approver/reviewed-request")}
          >
            Request Approval
          </Button>
        </div>
      </div>
    </div>
  );
}