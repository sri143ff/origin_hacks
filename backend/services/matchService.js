const INDUSTRY_ROLES = [
  {
    title: "Fullstack Engineer",
    required: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    company: "TechNova"
  },
  {
    title: "AI Specialist",
    required: ["Python", "PyTorch", "TensorFlow", "FastAPI"],
    company: "NeuralNet"
  },
  {
    title: "Backend Architect",
    required: ["Node.js", "Redis", "Kubernetes", "PostgreSQL", "Go"],
    company: "Uber"
  },
  {
    title: "Frontend Developer",
    required: ["React", "TypeScript", "Figma", "CSS Modules"],
    company: "DesignFlow"
  }
];

export function matchJobs(userSkills) {
  const normalizedUserSkills = userSkills.map(s => s.toLowerCase());

  return INDUSTRY_ROLES.map(role => {
    const matched = role.required.filter(req => 
      normalizedUserSkills.some(userSkill => userSkill.includes(req.toLowerCase()))
    );
    
    const missing = role.required.filter(req => !matched.includes(req));
    const matchPercentage = Math.round((matched.length / role.required.length) * 100);

    return {
      title: role.title,
      company: role.company,
      match: matchPercentage,
      matched: matched,
      missing: missing,
    };
  }).filter(role => role.match > 0)
    .sort((a, b) => b.match - a.match);
}