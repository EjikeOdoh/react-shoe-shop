import styles from '../styles/row.module.css'

export default function Row(props) {
    return (
        <div class={styles.det}>
            <p class={styles.label}>{props.label}</p>
            <p style={props.isDiscount ? {color:'#FF3333'} : undefined} class={styles.value}>{ props.notFigure === undefined ? '$' : null}{props.value}</p>
        </div>
    )
}