import styles from '../styles/totalrow.module.css'

export default function TotalRow(props) {
    return (
        <div class={styles.totalTexts}>
        <p class={styles.label}>Total</p>
        <p class={styles.value}>${props.value}</p>
    </div>
    )
}