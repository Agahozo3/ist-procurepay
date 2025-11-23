import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const RequestList = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    setRequests([
      { id: 1, title: "Laptop Purchase", description: "Office laptop", amount: 1200, status: "PENDING" },
      { id: 2, title: "Stationery", description: "Pens and notebooks", amount: 50, status: "APPROVED" },
      { id: 3, title: "Software Subscription", description: "Annual license", amount: 300, status: "REJECTED" },
    ]);
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Purchase Requests</h2>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300 min-w-[600px]">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2 text-left">ID</th>
              <th className="border p-2 text-left">Title</th>
              <th className="border p-2 text-left">Description</th>
              <th className="border p-2 text-left">Amount (USD)</th>
              <th className="border p-2 text-left">Status</th>
              <th className="border p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id} className="hover:bg-gray-50">
                <td className="border p-2">{req.id}</td>
                <td className="border p-2">{req.title}</td>
                <td className="border p-2">{req.description}</td>
                <td className="border p-2">{req.amount}</td>
                <td className="border p-2">
                  <span
                    className={`px-2 py-1 rounded-full text-white ${
                      req.status === "PENDING"
                        ? "bg-yellow-500"
                        : req.status === "APPROVED"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {req.status}
                  </span>
                </td>
                <td className="border p-2 flex flex-wrap gap-2">
                  <Button className="bg-blue-500 hover:bg-blue-600 w-auto px-3" onClick={() => navigate(`/requests/${req.id}`)}>View</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestList;
