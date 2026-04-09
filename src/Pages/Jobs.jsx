import { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import useStore from "../store/useStore";

export default function Jobs() {
  const userSkills = useStore((state) => state.skills);

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 Fetch from backend
  useEffect(() => {
    if (userSkills.length === 0) {
      setJobs([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    fetch("http://localhost:5000/api/jobs/match", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userSkills }),
    })
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [userSkills]);

  return (
    <MainLayout>
      <div className="space-y-6">

        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold">Opportunities</h2>
          <p className="text-gray-500">
            AI-powered job matching based on your skills
          </p>
        </div>

        {/* Empty State */}
        {userSkills.length === 0 ? (
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <p className="text-gray-500">
              Add skills in Profile to see job matches 
            </p>
          </div>
        ) : loading ? (
          <p className="text-gray-500">Analyzing with AI...</p>
        ) : (
          <div className="grid grid-cols-2 gap-6">

            {jobs.map((job, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 border-l-4 border-blue-500"
              >

                {/* Title */}
                <h3 className="text-xl font-semibold">{job.title}</h3>

                {/* Match Score */}
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>AI Match Score</span>
                    <span className="font-semibold">{job.match}%</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                      style={{ width: `${job.match}%` }}
                    ></div>
                  </div>
                </div>

                {/* Missing Skills */}
                {job.missing?.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-red-500 font-medium">
                      Missing Skills:
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {job.missing.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Recommendations */}
                {job.missing?.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-blue-500 font-medium">
                      AI Recommendations:
                    </p>

                    {job.missing.map((skill, idx) => (
                      <p key={idx} className="text-sm mt-1">
                         Learn {skill} with projects
                      </p>
                    ))}
                  </div>
                )}

              </div>
            ))}

          </div>
        )}

      </div>
    </MainLayout>
  );
}