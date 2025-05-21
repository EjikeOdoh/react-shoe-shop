import styles from '../styles/totalrow.module.css'

export default function TotalRow(props) {
    return (
        <div className={styles.totalTexts}>
        <p className={styles.label}>Total</p>
        <p className={styles.value}>${props.value}</p>
    </div>
    )
}