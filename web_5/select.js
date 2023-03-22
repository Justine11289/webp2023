var select = document.getElementById("mySelect");
select.addEventListener("change",function(){
  var selectValue = document.getElementById("selectedValue");
  selectedValue.innerHTML = "Selected value : " + this.value;
});
