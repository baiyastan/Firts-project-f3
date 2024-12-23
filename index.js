let number = document.querySelector(".number")
let red = document.querySelector(".red")
let green = document.querySelector(".green")

let number1 = document.querySelector(".number1")


let timer = 15;

function getTimer () {
    timer--;

    if(timer == 0){
        red.style.backgroundColor = red.style.backgroundColor == "black" ? "red" : "black";
        green.style.backgroundColor = green.style.backgroundColor == "green" ? "black" : "green";



        timer = 15
    }

    number.innerHTML = timer;
    number1.innerHTML = timer;

}

setInterval(getTimer, 1000)