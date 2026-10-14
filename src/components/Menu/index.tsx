import {
  HistoryIcon,
  HouseIcon,
  LucideSettings,
  MoonIcon,
  SunIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

import styles from "./styles.module.css";
import { RouterLink } from "../RouterLink";

export function Menu() {
  type AvailableTheme = "dark" | "light";

  const [theme, setTheme] = useState<AvailableTheme>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvailableTheme) || "dark"; // pegar theme mesmo se n existe
    return storageTheme;
  });

  // tabela de consulta
  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, // evita o redirecionamento da pagina
  ) {
    event.preventDefault();

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <nav className={styles.menu}>
        <RouterLink
          href="/"
          className={styles.menuLink}
          aria-label="Go to home page"
          title="Go to home page"
        >
          <HouseIcon />
        </RouterLink>
        <RouterLink
          href="#"
          className={styles.menuLink}
          aria-label="See history"
          title="See history"
        >
          <HistoryIcon />
        </RouterLink>
        <RouterLink
          href="#"
          className={styles.menuLink}
          aria-label="settings"
          title="settings"
        >
          <LucideSettings />
        </RouterLink>
        <a
          href="#"
          className={styles.menuLink}
          aria-label="Change theme"
          title="Change theme"
          onClick={handleThemeChange}
        >
          {nextThemeIcon[theme]}
        </a>
      </nav>
    </>
  );
}
