var a = 10;

function outer(){
    var a = 20;
    var b = 40;
   function inner(){
       var a = 100;
       console.log("inner", a, b);
   }
   inner();
    console.log("outer: ",a,b);
    
}

// console.log(a,b); // can't access
outer();
console.log("global");