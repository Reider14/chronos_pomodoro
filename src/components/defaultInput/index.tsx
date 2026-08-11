import styles from "./styles.module.css";

type DefaultInputProps = {
  id: string;
  labelText?: string; // optional prop
} & React.ComponentProps<"input">;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input id={id} className={styles.input} type={type} {...rest} />
    </>
  );
}
