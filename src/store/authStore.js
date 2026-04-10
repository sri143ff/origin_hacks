import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("currentUser")) || null,

  signup: (name, email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find((u) => u.email === email);
    if (exists) {
      alert("User already exists");
      return;
    }

    const newUser = { name, email, password };

    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    set({ user: newUser });
  },

  login: (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      alert("Invalid email or password");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));
    set({ user });
  },

  logout: () => {
    localStorage.removeItem("currentUser");
    set({ user: null });
  },

  updateProfile: (updatedData) => set((state) => {
    const updatedUser = { ...state.user, ...updatedData };
    
    // Update users list in localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map(u => u.email === state.user.email ? updatedUser : u);
    
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    
    return { user: updatedUser };
  }),
}));

export default useAuthStore;