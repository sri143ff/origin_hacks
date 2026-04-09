import MainLayout from "../components/layout/MainLayout";
import useStore from "../store/useStore";
import { getCourses } from "../features/learning/learningService";

export default function Learning() {
  const skills = useStore((state) => state.skills);

  const missingSkills = ["React", "Node"]; // mock
  const courses = getCourses(missingSkills);

  return (
    <MainLayout>
      <h2 className="text-3xl font-bold mb-6">Learning Path</h2>

      <div className="grid grid-cols-2 gap-6">
        {courses.map((c, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
          >
            <h3 className="font-semibold">{c.skill}</h3>
            <p className="text-gray-500">{c.course}</p>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}