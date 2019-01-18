const Item = (props) => (
    <li
        className={props.active === true ? "active" : null}
        onClick={() => props.changeStatus(props.id, props.price, props.active)}
    >
        {props.name} - {(props.price).toFixed(2)}zł
    </li>
)