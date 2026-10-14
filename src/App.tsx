import { TaskContextProvider } from "./context/TaskContext/taskContextProvider";
import { MessagesContainer } from "./components/MessagesContainer";
import { MainRouters } from "./routers";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  return (
    <>
      <TaskContextProvider>
        <MessagesContainer>
          <MainRouters />
        </MessagesContainer>
      </TaskContextProvider>
    </>
  );
}
