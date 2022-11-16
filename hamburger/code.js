let menu = document.getElementById("menu");
let icon = document.querySelector("i");


icon.addEventListener("click", showMenu);

function showMenu(){
    menu.classList.toggle("show");
}