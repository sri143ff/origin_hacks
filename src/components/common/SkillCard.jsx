export default function SkillCard({ skill, level }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-lg">{skill}</h3>

      <div className="w-full bg-gray-200 h-2 mt-3 rounded">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded"
          style={{ width: `${level}%` }}
        ></div>
      </div>

      <p className="text-sm mt-2 text-gray-500">
        {level}% proficiency
      </p>
    </div>
  );
}