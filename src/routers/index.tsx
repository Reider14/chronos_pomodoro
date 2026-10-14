import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { Home } from "../components/Pages/Home";
import { AboutPomodoro } from "../components/Pages/AboutPomodoro";
import { NotFound } from "../components/Pages/NotFound";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
}

export function MainRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-pomodoro" element={<AboutPomodoro />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
