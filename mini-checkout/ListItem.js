const ListItem = (props) => {
    const items = props.items.map(item => {
        return (
            <Item
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                changeStatus={props.changeStatus}
                active={item.active}
            />
        )
    })
    return (
        <React.Fragment>
            <ul>
                {items}
            </ul>
        </React.Fragment>
    )
}