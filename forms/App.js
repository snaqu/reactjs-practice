class App extends React.Component {
    state = {
        name: "",
        text: "",
        isLike: false,
        visitedTimes: "0"
    }
    handleChange = e => {
        if (e.target.type === "checkbox") {
            this.setState({
                [e.target.name]: e.target.checked
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }
    render() {
        return (
            <div>
                <label>
                    City:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Describe this city:
                    <textarea name="text" value={this.state.text} onChange={this.handleChange}></textarea>
                </label>
                <br />
                <label>
                    Do you like this city?
                    <input type="checkbox" name="isLike" value={this.state.isLike} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    How many times have you visited this city?
                    <select name="visitedTimes" value={this.state.visitedTimes} onChange={this.handleChange}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="more">more</option>
                    </select>
                </label>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));