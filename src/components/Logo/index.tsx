import { TimerIcon } from "lucide-react";
import { Heading } from "../Heading";
import styles from "./styles.module.css";

//ctrl + f to replace

export function Logo() {
  console.log(styles);
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink} href="#">
        <TimerIcon />
        <Heading>Chronos</Heading>
      </a>
    </div>
  );
}
