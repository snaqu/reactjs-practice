const Header = (props) => {
    const activeItems = props.items.filter(item => item.active);
    let totalPrice = parseFloat(props.totalPrice.toFixed(2));
    return (
        <React.Fragment>
            <h1>Wielkość zamówienia: {activeItems.length}</h1>
            <p>Suma zamówienia: {totalPrice.toFixed(2)}zł</p>
        </React.Fragment>
    )
}