import { TrashIcon } from "lucide-react";
import { Container } from "../../Container";
import { DefaultButton } from "../../DefaultButton";
import { Heading } from "../../Heading";
import { MainTemplates } from "../../Templates/MainTemplatest";

import styles from "./styles.module.css";
import { useTaskContext } from "../../../context/TaskContext/usetaskContext";
import { FormatedDate } from "../../../utils/formatedDate";
import { GetTaskStatus } from "../../../utils/getTaskStatus";

export function History() {
  const { state } = useTaskContext();
  return (
    <MainTemplates>
      <Container>
        <Heading>
          <span>History</span>
          <span className={styles.buttonContainer}>
            <DefaultButton
              icon={<TrashIcon />}
              color="red"
              aria-label="Apagar todo o histórico"
              title="Apagar todo o histórico"
            />
          </span>
        </Heading>
      </Container>
      <Container>
        <div className={styles.responsiveTable}>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Data</th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
            </thead>

            <tbody>
              {state.tasks.map((task) => {
                const taskTypeDictionary = {
                  workTime: "Foco",
                  shortBreakTime: "Descanso curto",
                  longBreakTime: "Descanso longo",
                };
                return (
                  <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.duration}</td>
                    <td>{FormatedDate(task.startDate)}</td>
                    <td>{GetTaskStatus(task, state.activeTask)}</td>
                    <td>{taskTypeDictionary[task.type]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </MainTemplates>
  );
}
