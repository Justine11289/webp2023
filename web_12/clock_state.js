const { useState, useEffect } = React;
function Clock() {
	const [mydate, setmydate] = useState(new Date());
	useEffect(() => {
		setInterval(() => {
			setmydate((mydate) => new Date());
		}, 1000);
	}, []);
	return (
		<div>
			<h1>長庚標準時間#state</h1>
			<h2>目前為: {mydate.toLocaleTimeString()}</h2>
		</div>
	);
}
ReactDOM.render(<Clock />, document.getElementById("root"));
