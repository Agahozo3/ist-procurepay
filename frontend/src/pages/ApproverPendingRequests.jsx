import React, { useEffect, useState } from "react";
import Button from "../components/Button";

export default function ApproverPendingApproval() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // TODO: Fetch pending requests for this approver from backend API
    // Example:
    // fetch("/api/requests?status=PENDING&approverLevel=1")
    //   .then(res => res.json())
    //   .then(data => setRequests(data));

    // Dummy data for now
    setRequests([
      {
        id: 1,
        title: "Laptop Purchase",
        description: "Purchase new laptops for dev team",
        amount: 1200,
        status: "PENDING",
        proforma: "laptop_quote.pdf",
        createdBy: "John Doe",
        createdAt: "2025-11-23",
      },
      {
        id: 2,
        title: "Printer Ink",
        description: "Refill ink for office printers",
        amount: 150,
        status: "PENDING",
        proforma: "printer_ink.pdf",
        createdBy: "Jane Smith",
        createdAt: "2025-11-22",
      },
    ]);
  }, []);

  const handleApprove = (id) => {
    // TODO: Call API to approve request
    console.log("Approve request:", id);
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "APPROVED" } : r))
    );
  };

  const handleReject = (id) => {
    // TODO: Call API to reject request
    console.log("Reject request:", id);
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "REJECTED" } : r))
    );
  };

  return (
    <div className="p-6 min-h-screen bg-blue-50">
      <h2 className="text-2xl font-bold mb-6 text-center">Pending Requests for Approval</h2>

      {requests.length === 0 ? (
        <p className="text-center text-gray-600">No pending requests</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Title</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Description</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Amount</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Proforma</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Created By</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Created At</th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {requests.map((req) => (
                <tr key={req.id}>
                  <td className="px-4 py-2">{req.title}</td>
                  <td className="px-4 py-2">{req.description}</td>
                  <td className="px-4 py-2">${req.amount}</td>
                  <td className="px-4 py-2">
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
                  <td className="px-4 py-2">{req.proforma}</td>
                  <td className="px-4 py-2">{req.createdBy}</td>
                  <td className="px-4 py-2">{req.createdAt}</td>
                  <td className="px-4 py-2 flex gap-2 justify-center">
                    {req.status === "PENDING" && (
                      <>
                        <Button
                          className="bg-green-500 hover:bg-green-600 px-3 py-1 text-sm"
                          onClick={() => handleApprove(req.id)}
                        >
                          Approve
                        </Button>
                        <Button
                          className="bg-red-500 hover:bg-red-600 px-3 py-1 text-sm"
                          onClick={() => handleReject(req.id)}
                        >
                          Reject
                        </Button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
