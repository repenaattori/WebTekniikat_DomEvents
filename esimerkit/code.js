let p = document.querySelector("p");

p.addEventListener("click", OkClicked);
p.addEventListener("wheel", Wheel);

function OkClicked(){
    p.style.width = "500px";
}

/**
 * 
 * @param {WheelEvent} event 
 */
function Wheel(event){
    console.log(event.deltaY);
    console.log("Wheel");
}