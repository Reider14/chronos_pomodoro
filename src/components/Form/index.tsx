import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";
import styles from "./styles.module.css";
import { useRef, useState } from "react";
import { useTaskContext } from "../../context/TaskContext/usetaskContext";
import type { TaskModel } from "../../model/taskModel";
import { getNextCycles } from "../../utils/getNextCycles";
import { getNextCyclesType } from "../../utils/getNextCyclesType";
import { TaskActionTypes } from "../../context/TaskContext/taskActions";
import { Tips } from "../Tips";
import { toast } from "react-toastify";
import { showMessage } from "../../adaptars/showMessage";

export function Form() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);
  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || "";

  // o cycles so e atualizado depois de enviar o form
  const nextCycle = getNextCycles(state.currentCycle);
  const nextCycleType = getNextCyclesType(nextCycle);

  // envio do formulário
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    toast.dismiss();

    // o input existe?
    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      showMessage.warn("Digite o nome da tarefa!");
      return;
    }

    // apenas criaste uma variável. com o modelo de dados TaskModel.
    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
  }

  const handleInterruptTask = () => {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
    toast.dismiss();
    showMessage.error("Tarefa interrompida!");
  };

  const [taskName, setTaskName] = useState("");

  return (
    <>
      <form onSubmit={handleCreateNewTask} className={styles.form} action="">
        <div className={styles.formRow}>
          <DefaultInput
            id="task"
            type="text"
            labelText="Task"
            placeholder="What do you want to do?"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            ref={taskNameInput}
            disabled={!!state.activeTask}
            defaultValue={lastTaskName}
          />
        </div>

        <div className={styles.formRow}>
          <Tips />
        </div>

        {state.currentCycle > 0 && (
          <div className={styles.formRow}>
            <Cycles />
          </div>
        )}
        <div className={styles.formRow}>
          {!state.activeTask ? (
            <DefaultButton
              aria-label="Start task"
              title="Start task"
              type="submit"
              color="green"
              icon={<PlayCircleIcon />}
              key="start-task-button"
            />
          ) : (
            <DefaultButton
              aria-label="Stop task"
              title="Stop task"
              type="button"
              color="red"
              icon={<StopCircleIcon />}
              onClick={handleInterruptTask}
              key="stop-task-button"
            />
          )}
        </div>
      </form>
    </>
  );
}
