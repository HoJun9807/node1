var members = ['hojun', '980704', '25'];
console.log(members[1]); //980704
var i =0;
while(i < members.length){
    console.log('[ARRAY]',members[i]);
    i = i+1;
}

var roles = {
    'name' : 'hojun',
    'birth' : '980704',
    'age' : '25'
}
console.log(roles.age); //25
console.log(roles['age']); //25

for(var a in roles){
    console.log('{OBJECT}',a, '{VALUE}',roles[a]);
}