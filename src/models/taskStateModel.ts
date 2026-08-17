import type { taskModel } from "./taskModels";

export type taskStateModel = {
  tasks: taskModel[];
  secondsRemainig: number;
  formattedSecondRemaining: string;
  active: taskModel | null;
  currentCycles: number; // 1 a 8 clicos
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
