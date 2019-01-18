const Header = (props) => {
    const activeItems = props.items.filter(item => item.active);
    let totalPrice = props.totalPrice;
    // const totalPrice = props.items.reduce((acc, item) => {
    //     if (item.active) {
    //         acc + item.price;
    //     }
    //     return acc;
    // }, 0);
    // console.log(props.items);
    return (
        <React.Fragment>
            <h1>Wielkość zamówienia: {activeItems.length}</h1>
            <p>Suma zamówienia: {totalPrice.toFixed(2)}zł</p>
        </React.Fragment>
    )
}