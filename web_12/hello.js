// props
function Welcome(props) {
	return <h1>Hello, {props.name}</h1>;
}
ReactDOM.render(
	<Welcome name="cgu" />, 
	document.getElementById("root")
);

// state 
const { useState, useEffect } = React;
function Welcome() {
	const [name, setName] = useState("CGU");
	return <h1>Hello, {name}</h1>;
}
ReactDOM.render(
	<Welcome />,
document.getElementById('root')
);
