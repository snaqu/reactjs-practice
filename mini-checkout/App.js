class App extends React.Component {
    state = {
        items: [
            { id: 1, name: "herbata", active: false, price: 2.30 },
            { id: 2, name: "jajka", active: false, price: 1.20 },
            { id: 3, name: "masło", active: false, price: 4.30 },
            { id: 4, name: "woda", active: false, price: 3.65 },
            { id: 5, name: "wino", active: false, price: 21.90 },
            { id: 6, name: "talarki", active: false, price: 11.00 },
            { id: 7, name: "bułki", active: false, price: 7.50 },
        ],
        totalPrice: 0
    }
    changeStatus = (id, price, active) => {
        const newPrice = parseFloat(price.toFixed(2));
        if (active === false) {
            const newArr = this.state.items.map(item => {
                if (item.id === id) {
                    item.active = !item.active
                }
                return item
            })
            this.setState({
                items: newArr,
                totalPrice: this.state.totalPrice + newPrice
            })
        } else {
            const newArr = this.state.items.map(item => {
                if (item.id === id) {
                    item.active = !item.active
                }
                return item
            })
            this.setState({
                items: newArr,
                totalPrice: this.state.totalPrice - newPrice
            })
        }
    }
    render() {
        return (
            <div>
                <Header items={this.state.items} totalPrice={this.state.totalPrice} />
                <ListItem items={this.state.items} changeStatus={this.changeStatus} />
            </div>
        );
    }
}