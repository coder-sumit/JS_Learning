// infinity
var a = 1/0;
console.log(a);

a = a+1;
console.log(a);

var b = 7;
a = b/a;


console.log(a);
console.log(Math.pow(10,10));
console.log(Math.pow(10,100));
console.log(Math.pow(10,1000));

console.log(Number.MAX_VALUE);

// NaN
console.log(Math.sqrt(-1));

console.log(parseInt("100"));
console.log(parseInt("t0"));


// typeof
console.log(typeof 10);
var c;
console.log(typeof c);

a = true;
console.log(typeof a);
a = "sumit";

// bug
console.log(typeof null);
console.log(typeof NaN);
// bug ends