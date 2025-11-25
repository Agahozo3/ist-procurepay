import React, { useEffect, useState } from "react";

export default function ApproverReviewedRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // TODO: Fetch reviewed requests for this approver from backend API
    // Example:
    // fetch("/api/requests?status=APPROVED,REJECTED&approverId=<currentUserId>")
    //   .then(res => res.json())
    //   .then(data => setRequests(data));

    // Dummy data for now
    setRequests([
      {
        id: 1,
        title: "Office Chairs",
        description: "Buy 5 ergonomic chairs for staff",
        amount: 600,
        status: "APPROVED",
        proforma: "chairs_proforma.pdf",
        purchaseOrder: "PO-001.pdf", 
        createdBy: "Alice Johnson",
        createdAt: "2025-11-20",
      },
      {
        id: 2,
        title: "Projector",
        description: "Purchase projector for conference room",
        amount: 800,
        status: "REJECTED",
        proforma: "projector_quote.pdf",
        purchaseOrder: null, 
        createdBy: "Bob Smith",
        createdAt: "2025-11-18",
      },
    ]);
  }, []);

  return (
    <div className="p-6 min-h-screen bg-blue-50">
      <h2 className="text-2xl font-bold mb-6 text-center">Reviewed Requests</h2>

      {requests.length === 0 ? (
        <p className="text-center text-gray-600 mt-6">No reviewed requests yet</p>
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
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Purchase Order</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Created By</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Created At</th>
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
                        req.status === "APPROVED"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {req.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">{req.proforma}</td>
                  <td className="px-4 py-2">
                    {req.purchaseOrder ? (
                      <a
                        href={`/${req.purchaseOrder}`}
                        className="text-blue-600 underline hover:text-blue-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {req.purchaseOrder}
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="px-4 py-2">{req.createdBy}</td>
                  <td className="px-4 py-2">{req.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
