import { create } from "zustand";

export const useStore = create((set) => ({
  submitStatus: false,
  setStatus: (status) => {
    set({ submitStatus: status });
  },
}));
