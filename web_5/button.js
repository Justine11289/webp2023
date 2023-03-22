var count = 1;
function addfunction(){
  var btn = document.createElement("BUTTON");
  btn.innerHTML = `Click Me (${count})`;
  btn.setAttribute("id","btn_" + count++);
  btn.setAttribute("class","btn btn-outline-danger");
  console.log(btn);
  document.body.appendChild(btn);
};

function delfunction(){
  var btn = document.getElementById("btn_" + --count);
  console.log(btn);
  document.body.removeChild(btn);
};
