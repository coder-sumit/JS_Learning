let sec = 3;
function sayHello(){
    console.log("Say Hello", sec);
    sec++;
    if(sec == 11){
        clearInterval(id);
    }
}

// setTimeout(sayHello, 5000);

let id = setInterval(sayHello, 1000);