import { createContext } from "react";
import type { TaskStateModel } from "../../model/TaskStateModel";
import { initialTaskState } from "./initialTaskState";

type taskContext = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContextValue = {
  state: initialTaskState,
  setState: () => {},
};

export const taskContext = createContext<taskContext>(initialContextValue);
