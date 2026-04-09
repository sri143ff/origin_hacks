import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-6">

      <h1 className="text-6xl font-bold text-blue-600">404</h1>

      <p className="mt-4 text-xl font-semibold">
        Page Not Found
      </p>

      <p className="mt-2 text-gray-500">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link to="/">
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Go Home
        </button>
      </Link>

    </div>
  );
}