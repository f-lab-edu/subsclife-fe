import { create } from "zustand";
import { TaskType } from "@/components/TaskCard";

type WriteRemindType = {
  achievementRate: number;
  achieveReason: string;
  failReason: string;
  improvementPlan: string;
};

interface RemindStoreType {
  task: TaskType | null;
  remind: WriteRemindType;
  updateRemind: (remind: WriteRemindType) => void;
  updateTask: (task: TaskType) => void;
}

const remindStore = create<RemindStoreType>((set) => ({
  task: null,
  remind: {
    achievementRate: 50,
    achieveReason: "",
    failReason: "",
    improvementPlan: "",
  },
  updateRemind: (remind) => set({ remind }),
  updateTask: (task) => set({ task }),
}));

export { remindStore };
