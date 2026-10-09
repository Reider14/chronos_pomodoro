import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";
import styles from "./styles.module.css";
import { useState } from "react";

export function Form() {
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Form submitted");
  }

  const [tankName, setTaskName] = useState(" ");

  return (
    <>
      <form onSubmit={handleCreateNewTask} className={styles.form} action="">
        <div className={styles.formRow}>
          <DefaultInput
            id="task"
            type="text"
            labelText="Task"
            placeholder="What do you want to do?"
            value={tankName}
            onChange={(e) => setTaskName(e.target.value)}
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
