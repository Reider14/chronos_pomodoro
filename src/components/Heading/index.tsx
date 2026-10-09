import styles from "./styles.module.css";

type HeadingProps = {
  children: string;
};

export function Heading({ children }: HeadingProps) {
  return (
    <>
      <div className="container">
        <div className={styles.content}>
          <h1>{children}</h1>
        </div>
      </div>
    </>
  );
}
