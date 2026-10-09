import { createContext } from "react";
import type { TaskStateModel } from "../../model/TaskStateModel";
import { initialTaskState } from "./initialTaskState";

type taskContext = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

//Se não existir Provider, este será o valor padrão.
const initialContextValue = {
  state: initialTaskState,
  setState: () => {},
};

export const taskContext = createContext<taskContext>(initialContextValue);
