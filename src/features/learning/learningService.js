export const courses = {
  React: "React for Beginners",
  JavaScript: "JavaScript Mastery",
  Node: "Node.js Bootcamp",
  MongoDB: "MongoDB Crash Course",
};

export function getCourses(missingSkills) {
  return missingSkills.map((skill) => ({
    skill,
    course: courses[skill] || "Search online",
  }));
}