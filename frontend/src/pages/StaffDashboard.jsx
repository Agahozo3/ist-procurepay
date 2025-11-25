import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import RequestCard from "../components/RequestCard";
import WelcomeCard from "../components/WelcomeCard";

export default function StaffDashboard({ user }) {
  const navigate = useNavigate();
  const currentUser = user || { username: "John Doe", role: "Staff" };

  return (
    <div className="p-6 min-h-screen bg-blue-100">
      <WelcomeCard username={currentUser.username} role={currentUser.role} />
         <div className="mt-6 flex justify-center gap-4">
   <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <Button
            className="bg-green-500 hover:bg-green-600"
            onClick={() => navigate("/request/new")}
          >
            Create Request
          </Button>
          <Button
            className="bg-blue-500 hover:bg-blue-600"
            onClick={() => navigate("/request/view/:id")}
          >
            View Requests
          </Button>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <RequestCard title="Pending Requests" count={5} color="text-yellow-500" />
        <RequestCard title="Approved Requests" count={8} color="text-green-500" />
        <RequestCard title="Rejected Requests" count={2} color="text-red-500" />
      </div>
    </div>
  );
}
