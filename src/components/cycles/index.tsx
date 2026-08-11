import styles from "./styles.module.css";

export function Cycles() {
  return (
    <div>
      <div className={styles.cycle}>
        <span>Ciclos:</span>
      </div>
      <div className={styles.cycleDots}>
        <span className={`${styles.cycleDot} ${styles.workingTime}`}></span>
        <span
          className={`${styles.cycleDot} ${styles.shortWorkingTime}`}
        ></span>
        <span className={`${styles.cycleDot} ${styles.workingTime}`}></span>
        <span
          className={`${styles.cycleDot} ${styles.shortWorkingTime}`}
        ></span>
        <span className={`${styles.cycleDot} ${styles.workingTime}`}></span>
        <span
          className={`${styles.cycleDot} ${styles.shortWorkingTime}`}
        ></span>
        <span className={`${styles.cycleDot} ${styles.workingTime}`}></span>
        <span
          className={`${styles.cycleDot} ${styles.shortWorkingTime}`}
        ></span>
        <span className={`${styles.cycleDot} ${styles.longWorkingTime}`}></span>
      </div>
    </div>
  );
}
