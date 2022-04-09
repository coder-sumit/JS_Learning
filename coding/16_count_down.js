let n = 10;
function count_down(){
    if(n == 0){
        console.log("Times Up!");
        clearInterval(id);
        return;
    }
    console.log(n);
    n--;
}

let id = setInterval(count_down, 1000);
