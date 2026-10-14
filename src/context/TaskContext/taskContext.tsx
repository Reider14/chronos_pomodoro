import { createContext } from "react";
import type { TaskStateModel } from "../../model/TaskStateModel";
import { initialTaskState } from "./initialTaskState";
import type { TaskActionModel } from "./taskActions";

type taskContext = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

//Se não existir Provider, este será o valor padrão.
const initialContextValue = {
  state: initialTaskState,
  dispatch: () => {},
};

export const taskContext = createContext<taskContext>(initialContextValue);
