import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type LibraryState = {
  saved: string[];
  following: string[];
  progress: Record<string, number>;
  seenAt: Record<string, number>;
  toggleSaved: (id: string) => void;
  toggleFollow: (name: string) => void;
  setProgress: (id: string, seconds: number) => void;
  touch: (id: string) => void;
  clearEntry: (id: string) => void;
};

const memoryStorage = {
  getItem: (): string | null => null,
  setItem: (_name: string, _value: string) => {},
  removeItem: (_name: string) => {},
};

export const useLibrary = create<LibraryState>()(
  persist(
    (set, get) => ({
      saved: [],
      following: [],
      progress: {},
      seenAt: {},
      toggleSaved: (id) => {
        const saved = get().saved;
        set({
          saved: saved.includes(id) ? saved.filter((item) => item !== id) : [id, ...saved],
        });
      },
      toggleFollow: (name) => {
        const following = get().following;
        set({
          following: following.includes(name)
            ? following.filter((item) => item !== name)
            : [name, ...following],
        });
      },
      setProgress: (id, seconds) => {
        set({
          progress: { ...get().progress, [id]: Math.max(0, seconds) },
          seenAt: { ...get().seenAt, [id]: Date.now() },
        });
      },
      touch: (id) => {
        set({ seenAt: { ...get().seenAt, [id]: Date.now() } });
      },
      clearEntry: (id) => {
        const progress = { ...get().progress };
        const seenAt = { ...get().seenAt };
        delete progress[id];
        delete seenAt[id];
        set({ progress, seenAt });
      },
    }),
    {
      name: "aurora-flow",
      skipHydration: true,
      storage: createJSONStorage(() =>
        typeof window === "undefined" ? memoryStorage : window.localStorage,
      ),
      partialize: (state) => ({
        saved: state.saved,
        following: state.following,
        progress: state.progress,
        seenAt: state.seenAt,
      }),
    },
  ),
);
