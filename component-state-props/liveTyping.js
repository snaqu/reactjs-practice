class App extends React.Component {
    // state przechowuje właściwości które się mają zmieniać
    state = {
        value: ''
    }
    // wywołane jest po każdej zmianie która nastąpi na inpucie
    // aktualizuje state i przesyła do niego wartość z inputa
    handleChange = (e) => {
        // setState zmienia się w chiwli renderowania strony!
        this.setState({
            value: e.target.value
        })
    }

    // po clicku akutalizuje state i wpisuje do niego pustego stringa
    handleClick = (e) => {
        this.setState({
            value: ''
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="wpisz..." />
                <input type="button" onClick={this.handleClick} value="reset" />
                <h1>{this.state.value.toUpperCase()}</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));