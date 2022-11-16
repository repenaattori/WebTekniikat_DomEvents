let button = document.querySelector("button");
let buttonsize = 50;
button.style.width = buttonsize + "px";

button.addEventListener("click", changeColor);
button.addEventListener("mouseenter", enterMouse);
button.addEventListener("mouseleave", leaveMouse);


function changeColor(){
    document.body.style.backgroundColor = "#c77a0e";
    buttonsize += 10;
    button.style.width = buttonsize + "px";
}

function enterMouse(){
    button.textContent = "Press";
}

function leaveMouse(){
    button.textContent = "Paina";
}