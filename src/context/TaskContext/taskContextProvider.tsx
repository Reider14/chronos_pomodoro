import { useState } from "react";
import { initialTaskState } from "./initialTaskState";
import { taskContext } from "./taskContext";

type taskContextProviderProps = {
  children: React.ReactNode;
};

export const TaskContextProvider = ({ children }: taskContextProviderProps) => {
  const [state, setState] = useState(initialTaskState);

  return (
    <taskContext.Provider value={{ state, setState }}>
      {children}
    </taskContext.Provider>
  );
};
