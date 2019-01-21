class App extends React.Component {
    state = {
        value: 1,
        ratio: 2,
    }

    handleMultiply = () => {
        this.setState((prevState) => ({
            value: prevState.value * this.state.ratio
        }))
    }

    componentDidUpdate() {
        const { value, ratio } = this.state
        if (value >= 1000 && ratio === 2) {
            this.setState({
                ratio: 0.5
            })
        } else if (value <= 1 && ratio === 0.5) {
            this.setState({
                ratio: 2
            })
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleMultiply}>Multiply by: {this.state.ratio}</button>
                <p>{this.state.value}</p>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));