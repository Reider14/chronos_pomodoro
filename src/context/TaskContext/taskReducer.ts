/*
 useReducer -> roock do react que recebe um reducer e um estado inicial 
 Reducer -> funcao que recebe o estual e uma acao, retorna o novo estado
 sate -> o estado
 action -> a acao que vai ser executada
 type -> o tipo da acao
 payload -> os dados extras que a acao precisa para ser executada



 */
import type { TaskStateModel } from "../../model/TaskStateModel";
import { TaskActionTypes, type TaskActionModel } from "./taskActions";

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      return state;
    }
    case TaskActionTypes.INTERRUPT_TASK: {
      return state;
    }
    case TaskActionTypes.COMPLETE_TASK: {
      return state;
    }
    case TaskActionTypes.RESET_TASKS: {
      return state;
    }
  }
  return state;
}
