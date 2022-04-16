let arr = [1,2,3,4,5];
let arr1 = new Array(1,2,3,4);

console.log(arr[0]);
console.log(arr1[0]);
console.log(arr.length);
console.log(arr1.length);

console.log(arr1[10]);
arr[6] = "sumit";
var n = arr.length;

for(var i =0; i<n; i++){
    console.log(arr[i]);
}

// related to new
let arr2 = new Array(3);
for(var i =0; i<arr2.length; i++){
    console.log(arr2[i]);
}
let arr3 = new Array(3,4,6);
for(var i =0; i<arr3.length; i++){
    console.log(arr3[i]);
}
