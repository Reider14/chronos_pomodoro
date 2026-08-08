import styles from './Heading.module.css'

// tipagem
type HeadingProps = {
    children: React.ReactNode
}

// destructuring objeto props
export function Heading({children}: HeadingProps) {
    console.log(styles)
    return (
        <h1 className={styles.heading}>{children}</h1>
    )
}