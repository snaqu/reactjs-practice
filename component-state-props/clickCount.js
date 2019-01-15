class App extends React.Component {
    state = {
        count: 0,
        result: 0
    }

    handleMathClick = (type, number) => {
        if (type === "add") {
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: prevState.result + number
            }))
        } else if (type === "remove") {
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: prevState.result - number
            }))
        } else if (type === "reset") {
            this.setState(prevState => ({
                result: prevState.result = 0
            }))
        }
    }

    render() {
        return (
            <div>
                <MathButton
                    type="remove"
                    number="1"
                    value="-1"
                    click={this.handleMathClick}
                />
                <MathButton
                    type="remove"
                    number="10"
                    value="-10"
                    click={this.handleMathClick}
                />
                <MathButton
                    type="reset"
                    value="reset"
                    click={this.handleMathClick}
                />
                <MathButton
                    type="add"
                    number="1"
                    value="+1"
                    click={this.handleMathClick}
                />
                <MathButton
                    type="add"
                    number="10"
                    value="+10"
                    click={this.handleMathClick}
                />
                <ResultPanel
                    count={this.state.count}
                    result={this.state.result}
                />
            </div>
        )
    }
}
const MathButton = (props) => {
    const number = parseInt(props.number);
    return (
        <button onClick={() => props.click(props.type, number)}>{props.value}</button>
    )
}
const ResultPanel = (props) => {

    return (
        <React.Fragment>
            <h1>Liczba kliknięć: {props.count} {props.count > 10 ? <span> uwaga wybuchnie!</span> : null}</h1>
            <h1>Wynik: {props.result}</h1>
        </React.Fragment >
    )
}

ReactDOM.render(<App />, document.getElementById("root"));