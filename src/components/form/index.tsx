import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../cycles";
import { DefaultInput } from "../defaultInput";
import styles from "./styles.module.css";
import { DefaultButton } from "../defaultButton";

//ctrl + f to replace

export function Form() {
  return (
    <>
      <div className={styles.form}>
        <div className={styles.formRow}>
          <DefaultInput
            id="meuInput"
            type="text"
            labelText="Task"
            placeholder="Digite a tarefa ..."
          />
        </div>
        <div>
          <p className={styles.legenda}>
            Neste clico <span>foque</span> por <span>25 minutos</span>
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Cycles />
        </div>
        <div className={styles.formRow}>
          <DefaultButton icon={<PlayCircleIcon />} />
        </div>
      </div>
    </>
  );
}
