// let button = document.getElementById("show");

let numerot = [3,4,6,2];

//Lambda-lauseke 
numerot.forEach(num=>console.log(num));

//Anonyymi funktio
numerot.forEach(function(num){console.log(num)});

//Erillinen funktio
numerot.forEach(tulosta);
function tulosta(num){
    console.log(num)
}

//Luo uuden taulukon, jossa teksti riippuu vastaavasta
//arvosta alkuperäisessä taulukossa.
let uusitaulukko = numerot.map(mappaus);
function mappaus(num){
    if(num > 5){
        return "ISO NUMERO";
    }else{
        return "PIENI NUMERO";
    }
    
}

console.log(uusitaulukko);

// button.addEventListener("click", function(event){
//     console.log("Painettu nappia");
// } );
