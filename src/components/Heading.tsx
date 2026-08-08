import styles from './Heading.module.css'

export function Heading(props){
    console.log(styles)
    return (
        <h1 className={styles.heading}>{props.children}</h1>
    )
}