const Message = (props) => (
    <p>{props.txt}</p>
)
const handleCheckCheckbox = (isConfirmed, isFormSubmitted) => {
    if (isFormSubmitted) {
        if (isConfirmed) {
            return <Message txt="Możesz obejrzeć film!" />
        } else {
            return <Message txt="Nie masz odpowiedniego wieku!" />
        }
    } else { return null }
}

class CheckBox extends React.Component {
    state = {
        isConfirmed: false,
        isFormSubmitted: false
    }

    handleChecbox = () => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
            isFormSubmitted: false
        }))
    }

    handleCheckSubmit = (e) => {
        e.preventDefault();
        if (!this.state.isFormSubmitted) {
            this.setState({
                isFormSubmitted: true
            })
        }
    }

    // handleCheckCheckbox = () => {
    //     if (this.state.isFormSubmitted) {
    //         if (this.state.isConfirmed) {
    //             return <Message txt="Możesz obejrzeć film!" />
    //         } else {
    //             return <Message txt="Nie masz odpowiedniego wieku!" />
    //         }
    //     } else { return null }
    // }

    render() {
        console.log(this.state.isFormSubmitted);
        return (
            <div>
                <h1>Kup bilet na najlepszy film roku!</h1>
                <form onSubmit={this.handleCheckSubmit}>
                    <input
                        type="checkbox"
                        id="age"
                        onChange={this.handleChecbox}
                        checked={this.isConfirmed}
                    />
                    <label htmlFor="age">Mam więcej niż 16 lat</label>
                    <br />
                    <button type="submit">Kup bilet</button>
                </form>
                {handleCheckCheckbox(this.state.isConfirmed, this.state.isFormSubmitted)}
                {/* {this.handleCheckCheckbox() */}
            </div>
        )
    }
}
ReactDOM.render(<CheckBox />, document.getElementById("root"));