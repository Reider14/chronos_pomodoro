import {
  HistoryIcon,
  HouseIcon,
  LucideSettings,
  MoonIcon,
  SunIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

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
        <a
          href="#"
          className={styles.menuLink}
          aria-label="Go to home page"
          title="Go to home page"
        >
          <HouseIcon />
        </a>
        <a
          href="#"
          className={styles.menuLink}
          aria-label="See history"
          title="See history"
        >
          <HistoryIcon />
        </a>
        <a
          href="#"
          className={styles.menuLink}
          aria-label="settings"
          title="settings"
        >
          <LucideSettings />
        </a>
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
