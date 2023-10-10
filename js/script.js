// variables
let lastName = document.getElementById("last-name");
let submit = document.getElementById("submit")
const priceKm = 0.21;
const discountMinor = 0.2;
const discountSenior = 0.4;
let price;

submit.addEventListener("click", 
function(){
    let km = parseInt(document.getElementById("km")).value;
    let gender = document.querySelector(".form-select").value;
    console.log(km, gender)
}
)

