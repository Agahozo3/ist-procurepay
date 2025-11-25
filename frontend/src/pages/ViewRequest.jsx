import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function ViewRequest() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [request, setRequest] = useState(null);

  useEffect(() => {
   
    setRequest({
      id,
      title: "Laptop Purchase",
      description: "Buy a new laptop for work",
      amount: 1200,
      status: "PENDING",
      proformaFile: "laptop_quote.pdf",
      createdBy: "Staff A",
      createdAt: "2025-11-24",
    });
  }, [id]);

  if (!request) {
    return <p className="text-center mt-10">Loading request details...</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
          Request Details #{request.id}
        </h2>

        <div className="space-y-4">
          <p>
            <strong>Title:</strong> {request.title}
          </p>
          <p>
            <strong>Description:</strong> {request.description}
          </p>
          <p>
            <strong>Amount:</strong> ${request.amount}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span
              className={`px-2 py-1 rounded-full text-white ${
                request.status === "PENDING"
                  ? "bg-yellow-500"
                  : request.status === "APPROVED"
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}
            >
              {request.status}
            </span>
          </p>
          <p>
            <strong>Proforma:</strong>{" "}
            {request.proformaFile ? (
              <a
                href={`/${request.proformaFile}`}
                className="text-blue-600 underline hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                {request.proformaFile}
              </a>
            ) : (
              "-"
            )}
          </p>
          <p>
            <strong>Created By:</strong> {request.createdBy}
          </p>
          <p>
            <strong>Created At:</strong> {request.createdAt}
          </p>
        </div>

        <Button
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 rounded-lg shadow-md transition"
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
