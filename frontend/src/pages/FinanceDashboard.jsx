import React from "react";
import { useNavigate } from "react-router-dom";
import UserIcon from "../components/UserIcon";

export default function FinanceDashboard({ user }) {
  const navigate = useNavigate();
  const currentUser = user || { username: "Finance User", role: "Finance" };

  return (
    <div className="p-8 min-h-screen bg-blue-100">
      <div className="flex flex-col items-center">
        <UserIcon />
        <h1 className="text-2xl font-bold mt-4">
          Welcome, {currentUser.username}
        </h1>
        <p className="text-gray-600 mt-2">Role: {currentUser.role}</p>

        <div className="mt-6 flex flex-col md:flex-row gap-6 justify-center">
          <button
            className="bg-white shadow-md px-10 py-5 text-lg rounded-xl border border-blue-300 hover:bg-blue-50"
            onClick={() => navigate("/approver/reviewed-request")}
          >
            Approved Requests
          </button>

          <button
            className="bg-white shadow-md px-10 py-5 text-lg rounded-xl border border-blue-300 hover:bg-blue-50"
            onClick={() => navigate("/finance/upload-receipt")}
          >
            Upload Receipts
          </button>
        </div>
      </div>
    </div>
  );
}