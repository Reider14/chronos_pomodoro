import styles from "./styles.module.css";

type DefaultInputProps = {
  id: string;
  labelText?: string; /* no caso de nao ser obrigatorio */
  placeholder: string;
  /* "...rest" of the props */
} & React.ComponentProps<"input">;

export function DefaultInput({
  id,
  labelText,
  type,
  placeholder,
  ...props
}: DefaultInputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      {/*Seu id devecoincidir com o htmlFor do label.*/}
      {/*labelText ? <label htmlFor={id}>{labelText}</label> : ""*/}
      <input
        className={styles.input}
        id={id}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </>
  );
}
