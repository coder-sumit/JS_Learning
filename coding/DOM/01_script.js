// select elemnt by id

let heading = document.getElementById('one');
heading.style.backgroundColor= 'cyan';
heading.style.color= 'white';

// select elements by class name
let myPara = document.getElementsByClassName('para');
myPara[0].style.color = 'green';

// slect elements by tagname
let heads = document.getElementsByTagName('h1');
heads[1].style.fontSize = "100px";

// querySlector - like css selcetor only first element
let myHead = document.querySelector('#one');
myHead.style.textAlign ='center';

// querySelectorAll - selects list
let paragraph = document.querySelectorAll('.para');
paragraph[0].style.textAlign = 'right';
