import styles from '../styles/row.module.css'

export default function Row(props) {
    return (
        <div className={styles.det}>
            <p className={styles.label}>{props.label}</p>
            <p style={props.isDiscount ? {color:'#FF3333'} : undefined} className={styles.value}>{ props.notFigure === undefined ? '$' : null}{props.value}</p>
        </div>
    )
}