import { create } from "zustand";

const useStore = create((set) => ({
  // Core Skills
  skills: JSON.parse(localStorage.getItem("userSkills")) || ["React", "JavaScript"],
  
  // Ecosystem States
  activeProjects: JSON.parse(localStorage.getItem("activeProjects")) || [],
  completedModules: JSON.parse(localStorage.getItem("completedModules")) || [],
  appliedJobs: JSON.parse(localStorage.getItem("appliedJobs")) || [],
  bookedMentors: JSON.parse(localStorage.getItem("bookedMentors")) || [],
  shortlistedTalent: JSON.parse(localStorage.getItem("shortlistedTalent")) || [],
  resumeAnalysis: JSON.parse(localStorage.getItem("resumeAnalysis")) || null,

  // --- ACTIONS ---

  setResumeAnalysis: (analysis) => set((state) => {
    localStorage.setItem("resumeAnalysis", JSON.stringify(analysis));
    return { resumeAnalysis: analysis };
  }),

  shortlistTalent: (talent) => set((state) => {
    const exists = state.shortlistedTalent.find(t => t.name === talent.name);
    if (exists) return state;
    const updated = [...state.shortlistedTalent, talent];
    localStorage.setItem("shortlistedTalent", JSON.stringify(updated));
    return { shortlistedTalent: updated };
  }),

  setSkills: (newSkills) => set((state) => {
    localStorage.setItem("userSkills", JSON.stringify(newSkills));
    return { skills: newSkills };
  }),

  enrollProject: (project) => set((state) => {
    const exists = state.activeProjects.find(p => p.id === project.id);
    if (exists) return state;
    const updated = [...state.activeProjects, project];
    localStorage.setItem("activeProjects", JSON.stringify(updated));
    return { activeProjects: updated };
  }),

  completeModule: (moduleId) => set((state) => {
    if (state.completedModules.includes(moduleId)) return state;
    const updated = [...state.completedModules, moduleId];
    localStorage.setItem("completedModules", JSON.stringify(updated));
    return { completedModules: updated };
  }),

  applyForJob: (job) => set((state) => {
    const exists = state.appliedJobs.find(j => j.id === job.id);
    if (exists) return state;
    const updated = [...state.appliedJobs, job];
    localStorage.setItem("appliedJobs", JSON.stringify(updated));
    return { appliedJobs: updated };
  }),

  bookMentor: (mentorName) => set((state) => {
    if (state.bookedMentors.includes(mentorName)) return state;
    const updated = [...state.bookedMentors, mentorName];
    localStorage.setItem("bookedMentors", JSON.stringify(updated));
    return { bookedMentors: updated };
  })
}));

export default useStore;