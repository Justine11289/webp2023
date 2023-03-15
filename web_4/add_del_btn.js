function addfunction(){
  var btn1 = document.createElement("BUTTON");
  btn1.innerHTML = "Click me";
  btn1.setAttribute("id","btn");
  document.body.appendChild(btn1);
};

function delfunction(){
 var btn2 = document.getElementById("btn");
  document.body.removeChild(btn2);
};
