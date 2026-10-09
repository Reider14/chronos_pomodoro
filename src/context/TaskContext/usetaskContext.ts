import { useContext } from "react";
import { taskContext } from "./taskContext";

export function useTaskContext() {
  return useContext(taskContext);
}
