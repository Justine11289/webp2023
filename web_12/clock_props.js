function Clock(props) {
	return (
		<div>
		<h1>長庚標準時間#props</h1>
		<h2>目前為: {props.mydate.toLocaleTimeString()}</h2>
		</div>
	);
}

function tick() {
	ReactDOM.render(<Clock mydate={new Date()} />,
	document.getElementById('root'));
}
setInterval(tick, 1000);
