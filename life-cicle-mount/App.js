class Watch extends React.Component {
    state = {}
    render() {
        const { hours, minutes, seconds } = this.props;
        return (
            <div>
                {hours < 10 ? `0${hours}` : hours} :
                {minutes < 10 ? `0${minutes}` : minutes} :
                {seconds < 10 ? `0${seconds}` : seconds}
            </div>
        );
    }
}

class App extends React.Component {
    interval = {}
    state = {
        time: this.handleTime(),
        active: true
    }

    handleTime() {
        const time = new Date();
        return ({
            hours: time.getHours(),
            minutes: time.getMinutes(),
            seconds: time.getSeconds(),
        })
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const newTime = this.handleTime();
            this.setState({
                time: newTime
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    handleOffWatch = () => {
        this.setState({
            active: !this.state.active
        })
    }

    render() {
        const { hours, minutes, seconds } = this.state.time;
        const { active } = this.state;
        return (
            <div>
                <button
                    onClick={this.handleOffWatch}>
                    {active ? "Off watch" : "On watch"}
                </button>
                {active && <Watch
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds}
                />}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));