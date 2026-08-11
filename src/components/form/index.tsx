import styles from "./styles.module.css";

//ctrl + f to replace

export function Form() {
  return (
    <>
      <div className={styles.form}>
        <div className={styles.formRow}>
          <label className={styles.label} htmlFor="input">
            Task
          </label>
          <input
            className={styles.input}
            id="input"
            type="text"
            placeholder="Enter your task"
          />
        </div>
        <div>
          <p className={styles.legenda}>
            Neste clico <span>foque</span> por <span>25 minutos</span>
          </p>
        </div>
        <div>
          <p>Ciclos:</p>
          <p>0 0 0 0 0 0</p>
        </div>
        <div>
          <button>Enviar</button>
        </div>
      </div>
    </>
  );
}
