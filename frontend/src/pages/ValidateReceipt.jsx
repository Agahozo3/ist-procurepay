import React, { useEffect, useState } from "react";
import { Check, X, Eye, Upload } from "lucide-react";

export default function ValidateReceipt() {
  const [receiptList, setReceiptList] = useState([]);

  useEffect(() => {
    // TODO: Fetch pending receipts from backend
    // Example: fetch("/api/receipts/pending").then(res => res.json()).then(data => setReceiptList(data));

    // Dummy data for now
    setReceiptList([
      {
        id: 1,
        requestTitle: "Laptop Purchase",
        amount: "$1,200",
        submittedBy: "Staff A",
        receiptFile: null,
      },
      {
        id: 2,
        requestTitle: "Printer Ink",
        amount: "$80",
        submittedBy: "Staff B",
        receiptFile: null,
      },
    ]);
  }, []);

  const handleFileChange = (id, file) => {
    // Upload file to backend
    const formData = new FormData();
    formData.append("receipt", file);

    fetch(`/api/receipts/${id}`, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          // Update UI with new file
          setReceiptList(prev =>
            prev.map(r =>
              r.id === id ? { ...r, receiptFile: data.file } : r
            )
          );
        }
      })
      .catch(err => console.error("File upload error:", err));
  };

  const handleApprove = id => {
    // TODO: call backend API to approve receipt
    setReceiptList(prev =>
      prev.map(r => (r.id === id ? { ...r, status: "APPROVED" } : r))
    );
  };

  const handleReject = id => {
    // TODO: call backend API to reject receipt
    setReceiptList(prev =>
      prev.map(r => (r.id === id ? { ...r, status: "REJECTED" } : r))
    );
  };

  return (
    <div className="p-6 min-h-screen bg-blue-100">
      <h1 className="text-2xl font-bold mb-6 text-center">Validate Receipts</h1>

      <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-200 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="py-3 px-2">Request</th>
              <th className="py-3 px-2">Amount</th>
              <th className="py-3 px-2">Submitted By</th>
              <th className="py-3 px-2">Receipt</th>
              <th className="py-3 px-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {receiptList.map(r => (
              <tr key={r.id} className="border-b">
                <td className="py-3 px-2">{r.requestTitle}</td>
                <td className="py-3 px-2">{r.amount}</td>
                <td className="py-3 px-2">{r.submittedBy}</td>

                <td className="py-3 px-2">
                  {r.receiptFile ? (
                    <a
                      href={`/${r.receiptFile}`}
                      className="text-blue-600 underline hover:text-blue-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {r.receiptFile}
                    </a>
                  ) : (
                    <input
                      type="file"
                      onChange={e => handleFileChange(r.id, e.target.files[0])}
                      className="text-sm text-gray-600"
                    />
                  )}
                </td>

                <td className="py-3 px-2 flex gap-3">
                  <button
                    className="text-green-600 flex items-center gap-1"
                    onClick={() => handleApprove(r.id)}
                  >
                    <Check size={18} /> Approve
                  </button>
                  <button
                    className="text-red-600 flex items-center gap-1"
                    onClick={() => handleReject(r.id)}
                  >
                    <X size={18} /> Reject
                  </button>
                  {r.receiptFile && (
                    <button className="text-blue-600 flex items-center gap-1">
                      <Eye size={18} /> View
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
