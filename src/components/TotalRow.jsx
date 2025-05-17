export default function TotalRow(props) {
    return (
        <div className="det total-texts">
        <p className="label">{props.label}</p>
        <p className="total">${props.value}</p>
    </div>
    )
}