import { useEffect, useState } from "react";
import { initialTaskState } from "./initialTaskState";
import { taskContext } from "./taskContext";

type taskContextProviderProps = {
  children: React.ReactNode;
};

export const TaskContextProvider = ({ children }: taskContextProviderProps) => {
  // criamos o estado e usamos initialTaskState como valor inicial. O estado é um objeto que contém as informações do contexto.
  const [state, setState] = useState(initialTaskState);

  useEffect(() => {
    console.log("state changed", state);
  }, [state]);

  return (
    <taskContext.Provider value={{ state, setState }}>
      {children}
    </taskContext.Provider>
  );
};

/*
initialTaskState diz como o estado começa. useState cria o estado real. 
createContext cria o canal. O Provider coloca o estado real nesse canal. 
E useContext pega o que está no canal.
*/
