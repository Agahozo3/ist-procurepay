import React, { useState } from "react";
import Button from "../components/Button";

export default function RequestFormPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to backend API
    console.log({ title, description, amount });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Purchase Request</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border p-2 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border p-2 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border p-2 rounded-md"
              required
            />
          </div>

          <Button className="w-full bg-blue-400 hover:bg-blue-500 text-white text-lg font-medium py-3 rounded-lg shadow-md transition">
            Submit Request
          </Button>
        </form>
      </div>
    </div>
  );
}
