import type { TaskModel } from "./taskModel";

// Estados -> Componentes -> Filhos

export type TaskStateModel = {
  tasks: TaskModel[]; // historico, Form
  secondsRemaining: number; //Home, CountDwon, historico, Form, Button
  formattedSecondsRemaining: string; //Titulo, CountDwon
  activeTask: TaskModel | null; //CountDwon, historico, Form, Button
  currentCycle: number; // Home
  config: {
    //Form
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
