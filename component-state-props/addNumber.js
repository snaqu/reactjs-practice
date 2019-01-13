class App extends React.Component {

    // state który przechowuje dane te które mają się tylko zmieniać 
    state = {
        text: ''
    }
    // funkcja wywołuje sie po on clicku
    handleClick = () => {
        // updatuje state za pomoca setState
        const number = Math.floor(Math.random() * 10);
        this.setState({
            text: this.state.text += number
        })
    }
    render() {
        const nameOfSth = "moge stowrzyc zmienna tutaj i uzyc jej nizej";
        return (
            <div>
                <button onClick={this.handleClick}>{this.props.nameBtn}</button>
                <PanelResult text={this.state.text}>numbers: </PanelResult>
            </div>
        )
    }
}

// osobny komponent do którego jest przekazywany props
const PanelResult = (props) => {
    return (
        // children poprzez props ustawia się w komponencie pomiędzy znacznikami
        <h1>{props.children} {props.text}</h1>
    )
}

// moge przekazać props poprzez app i odwołać się w render do niego
ReactDOM.render(<App nameBtn="Dodaj cyfre!" />, document.getElementById("root"));