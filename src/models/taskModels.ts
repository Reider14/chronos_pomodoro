import type { taskStateModel } from "./taskStateModel";

export type taskModel = {
  id: string;
  name: string;
  duration: number;
  startdate: number;
  completeDate: number | null;
  interruptionDate: number | null;
  type: keyof taskStateModel["config"];
};
