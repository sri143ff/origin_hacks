export function getSkillGap(userSkills, jobSkills) {
  return jobSkills.filter(skill => !userSkills.includes(skill));
}