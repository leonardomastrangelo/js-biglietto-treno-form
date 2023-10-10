// variables
let submit = document.getElementById("submit")
const priceKm = 0.21;
const discountMinor = 0.2;
const discountSenior = 0.4;

submit.addEventListener("click", 
function(){
    // variables
    let km = parseInt(document.getElementById("km").value);
    let age = document.querySelector(".form-select").value;
    let lastName = document.getElementById("last-name").value;
    let price = km * priceKm;
    // check
    if(km === "" || age === "" || lastName === "" || isNaN(km)){
        alert("Inserisci valori corretti!")
    }
    // ticket calcules
    if(age === "minor"){
        console.log(price -= (price * discountMinor).toFixed(2))
    } else if(age === "senior"){
        console.log(price -= (price * discountSenior).toFixed(2))
    } else{
        console.log(price.toFixed(2))
    }
}
)

