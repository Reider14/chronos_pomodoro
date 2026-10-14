import styles from "./styles.module.css";
import { RouterLink } from "../RouterLink";

export function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <RouterLink href="./aboutPomodoro/">
          Check more about the Pomodoro Technique
        </RouterLink>
        <RouterLink href="/">
          Chronos Pomodoro © 2026 - Made with 💚 by Reider14
        </RouterLink>
      </div>
    </>
  );
}
