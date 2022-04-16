let obj ={
    fname:  "Sumit",
    lname: "Baghel",
    age: 21
}

console.log(obj.fname);
console.log(obj.lname);
console.log(obj['fname']);

// deleting property
delete obj.age;
// delete obj["age"];
console.log(obj);

// how object stored
let obj2 = obj;
obj.fname = "Ankit";
console.log(obj);
console.log(obj2);
// changes reflected on obj obj & obj2 points to same location

console.log(obj == obj2);
obj2 = {
    fname:  "Sumit",
    lname: "Baghel"
}
console.log(obj == obj2);

