export function getRecommendations(gaps) {
  const courses = {
    React: "React Tutorial (YouTube)",
    JavaScript: "JavaScript Basics Course",
    Node: "Node.js Crash Course",
    MongoDB: "MongoDB Guide",
  };

  return gaps.map(skill => ({
    skill,
    course: courses[skill] || "Search online course",
  }));
}