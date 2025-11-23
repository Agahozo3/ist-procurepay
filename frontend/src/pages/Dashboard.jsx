
import { useNavigate } from "react-router-dom"; 
import UserIcon from "../components/UserIcon";
import Button from "../components/Button";

export default function Dashboard({ user }) {
  const navigate = useNavigate(); 
  const currentUser = user || { username: "John Doe", role: "Staff" };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <div className="flex flex-col items-center">
        <UserIcon />
        <h1 className="text-2xl font-bold mt-4">Welcome, {currentUser.username}</h1>
        <p className="text-gray-600 mt-2">Role: {currentUser.role}</p> 
        <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <Button
            className="bg-green-500 hover:bg-green-600"
            onClick={() => navigate("/request/new")} 
          >
            Create Request
          </Button>

          <Button
            className="bg-blue-500 hover:bg-blue-600"
            onClick={() => navigate("/requests")} 
          >
            View Requests
          </Button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 bg-white rounded shadow text-center">
          <h2 className="text-lg font-semibold">Pending Requests</h2>
          <p className="text-2xl font-bold text-yellow-500">5</p>
        </div>
        <div className="p-4 bg-white rounded shadow text-center">
          <h2 className="text-lg font-semibold">Approved Requests</h2>
          <p className="text-2xl font-bold text-green-500">8</p>
        </div>
        <div className="p-4 bg-white rounded shadow text-center">
          <h2 className="text-lg font-semibold">Rejected Requests</h2>
          <p className="text-2xl font-bold text-red-500">2</p>
        </div>
      </div>
    </div>
  );
}
