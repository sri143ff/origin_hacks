import Navbar from "./NavBar";
import Sidebar from "./Sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="flex w-full min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-purple-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
