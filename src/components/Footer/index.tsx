import { Link } from "react-router";
import styles from "./styles.module.css";

export function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <Link to="./aboutPomodoro/">
          Check more about the Pomodoro Technique
        </Link>
        <Link to="/">Chronos Pomodoro © 2026 - Made with 💚 by Reider14</Link>
      </div>
    </>
  );
}
