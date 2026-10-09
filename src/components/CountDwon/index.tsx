import { useTaskContext } from "../../context/TaskContext/usetaskContext";
import styles from "./styles.module.css";

export function CountDwon() {
  const { state } = useTaskContext();

  return (
    <>
      <div className={styles.container}>{state.formattedSecondsRemaining}</div>
    </>
  );
}
