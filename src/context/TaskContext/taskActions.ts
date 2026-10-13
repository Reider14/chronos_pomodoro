import type { TaskModel } from "../../model/taskModel";

export enum TaskActionTypes {
  START_TASK = "START_TASK",
  INTERRUPT_TASK = "INTERRUPT_TASK",
  COMPLETE_TASK = "COMPLETE_TASK",
  RESET_TASKS = "RESET_TASKS",
}

export type TaskActionWithPayload =
  | {
      type: TaskActionTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionTypes.COMPLETE_TASK;
      payload: TaskModel;
    };

export type TaskActionWithoutPayload =
  | {
      type: TaskActionTypes.RESET_TASKS;
    }
  | {
      type: TaskActionTypes.INTERRUPT_TASK;
    };

export type TaskActionModel = TaskActionWithPayload | TaskActionWithoutPayload;
