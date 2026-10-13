import { useTaskContext } from "../../context/TaskContext/usetaskContext";
import { getNextCycles } from "../../utils/getNextCycles";
import { getNextCyclesType } from "../../utils/getNextCyclesType";

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycles(state.currentCycle);
  const nextCycleType = getNextCyclesType(nextCycle);

  const tipsWhenActiveTask = {
    workTime: <span>Foque por {state.config.workTime}min</span>,
    shortBreakTime: <span>Foque por {state.config.shortBreakTime}min</span>,
    longBreakTime: <span>Foque por {state.config.longBreakTime}min</span>,
  };

  const tipsWhenNotActiveTask = {
    workTime: <span>Proximo ciclo e de {state.config.workTime}min</span>,
    shortBreakTime: (
      <span>Proximo descanso e de {state.config.shortBreakTime}min</span>
    ),
    longBreakTime: <span>Proximo descanso sera longo</span>,
  };

  return (
    <>
      {!!state.activeTask && tipsWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsWhenNotActiveTask[nextCycleType]}
    </>
  );
}
