import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuthStore from "../store/authStore";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleSignup = () => {
    if (!name || !email) return alert("Enter all details");

    login({ name, email });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600 relative">

      {/* Back to Home */}
      <Link to="/" className="absolute top-6 left-6 text-white">
        ← Home
      </Link>

      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Sign Up</h2>

        <input
          className="w-full border p-3 rounded mb-4"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full border p-3 rounded mb-4"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-purple-600 text-white py-2 rounded"
        >
          Sign Up
        </button>

        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}