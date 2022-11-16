let button = document.querySelector("button");
let field = document.getElementById("username");

button.addEventListener("click", showUsername);

function showUsername(){
    let username = field.value;
    let h = document.createElement("h3");
    h.textContent = username;
    document.body.appendChild(h);
}