import { create } from "zustand";

const useStore = create((set) => ({
  user: null,
  skills: [],

  setUser: (user) => set({ user }),
  setSkills: (skills) => set({ skills }),
}));

export default useStore;