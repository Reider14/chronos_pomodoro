import { HouseIcon, SettingsIcon, SunIcon, TimerIcon } from "lucide-react";

import styles from "./styles.module.css";

//ctrl + f to replace

export function Menu() {
  console.log(styles);
  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href="#">
        <TimerIcon />
      </a>

      <a className={styles.menuLink} href="#">
        <HouseIcon />
      </a>

      <a className={styles.menuLink} href="#">
        <SettingsIcon />
      </a>

      <a className={styles.menuLink} href="#">
        <SunIcon />
      </a>
    </nav>
  );
}
