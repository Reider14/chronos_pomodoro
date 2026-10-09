import { useTaskContext } from "../../context/TaskContext/usetaskContext";
import { getNextCycles } from "../../utils/getNextCycles";
import { getNextCyclesType } from "../../utils/getNextCyclesType";
import styles from "./styles.module.css";

export function Cycles() {
  const { state } = useTaskContext();

  const cyclesStep = Array.from({ length: state.currentCycle });

  const cycleDescription = {
    workTime: "foco",
    shortBreakTime: "pausa curta",
    longBreakTime: "pausa longa",
  };

  return (
    <>
      <div className={styles.cycles}>
        <span>Cycles:</span>
      </div>
      <div className={styles.cyclesDots}>
        {cyclesStep.map((_, index) => {
          const nextCycle = getNextCycles(index);
          const nextCycleType = getNextCyclesType(nextCycle);
          return (
            <span
              key={`$nextCycleType}_nextCycle`}
              className={`${styles.cyclesDot} ${styles[nextCycleType]}`}
              aria-label={`Indicador de ciclo de ${cycleDescription[nextCycleType]}`}
              title={`Indicador de ciclo de ${cycleDescription[nextCycleType]}`}
            ></span>
          );
        })}
        {/* <span className={`${styles.cyclesDot} ${styles.workTime}`}></span> */}
      </div>
    </>
  );
}
