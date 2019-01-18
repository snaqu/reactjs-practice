const data = {
    users: [
        {
            id: 1,
            age: 19,
            name: "Agata",
            sex: "female"
        },
        {
            id: 2,
            age: 21,
            name: "Tomek",
            sex: "male"
        },
        {
            id: 3,
            age: 18,
            name: "Janek",
            sex: "male"
        },
        {
            id: 4,
            age: 29,
            name: "Karolina",
            sex: "female"
        }
    ]
}

const ItemUser = (props) => (
    <React.Fragment>
        <h3>Ma na imię: {props.name}</h3>
        <p>Ma {props.age} lat</p>
        <p>płeć: {props.sex}</p>
    </React.Fragment>
)
class ArrayMethods extends React.Component {
    state = {
        select: "all",
    }

    userList = () => {
        let users = data.users;
        switch (this.state.select) {
            case "all":
            return users.map(item => <ItemUser key={item.id} name={item.name} age={item.age} sex={item.sex} />)
            case "female":
            users = users.filter(item => item.sex === "female");
            return users.map(item => <ItemUser key={item.id} name={item.name} age={item.age} sex={item.sex} />)
            case "male":
            users = users.filter(item => item.sex === "male");
            return users.map(item => <ItemUser key={item.id} name={item.name} age={item.age} sex={item.sex} />)
        }
    }
    handleShowUsers = (option) => {
        this.setState({
            select: option
        })
    }
    render() {
        return (
            <div>
                <button onClick={() => this.handleShowUsers("male")}>Pokaż panów</button>
                <button onClick={() => this.handleShowUsers("female")}>Pokaż panie</button>
                <button onClick={() => this.handleShowUsers("all")}>Pokaż wszystkich</button>
                {this.userList()}
            </div>
        )
    }
}

ReactDOM.render(<ArrayMethods />, document.getElementById("root"));