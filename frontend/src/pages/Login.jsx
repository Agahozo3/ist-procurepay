import { User } from "lucide-react";

export default function Login() {
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
        <div className="flex items-center justify-between text-sm mb-6">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4 text-blue-400" />
            Remember me
          </label>

          <button className="hover:underline text-blue-400">
            Forgot Password?
          </button>
        </div>
        <button className="w-full bg-blue-400 hover:bg-blue-500 text-white text-lg font-medium py-3 rounded-lg shadow-md transition">
          LOGIN
        </button>

      </div>
    </div>
  );
}
