import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";

export default function EditRequest() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [proformaFile, setProformaFile] = useState(null);

  useEffect(() => {
    // TODO: Fetch request data by ID from backend
    // Example:
    // fetch(`/api/requests/${id}`).then(res => res.json()).then(data => {
    //   setTitle(data.title);
    //   setDescription(data.description);
    //   setAmount(data.amount);
    //   setProformaFile(data.proformaFile);
    // });

    // Dummy data for now
    setTitle("Laptop Purchase");
    setDescription("Buy a new laptop for work");
    setAmount(1200);
  }, [id]);

  const handleFileChange = (e) => {
    setProformaFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send updated request to backend
    console.log({ id, title, description, amount, proformaFile });
    alert("Request updated successfully!");
    navigate("/staff/requests"); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
          Edit Request #{id}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Purchase Request Title"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the purpose of this purchase"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Total Amount in USD"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Upload Proforma / Quotation
            </label>

            <div className="flex items-center gap-4">
              <label
                htmlFor="proforma-upload"
                className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Choose File
              </label>
              {proformaFile && <span className="text-gray-700 italic">{proformaFile.name}</span>}
            </div>

            <input
              id="proforma-upload"
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.jpg,.png"
              className="hidden"
            />
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 rounded-lg shadow-md transition">
            Save Changes
          </Button>
        </form>
      </div>
    </div>
  );
}
