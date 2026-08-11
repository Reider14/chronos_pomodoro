import { HouseIcon, SettingsIcon, SunIcon, TimerIcon } from "lucide-react";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";

type AvailebleTheme = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailebleTheme>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvailebleTheme) || "dark";
    return storageTheme;
  });

  function handleChangeTheme(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); // nao seguir o link

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
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para home page"
        title="Ir para home page"
      >
        <TimerIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ver historico"
        title="Ver historico"
      >
        <HouseIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="Configuracoes"
        title="Configuracoes"
      >
        <SettingsIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="Mudar o tema"
        title="Mudar o tema"
        onClick={handleChangeTheme}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
