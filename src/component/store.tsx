import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing

interface BearState {
  bears: string[];
  increase: (by: string) => void;
}

export const useBearStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        bears: [],
        increase: (by) => set((state) => ({ bears: [...state.bears, by] })),
      }),
      {
        name: "bear-storage",
      }
    )
  )
);
