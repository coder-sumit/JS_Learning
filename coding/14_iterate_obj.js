let obj ={
    fname:  "Sumit",
    lname: "Baghel",
    age: 21
}

// for in loop
for (let i in obj){
    console.log(i, obj[i]);
}

let key = Object.keys(obj);
console.log(key);
key = Object.getOwnPropertyNames(obj);
console.log(key);


// nested object
let student = {
    fname : "Sumit",
    lname: "Baghel",
    address: {
        pincode: 480667,
        city: "Indore"
    }
}

let city = student.address.city;
console.log(city);

// arrays are object in javascript
let arr=[fname= "sumit", 1, 3, 4, 5, 6];
for(let i in arr){
    console.log(i, arr[i]);
}