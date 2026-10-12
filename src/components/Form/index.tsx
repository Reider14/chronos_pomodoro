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
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export function Form() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  // o cycles so e atualizado depois de enviar o form
  const nextCycle = getNextCycles(state.currentCycle);
  const nextCycleType = getNextCyclesType(nextCycle);

  // envio do formulário
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // o input existe?
    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert("Please enter a task name.");
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

    const secondsRemaining = newTask.duration * 60;

    setState((prevState) => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  const handleInterruptTask = () => {
    setState((prevState) => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
        tasks: prevState.tasks.map((task) => {
          if (prevState.activeTask && prevState.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
        }),
      };
    });
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
          />
        </div>

        <div className={styles.formRow}>
          <p>Lorem ipsum dolor sit amet.</p>
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
