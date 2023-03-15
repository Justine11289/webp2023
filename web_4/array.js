let arr = ["Apple","Banana","Orange","Guava","Papaya"];
arr.forEach(function(elem){console.log(elem);})
for(let i = 0; i < arr.length; i++){console.log(arr[i]);}

var fruits = ["Banana","Orange","Apple","Mango"];
fruits[0] = "Kiwi"; //["Kiwi","Orange","Apple","Mango"]
fruits[fruits.length] = "Kiwi"; //["Banana","Orange","Apple","Mango","Kiwi"]
delete fruits[0]; //[,"Orange","Apple","Mango"]
