function tree(n) {
  var top = (n/2)+1;
  var bottom = (n-top)+1;
  printTreeTop(top);
  printTreeBottom(bottom);
}
function printTreeTop(n) {
  for(var i = 1; i <= n; i++){
    let Top = '';
    let j = (2*i)-1;
    Top += repeatchar(' ', 4-i);
    Top += repeatchar('*', j);
    console.log(Top);
  }
}
function printTreeBottom(n) {
  for(var i = 1; i <= n; i++){
    let Bottom = '';
    Bottom += repeatchar(' ', n);
    Bottom += '*';
    console.log(Bottom);
  }
}
function repeatchar(arg_char, n) {
  let String = '';
  for(var i = 1; i <= n; i++){
    String += arg_char;
  }
  return String;
}

tree(7);
