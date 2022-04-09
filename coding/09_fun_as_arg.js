// function as argument
function fact(n){
    if(n ==0){
        return 1;
    }
    return n*fact(n-1);
}

var ncr = function (n,r,fac){
    return fac(n)/(fac(r)*fac(n-r));
}
// argument as function name
console.log(ncr(5,2,fact));
// argument as function body
console.log((ncr(5,2,function(n){
    let ans = 1;
    for(var i =1; i<=n; i++){
        ans *=i;
    }
    return ans;
})));

