export function matchSkills(userSkills, jobSkills) {
  if (!jobSkills.length) return 0;

  const matched = jobSkills.filter(skill =>
    userSkills.includes(skill)
  );

  return Math.round((matched.length / jobSkills.length) * 100);
}