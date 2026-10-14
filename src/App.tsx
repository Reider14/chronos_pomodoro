import { Home } from "./components/Pages/Home";
import { TaskContextProvider } from "./context/TaskContext/taskContextProvider";

import "./styles/theme.css";
import "./styles/global.css";
import { MessagesContainer } from "./components/MessagesContainer";
import { BrowserRouter, Route, Routes } from "react-router";
import { AboutPomodoro } from "./components/Pages/AboutPomodoro";
import { NotFound } from "./components/Pages/NotFound";

export function App() {
  return (
    <>
      <TaskContextProvider>
        <MessagesContainer>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about-pomodoro" element={<AboutPomodoro />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </MessagesContainer>
      </TaskContextProvider>
    </>
  );
}
