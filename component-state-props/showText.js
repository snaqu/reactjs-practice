class App extends React.Component {
    // przechowuje czy jest aktywny button
    state = {
        value: false
    }

    // po kliknięciu zmienia w state wartosc aktywnosci
    handleShowMessage = () => {
        this.setState({
            value: !this.state.value
        })
    }

    render() {
        const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nulla architecto? Expedita ratione iure numquam, quia ut distinctio hic perferendis?';

        return (
            <div>
                <input
                    type="button"
                    value={!this.state.value ? "pokaz" : "ukryj"}
                    onClick={this.handleShowMessage} />
                <p>{this.state.value ? text : null}</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));