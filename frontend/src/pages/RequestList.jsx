import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, Edit } from "lucide-react";

export default function StaffRequestList({ user }) {
  const navigate = useNavigate();
  const currentUser = user || { username: "Staff User", role: "Staff" };

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // TODO: Fetch requests from backend
    setRequests([
      {
        id: 1,
        title: "Laptop Purchase",
        description: "Buy a new laptop for development",
        amount: "$1200",
        status: "PENDING",
        proforma: "laptop_proforma.pdf",
        createdBy: "Staff A",
        createdAt: "2025-11-20",
      },
      {
        id: 2,
        title: "Printer Ink",
        description: "Buy ink cartridges for office printer",
        amount: "$80",
        status: "APPROVED",
        proforma: "ink_proforma.pdf",
        createdBy: "Staff B",
        createdAt: "2025-11-18",
      },
      {
        id: 3,
        title: "Office Chairs",
        description: "Buy 5 ergonomic chairs for staff",
        amount: "$500",
        status: "REJECTED",
        proforma: "chairs_proforma.pdf",
        createdBy: "Staff C",
        createdAt: "2025-11-15",
      },
    ]);
  }, []);

  const handleEdit = (id) => {
    navigate(`/request/edit/${id}`);
  };

  const handleView = (id) => {
    navigate(`/request/view/${id}`);
  };

  return (
    <div className="p-6 min-h-screen bg-blue-50">
      <h1 className="text-2xl font-bold mb-6 text-center">My Requests</h1>

      <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-200 overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-sm font-semibold text-gray-700">Title</th>
              <th className="px-4 py-2 text-sm font-semibold text-gray-700">Description</th>
              <th className="px-4 py-2 text-sm font-semibold text-gray-700">Amount</th>
              <th className="px-4 py-2 text-sm font-semibold text-gray-700">Status</th>
              <th className="px-4 py-2 text-sm font-semibold text-gray-700">Proforma</th>
              <th className="px-4 py-2 text-sm font-semibold text-gray-700">Created By</th>
              <th className="px-4 py-2 text-sm font-semibold text-gray-700">Created At</th>
              <th className="px-4 py-2 text-sm font-semibold text-gray-700 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {requests.map((r) => (
              <tr key={r.id}>
                <td className="px-4 py-2">{r.title}</td>
                <td className="px-4 py-2">{r.description}</td>
                <td className="px-4 py-2">{r.amount}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-white ${
                      r.status === "PENDING"
                        ? "bg-yellow-500"
                        : r.status === "APPROVED"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {r.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  {r.proforma ? (
                    <a
                      href={`/${r.proforma}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      {r.proforma}
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
                <td className="px-4 py-2">{r.createdBy}</td>
                <td className="px-4 py-2">{r.createdAt}</td>
                <td className="px-4 py-2 flex justify-center gap-2">
                  {r.status === "PENDING" && (
                    <button
                      className="text-orange-600 flex items-center gap-1"
                      onClick={() => handleEdit(r.id)}
                    >
                      <Edit size={16} /> Edit
                    </button>
                  )}
                  <button
                    className="text-blue-600 flex items-center gap-1"
                    onClick={() => handleView(r.id)}
                  >
                    <Eye size={16} /> View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
