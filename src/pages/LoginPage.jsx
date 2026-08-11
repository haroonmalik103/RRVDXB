import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    // Demo login
    localStorage.setItem("userEmail", email);

    alert("Login successful!");

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center">
          Login
        </h1>

        <p className="text-gray-500 text-center mt-2">
          Login to your RRVDXB account
        </p>

        <form onSubmit={handleLogin} className="mt-8">

          {/* Email */}
          <label className="block font-semibold mb-2">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-5 outline-none focus:border-red-500"
          />

          {/* Password */}
          <label className="block font-semibold mb-2">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 outline-none focus:border-red-500"
          />

          {/* Login */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700"
          >
            Login
          </button>

        </form>

        {/* Register */}
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-red-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>

        {/* Home */}
        <Link
          to="/"
          className="block text-center mt-4 text-gray-500 hover:text-red-600"
        >
          ← Back to Home
        </Link>

      </div>

    </div>
  );
}

export default LoginPage;