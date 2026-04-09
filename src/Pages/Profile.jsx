import { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import useStore from "../store/useStore";

export default function Profile() {
  const [skills, setSkillsInput] = useState("");
  const setSkills = useStore((state) => state.setSkills);

  const handleSave = () => {
    if (!skills) return alert("Enter skills");

    const skillArray = skills.split(",").map(s => s.trim());
    setSkills(skillArray);
    alert("Skills saved!");
  };

  return (
    <MainLayout>
      <div className="flex justify-center mt-10">

        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

          <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
            Update Skills
          </h2>

          <input
            className="w-full border p-3 rounded mb-4 focus:ring-2 focus:ring-blue-400"
            placeholder="React, Node, JavaScript..."
            onChange={(e) => setSkillsInput(e.target.value)}
          />

          <button
            onClick={handleSave}
            className="w-full bg-blue-600 text-white py-2 rounded hover:scale-105 transition"
          >
            Save Skills
          </button>

        </div>

      </div>
    </MainLayout>
  );
}