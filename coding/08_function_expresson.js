// function expresson

var factorial = function fact(a){
    ans = 1;
    for(var i =1; i<= a; i++){
        ans *=i;
    }
    return ans;
}
// fact is not accesable now only can used in case of recursion
console.log(factorial(5));

var factorial1 = function fact(n){
    if(n == 0){
        return 1;
    }
    return n*fact(n-1);
}

console.log(factorial1(6));


// anonymous function
var factorial2 = function (n){
    ans = 1;
    for(var i =1; i<= n; i++){
        ans *=i;
    }
    return ans;
}

console.log(factorial2(7));

// declearation vs expresson
f1(4);
f2(5);

function f1(a){
    console.log(a);
}

var f2 = function(a){
    console.log(a);
}
