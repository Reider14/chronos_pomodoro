import { TrashIcon } from "lucide-react";
import { Container } from "../../Container";
import { DefaultButton } from "../../DefaultButton";
import { Heading } from "../../Heading";
import { MainTemplates } from "../../Templates/MainTemplatest";

import styles from "./styles.module.css";
import { useTaskContext } from "../../../context/TaskContext/usetaskContext";

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
                return (
                  <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.duration}</td>
                    <td>{new Date(task.startDate).toISOString()}</td>
                    <td>{task.interruptDate}</td>
                    <td>{task.type}</td>
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
