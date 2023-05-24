class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}
	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000);
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}
	render() {
		return (
			<div>
				<h1>長庚標準時間#state</h1>
				<h2>目前為: {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
	tick() {
		this.setState({
			date: new Date()
		});
	}
}
ReactDOM.render(<Clock />, document.getElementById("root"));
