import { useEffect, useReducer, useRef } from "react";
import { initialTaskState } from "./initialTaskState";
import { taskContext } from "./taskContext";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";
import { TaskActionTypes } from "./taskActions";
import { LoadBeep } from "../../utils/loadBeep";

type taskContextProviderProps = {
  children: React.ReactNode;
};

export const TaskContextProvider = ({ children }: taskContextProviderProps) => {
  // criamos o estado e usamos initialTaskState como valor inicial. O estado é um objeto que contém as informações do contexto.
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  const worker = TimerWorkerManager.getInstance();

  const playBeepRef = useRef<ReturnType<typeof LoadBeep> | null>(null);

  worker.onmessage((e) => {
    const countDownSeconds = e.data;

    if (countDownSeconds <= 0) {
      if (playBeepRef.current) {
        playBeepRef.current();
        playBeepRef.current = null;
      }
      dispatch({
        type: TaskActionTypes.COMPLETE_TASK,
      });
      worker.terminate();
    } else {
      dispatch({
        type: TaskActionTypes.COUNT_DWON,
        payload: { secondsRemaining: countDownSeconds },
      });
    }
  });

  useEffect(() => {
    if (!state.activeTask) {
      worker.terminate();
    }

    document.title = `${state.formattedSecondsRemaining} - Chronos Pomodoro`;

    worker.postMessage(state);
  }, [worker, state]);

  useEffect(() => {
    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = LoadBeep();
    } else {
      playBeepRef.current = null;
    }
  }, [state.activeTask]);

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
