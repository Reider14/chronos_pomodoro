import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";
import styles from "./styles.module.css";
import { useRef, useState } from "react";
import { useTaskContext } from "../../context/TaskContext/usetaskContext";
import type { TaskModel } from "../../model/taskModel";
import { getNextCycles } from "../../utils/getNextCycles";

export function Form() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  // o cycles so e atualizado depois de enviar o form
  const nextCycle = getNextCycles(state.currentCycle);

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
      duration: 1,
      type: "workTime",
    };

    const secondsRemaining = newTask.duration * 60;

    setState((prevState) => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: "00:00",
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

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
          />
        </div>

        <div className={styles.formRow}>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className={styles.formRow}>
          <Cycles />
        </div>

        <div className={styles.formRow}>
          <DefaultButton color="green" icon={<PlayCircleIcon />} />
        </div>
      </form>
    </>
  );
}
