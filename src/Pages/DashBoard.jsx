import MainLayout from "../components/layout/MainLayout";
import useStore from "../store/useStore";

export default function Dashboard() {
  const skills = useStore((state) => state.skills);

  return (
    <MainLayout>
      <div className="space-y-8">

        {/* HERO */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold text-white">
            Welcome to SkillBridge!
          </h1>
            
          <p className="mt-2 text-blue-100">
            Bridge your skills with real opportunities
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-6">
          {[
            { title: "Total Skills", value: skills.length, color: "text-blue-600" },
            { title: "Job Matches", value: skills.length ? 2 : 0, color: "text-green-600" },
            { title: "Skill Gaps", value: skills.length ? 2 : 0, color: "text-red-500" },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <p className="text-gray-500">{card.title}</p>
              <h2 className={`text-3xl font-bold ${card.color}`}>
                {card.value}
              </h2>
            </div>
          ))}
        </div>

        {/* SKILLS */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-4">Your Skills</h3>

          {skills.length === 0 ? (
            <p className="text-gray-500">
              Add skills to unlock opportunities and job matches!
            </p>
          ) : (
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm shadow hover:scale-105 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>

      </div>
    </MainLayout>
  );
}