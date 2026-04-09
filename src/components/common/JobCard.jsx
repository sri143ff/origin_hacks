export default function JobCard({ title, match, skills }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">{title}</h3>

      <div className="flex gap-2 mt-3 flex-wrap">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="bg-gray-100 px-2 py-1 rounded text-sm"
          >
            {skill}
          </span>
        ))}
      </div>

      <p className="mt-3 text-gray-600">
        Match Score: <span className="font-bold text-green-600">{match}%</span>
      </p>

      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Apply
      </button>
    </div>
  );
}