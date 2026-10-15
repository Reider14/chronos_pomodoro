import type { TaskModel } from "../model/taskModel";

export function GetTaskStatus(task: TaskModel, activeTask: TaskModel | null) {
  if (task.completeDate) return "Complete";
  if (task.interruptDate) return "Interrompido";
  if (task.id === activeTask?.id) return "Em progresso";
  return "Abandonado";
}
