import { useEffect, useReducer } from "react";
import { initialTaskState } from "./initialTaskState";
import { taskContext } from "./taskContext";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";
import { TaskActionTypes } from "./taskActions";

type taskContextProviderProps = {
  children: React.ReactNode;
};

export const TaskContextProvider = ({ children }: taskContextProviderProps) => {
  // criamos o estado e usamos initialTaskState como valor inicial. O estado é um objeto que contém as informações do contexto.
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage((e) => {
    const countDwonSeconds = e.data;
    console.log(countDwonSeconds);

    if (countDwonSeconds <= 0) {
      dispatch({
        type: TaskActionTypes.COMPLETE_TASK,
      });
      worker.terminate();
    } else {
      dispatch({
        type: TaskActionTypes.COUNT_DWON,
        payload: { secondsRemaining: countDwonSeconds },
      });
    }
  });

  useEffect(() => {
    if (!state.activeTask) {
      console.log("Falta de activetasks");
      worker.terminate();
    }

    worker.postMessage(state);
  }, [worker, state]);

  return (
    <taskContext.Provider value={{ state, dispatch }}>
      {children}
    </taskContext.Provider>
  );
};

/*
initialTaskState diz como o estado começa. useState cria o estado real. 
createContext cria o canal. O Provider coloca o estado real nesse canal. 
E useContext pega o que está no canal.
*/
