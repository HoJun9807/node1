// var v1 = 'v1';
// // ~1000 code
// v1 = 'bug'; ///bug
// var v2 = 'v2';

var p = {
    v1:'v1',
    v2:'v2',
    f1:function() {
        console.log(this.v1); //this -> p참조
    },
    f2:function (){
        console.log(this.v2);
    }
}
p.f1();
p.f2();

// function f1(){
//     console.log(o.v1);
// }

// function f1(){
//     console.log('bug');
// }

// function f2(){
//     console.log(o.v2);
// }

