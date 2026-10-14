import { Home } from "./components/Pages/Home";
import { TaskContextProvider } from "./context/TaskContext/taskContextProvider";

import "./styles/theme.css";
import "./styles/global.css";
import { MessagesContainer } from "./components/MessagesContainer";

export function App() {
  return (
    <>
      <TaskContextProvider>
        <Home />
        <MessagesContainer>
          <Home />
        </MessagesContainer>
      </TaskContextProvider>
    </>
  );
}
