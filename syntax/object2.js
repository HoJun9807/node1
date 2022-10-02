//array, object
/*
const { copyFileSync } = require("fs");

var f = function (){
    console.log(1+1);
    console.log(1+2);
}
console.log('function',f);
f();
*/
// var i = if(true){console.log(1)}

//var w = while(true){console.log(1)};
//값으로서의 함수
var f = function(){
    console.log(1+1);
    console.log(1+2);
}
var a =[f];
a[0](); //  배열의 원소로 함수 존재

var o = {
    func:f
}
o.func(); // 객체의 원소로 함수 존재