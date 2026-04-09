import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Profile", path: "/profile" },
    { name: "Jobs", path: "/jobs" },
    {name:"Learning", path:"/learning"},
  ];

  return (
    <div className="w-64 h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6 flex flex-col shadow-xl">

      <h1 className="text-3xl font-extrabold mb-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        SkillBridge
      </h1>

      <nav className="flex flex-col gap-3">
        {navItems.map((item, i) => {
          const active = location.pathname === item.path;

          return (
            <Link
              key={i}
              to={item.path}
              className={`px-4 py-2 rounded-lg transition duration-300 ${
                active
                  ? "bg-gradient-to-r from-blue-500 to-purple-500"
                  : "hover:bg-gray-800 hover:scale-105"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto text-gray-400 text-sm">
        © 2026 SkillBridge
      </div>
    </div>
  );
}