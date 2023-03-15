function fun1(...theArgs){
  console.log(theArgs.length);
}
fun1();  //0
fun1(5);  //1
fun1(5,6,7); //3

const counter = (function(){
  let i = 1;
  return function(){
    console.log(i++);
  };
}());
counter(); // 1
counter(); // 2
