/** 
function a(){
    console.log('A');
}
*/
var a = function (){ //익명함수 / javascript에서 함수는 값
    console.log('A');
} 
//a();

function slowfunc(callback){
    callback();
}

slowfunc(a); //A