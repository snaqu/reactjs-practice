const Cash = (props) => {
    const money = (props.cash / props.ratio * props.price).toFixed(2);
    return (
        <div>
            {props.title} {props.cash <= 0 ? "" : money}
        </div>
    )
}

class App extends React.Component {
    state = {
        cash: "",
        products: "electricity",
        unit: ""
    }

    static defaultProps = {
        currencies: [
            {
                id: 0,
                name: 'zloty',
                ratio: 1,
                title: 'Price in zloty:'
            },
            {
                id: 1,
                name: 'dollar',
                ratio: 3.6,
                title: 'Price in dollars $:'
            },
            {
                id: 2,
                name: 'euro',
                ratio: 4.21,
                title: 'Price in euro €:'
            },
            {
                id: 3,
                name: 'pound',
                ratio: 4.55,
                title: 'Price in pounds £:'
            },
        ],
        prices: {
            electricity: 0.51,
            gas: 4.95,
            onions: 1.35
        }
    }

    handleChange = e => {
        this.setState({
            cash: e.target.value,
        })
    }

    handleChangeProducts = e => {
        this.setState({
            products: e.target.value,
            cash: "",
        })
    }

    insertSuffix = e => {
        switch (e) {
            case 'electricity':
                return <em>kwh</em>
            case 'gas':
                return <em>galons</em>
            case 'onions':
                return <em>pieces</em>
        }
    }

    selectPrice = (select) => (
        this.props.prices[select]
    )

    render() {
        const { cash, products } = this.state;
        const calc = this.props.currencies.map(item => {
            return (
                <Cash key={item.id} ratio={item.ratio} title={item.title} cash={cash} price={this.selectPrice(products)} />
            )
        })
        return (
            <div>
                <label>
                    Pick a product:
                    <select value={products} onChange={this.handleChangeProducts}>
                        <option value="electricity">electricity</option>
                        <option value="gas">gas</option>
                        <option value="onions">onions</option>
                    </select>
                </label>
                <label>
                    Amount:
                    <input type="number" value={cash} onChange={this.handleChange} />
                    {this.insertSuffix(products)}
                </label>
                {calc}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));