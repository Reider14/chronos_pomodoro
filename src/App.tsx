import { Home } from "./components/Pages/Home";
import { TaskContextProvider } from "./context/TaskContext/taskContextProvider";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  return (
    <>
      <TaskContextProvider>
        <Home />
      </TaskContextProvider>
    </>
  );
}
