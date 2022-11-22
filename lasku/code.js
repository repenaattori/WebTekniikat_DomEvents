let form = document.getElementById("calc");
let result = document.getElementById("result");

form.addEventListener("submit", calculate);

function calculate(e){
    e.preventDefault();

    let fData = new FormData(form);
    let num1 = Number(fData.get("num1"));
    let num2 = Number(fData.get("num2"));

    let arit = fData.get("arit");

    let res = arit === "sum" ? num1+num2 : num1-num2;
    
    // if(arit === "sum"){
    //     res = num1+num2;
    // }else{
    //     res = num1-num2
    // }


    result.textContent = "Tulos on "+ res;
}