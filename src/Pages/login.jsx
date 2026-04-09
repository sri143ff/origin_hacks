import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuthStore from "../store/authStore";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const user = useAuthStore((state) => state.user);

  // Auto redirect if already logged in
  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user]);

  const handleLogin = () => {
    if (!name || !email) return alert("Enter all details");

    login({ name, email });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 relative">

      {/* Back to Home */}
      <Link to="/" className="absolute top-6 left-6 text-white">
        ← Home
      </Link>

      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Login</h2>

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
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Login
        </button>

        <p className="mt-4 text-sm text-center">
          No account?{" "}
          <Link to="/signup" className="text-blue-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}