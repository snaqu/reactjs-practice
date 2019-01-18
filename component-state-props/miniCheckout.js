class MiniCheckout extends React.Component {
    state = {
        amount: 0,
        availableAmout: 12
    }

    handleChangeAmount = (e) => {
        if (e === "plus") {
            this.setState((prevState) => ({
                amount: prevState.amount + 1
            }))
        } else {
            this.setState((prevState) => ({
                amount: prevState.amount - 1
            }))
        }
    }

    handleRemoveAvailableAmount = () => {
        this.setState((prevState) => ({
            availableAmout: prevState.availableAmout - this.state.amount,
            amount: prevState.amount = 0
        }))
    }
    render() {
        const { amount, availableAmout } = this.state;
        return (
            <div>
                <span>Na stanie: {availableAmout}</span> <br />
                <button
                    onClick={() => this.handleChangeAmount("minus")}
                    disabled={amount === 0 ? true : false}
                >-</button>
                <span style={amount === 0 ? { opacity: 0.3 } : {}}> {amount} </span>
                <button
                    onClick={() => this.handleChangeAmount("plus")}
                    disabled={amount === availableAmout ? true : false}
                >+</button>
                {amount > 0 && <button onClick={this.handleRemoveAvailableAmount}>kup!</button>}
            </div>
        )
    }
}

ReactDOM.render(<MiniCheckout />, document.getElementById("root"));