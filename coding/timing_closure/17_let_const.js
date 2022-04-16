// console.log(a);
const a = 30;
// a = 45;
console.log(a);
let b = 45;


// global scope
// for(var i =1; i<=5; i++){
//     setTimeout(function(){
//         console.log(i);
//     }, 1000);
// }

// block level scope
// for(let i =1; i<=5; i++){
//     setTimeout(function(){
//         console.log(i);
//     }, 1000);
// }
console.log("for of & for in starts here");

// for of statement
let arr = [1,2,3,4,5];
for(let i of arr){ // for of gives value
    console.log(i);
}
// for in statemnt
for(let i in arr){ //for in gives index
    console.log(i);
}

