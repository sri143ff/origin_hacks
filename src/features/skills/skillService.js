export function analyzeSkills(userSkills, jobSkills) {
  const matched = userSkills.filter((s) => jobSkills.includes(s));
  const missing = jobSkills.filter((s) => !userSkills.includes(s));

  const matchPercent = Math.round(
    (matched.length / jobSkills.length) * 100
  );

  return { matched, missing, matchPercent };
}