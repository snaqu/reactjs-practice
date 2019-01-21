const ListChild = (props) => (
    <li
        key={props.name}>
        {props.name}
        <button onClick={() => props.handleDeleteItem(props.name)}>
            Delete
        </button>
    </li>
)

const ListHead = (props) => (
    <ul>
        {props.handleShowItems()}
    </ul>
)

class App extends React.Component {
    state = {
        list: [
            { name: "Jan K." },
            { name: "Jack M." },
            { name: "Tom C." },
            { name: "Kate B." }
        ]
    }

    handleShowItems = () => (
        this.state.list.map(item => <ListChild key={item.name} name={item.name} handleDeleteItem={this.handleDeleteItem} />)
    )

    handleDeleteItem = (e) => {
        const newArr = this.state.list.filter(item => item.name !== e);
        this.setState({
            list: newArr
        })
    }

    render() {
        return (
            <ListHead handleShowItems={this.handleShowItems} />
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));