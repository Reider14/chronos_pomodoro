import styles from "./styles.module.css";

export function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <a href="" className={styles.link}>
          Entenda como funciona a tecnica pomodoro 🍎
        </a>
        <a href="" className={styles.link}>
          Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚
        </a>
      </div>
    </>
  );
}
