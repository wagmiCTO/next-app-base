import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface PersistedState {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

export const usePersistedStore = create<PersistedState>()(
  persist(
    (set) => ({
      theme: "light",
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "next-app-base",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
