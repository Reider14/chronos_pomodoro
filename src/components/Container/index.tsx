import styles from "./styles.module.css";

type ComponentProps = {
  children: React.ReactNode;
};

export function Component({ children }: ComponentProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section>{children}</section>
      </div>
    </div>
  );
}
