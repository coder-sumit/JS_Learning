function printArr(arr){
    for( let i =0; i<arr.length; i++){
        console.log(arr[i]);
    }
    }

let arr = [1, 2, 3,4, "sumit"];

printArr(arr);
// push adds element at last
arr.push("hi");
printArr(arr);
// pop removes last element
arr.pop();
printArr(arr);
// shift removes first element
arr.shift();
printArr(arr);
// unshift adds element at first
arr.unshift(89);
printArr(arr);

