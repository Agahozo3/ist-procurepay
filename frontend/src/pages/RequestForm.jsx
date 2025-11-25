import React, { useState } from "react";
import Button from "../components/Button";

export default function RequestForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [proformaFile, setProformaFile] = useState(null);
  const [requestDate, setRequestDate] = useState("");
  const [items, setItems] = useState([{ name: "", quantity: 1, price: "" }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send form data to backend API
    console.log({ title, description, amount, requestDate, items, proformaFile });
  };

   const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setProformaFile(e.target.files[0]);
    }
  };

  const addItem = () => setItems([...items, { name: "", quantity: 1, price: "" }]);
  const removeItem = (index) => setItems(items.filter((_, i) => i !== index));

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
          Create Purchase Request
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              {proformaFile && (
                <span className="text-gray-700 italic">{proformaFile.name}</span>
              )}
            </div>

            <input
              id="proforma-upload"
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.jpg,.png"
              className="hidden"
              required
            />
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 rounded-lg shadow-md transition">
            Submit Request
          </Button>
        </form>
      </div>
    </div>
  );
}
