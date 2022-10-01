var number = [1,200,20,30,1,10000];
var i = 0;
var total=0;
while(i<number.length){
    total = total + number[i];
    i = i+1;
}
console.log(number);
console.log(`total:${total}`);