const styleArgument = {fontSize: '100px', color: 'red'};

const changeText=(event)=>{
    console.log(event.target)
    event.target.innerText = event.target.innerText + "被點了"
}
    
const HelloCGU=(event)=>{
    return (
    <div>
        <h1 style = { styleArgument } onClick= {changeText}> hello CGU!!</h1>
    </div>
    );
}
export default HelloCGU;
