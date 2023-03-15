var x = 'global'
let y = 'global'
console.log(this.x);  //global
console.log(this.y);  //undefined

if(true){var x = 5;}
console.log(x); //x = 5

if(true){let y = 5;}
console.log(y); //ReferenceError : y in not defined

function varTest(){
  var x = 1;
  {
    var x = 2;
    console.log(x); //x = 2
  }
  console.log(x); //x = 2
}
varTest();

function letTest(){
  let x = 1;
  {
    let x = 2;
    console.log(x); //x = 2
  }
  console.log(x); //x = 1
}
letTest();
