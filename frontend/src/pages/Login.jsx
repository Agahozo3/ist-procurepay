import React from "react";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-blue-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md border border-blue-200">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full border-2 border-blue-400 p-1 bg-white flex items-center justify-center">
            <User className="w-16 h-16 text-blue-400" />
          </div>
        </div>

        <h2 className="text-center text-2xl font-semibold text-blue-400 mb-8">
          Welcome Back
        </h2>
        <div className="mb-5">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Enter your password"
          />
        </div>

        <button className="w-full bg-blue-400 hover:bg-blue-500 text-white text-lg font-medium py-3 rounded-lg shadow-md transition mb-4">
          LOGIN
        </button>
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-400 font-medium cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
