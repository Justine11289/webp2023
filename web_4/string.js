// 串接
const aString = 'JavaScript';
const bString = aString.concat(' is a ','script language');
console.log(bString);
let cString = 'JavaScript';
cString += ' is a script language';
console.log(cString);

// 長度
const aString = 'Hello World!';
const bString = '你好';
const aStringLength = aString.length; //12
const bStringLength = bString.length; //2
console.log(aString.length);
console.log(bString.length);

// 子字串搜尋
const aString = 'Apple Mango Banana';
console.log(aString.indexOf('Apple')); //0
console.log(aString.indexOf('Mango')); //6
console.log(aString.indexOf('Banana')); //12
console.log(aString.indexOf('Honey')); //-1
