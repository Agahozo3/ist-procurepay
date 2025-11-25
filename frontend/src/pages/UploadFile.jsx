import React, { useEffect, useState } from "react";

export default function UploadReceipt() {
  const [requests, setRequests] = useState([]);
  const [uploadingId, setUploadingId] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    // TODO: Fetch approved requests from backend
    setRequests([
      {
        id: 1,
        title: "Laptop Purchase",
        amount: 1200,
        status: "APPROVED",
        proforma: "laptop_proforma.pdf",
        purchaseOrder: "PO-001.pdf",
        receipt: null,
        createdBy: "Staff A",
        createdAt: "2025-11-24",
      },
      {
        id: 2,
        title: "Printer Ink",
        amount: 80,
        status: "APPROVED",
        proforma: "ink_proforma.pdf",
        purchaseOrder: "PO-002.pdf",
        receipt: null,
        createdBy: "Staff B",
        createdAt: "2025-11-22",
      },
    ]);
  }, []);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = (id) => {
    if (!selectedFile) return alert("Please select a file first");

    // TODO: Upload file to server and update the request record
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, receipt: selectedFile.name } : req
      )
    );
    setUploadingId(null);
    setSelectedFile(null);
    alert("Receipt uploaded successfully!");
  };

  return (
    <div className="p-6 min-h-screen bg-blue-50">
      <h1 className="text-2xl font-bold mb-6 text-center">Upload Receipts</h1>

      <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-200 overflow-x-auto">
        <table className="w-full text-left min-w-max">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Proforma</th>
              <th className="px-4 py-2">Purchase Order</th>
              <th className="px-4 py-2">Receipt</th>
              <th className="px-4 py-2">Created By</th>
              <th className="px-4 py-2">Created At</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {requests.map((req) => (
              <tr key={req.id}>
                <td className="px-4 py-2">{req.title}</td>
                <td className="px-4 py-2">${req.amount}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-white ${
                      req.status === "APPROVED" ? "bg-green-500" : "bg-gray-500"
                    }`}
                  >
                    {req.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  {req.proforma ? (
                    <a
                      href={`/${req.proforma}`}
                      className="text-blue-600 underline hover:text-blue-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {req.proforma}
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
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
                <td className="px-4 py-2">
                  {req.receipt ? (
                    <a
                      href={`/${req.receipt}`}
                      className="text-blue-600 underline hover:text-blue-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {req.receipt}
                    </a>
                  ) : uploadingId === req.id ? (
                    <input type="file" onChange={handleFileChange} />
                  ) : (
                    "-"
                  )}
                </td>
                <td className="px-4 py-2">{req.createdBy}</td>
                <td className="px-4 py-2">{req.createdAt}</td>
                <td className="px-4 py-2">
                  {!req.receipt && (
                    <>
                      {uploadingId === req.id ? (
                        <button
                          className="bg-green-500 text-white px-3 py-1 rounded"
                          onClick={() => handleUpload(req.id)}
                        >
                          Upload
                        </button>
                      ) : (
                        <button
                          className="bg-blue-500 text-white px-3 py-1 rounded"
                          onClick={() => setUploadingId(req.id)}
                        >
                          Select File
                        </button>
                      )}
                    </>
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
