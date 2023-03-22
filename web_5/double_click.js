var count = 1;
function addfunction(){
  var btn = document.createElement("BUTTON");
  btn.innerHTML = `Click Me (${count})`;
  btn.setAttribute("id","btn_" + count++);
  btn.setAttribute("class","btn btn-outline-danger");
  
  btn.addEventListener("click",function(e){
    e.target.innerHTML = e.target.id + " CLICKED!";
    console.log("onclick");
  });
  
  btn.addEventListener("dblclick",function(e){
    e.target.innerHTML = "CLICKED (" + e.target.id.replace("btn_","") + ")";
    console.log("dbclick");
  });
  console.log(btn);
  document.body.appendChild(btn);
};

function delfunction(){
  var btn = document.getElementById("btn_" + --count);
  console.log(btn);
  document.body.removeChild(btn);
};
