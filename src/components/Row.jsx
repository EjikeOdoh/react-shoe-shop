export default function Row(props) {
    return (
        <div className="det">
            <p className="label">{props.label}</p>
            <p className={`value ${props.color}`}>${props.value}</p>
        </div>
    )
}