class App extends React.Component {
    state = {
        divination: [
            'You will be a millionaire',
            'You will have a new brand car',
            'You will get a promotion',
        ],
        value: "",
        randomNumber: ""
    }
    drawDivination = () => {
        const { divination } = this.state;
        let random = Math.floor(Math.random() * divination.length);
        this.setState({
            randomNumber: random
        })
    }
    handleAddDivination = () => {
        if (this.state.value === "") {
            alert(`Type sth`);
        } else {
            this.setState((prevstate) => ({
                divination: [...prevstate.divination, this.state.value],
                value: ""
            }))
            alert(`Divination has been added. Actual divinations: ${[...this.state.divination]}`)
        }
    }
    handleChangeValue = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    handleShowDivination = () => (
        <em>{this.state.divination[this.state.randomNumber]}</em>
    )

    render() {
        return (
            <div>
                <button type="text" onClick={this.drawDivination}>Show divination</button>
                <label>
                    <input type="text" value={this.state.value} onChange={this.handleChangeValue} />
                    <button onClick={this.handleAddDivination}>Add divination</button>
                </label>
                {this.handleShowDivination()}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));