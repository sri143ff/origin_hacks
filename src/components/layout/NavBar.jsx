import useAuthStore from "../../store/authStore";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="h-16 bg-white/80 backdrop-blur-md border-b shadow-sm flex justify-between items-center px-6">

      <h2 className="text-lg font-semibold text-blue-600">
        Welcome, {user?.name || "User"} 
      </h2>

      <div className="flex items-center gap-4">

        {/* Avatar */}
        <div className="flex items-center gap-2 bg-white shadow px-3 py-1 rounded-full">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center rounded-full">
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <span className="text-sm font-medium">
            {user?.name}
          </span>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded hover:scale-105 transition"
        >
          Logout
        </button>

      </div>
    </div>
  );
}