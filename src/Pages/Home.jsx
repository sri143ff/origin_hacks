import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white text-center px-6">

      <h1 className="text-6xl font-bold text-white">
        <b>SkillBridge</b> - Your Path to Success
      </h1>

      <p className="mt-4 text-lg max-w-xl">
        Smart platform connecting skills, learning, and jobs.
      </p>

      <div className="mt-6 flex gap-4">
        <Link to="/dashboard">
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold shadow hover:scale-110 transition">
            Get Started
          </button>
        </Link>

        <Link to="/jobs">
          <button className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition">
            Explore Jobs
          </button>
        </Link>
      </div>

    </div>
  );
}