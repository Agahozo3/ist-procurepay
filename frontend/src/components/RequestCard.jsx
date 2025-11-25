
import React from "react";

export default function RequestCard({ title, count, color }) {
  return (
    <div className="p-4 bg-white rounded shadow text-center">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className={`text-2xl font-bold ${color}`}>{count}</p>
    </div>
  );
}
