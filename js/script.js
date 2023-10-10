// variables
let submit = document.getElementById("submit")
let reset = document.getElementById("reset")
const priceKm = 0.21;
const discountMinor = 0.2;
const discountSenior = 0.4;
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// ticket values
submit.addEventListener("click",
    function () {
        // variables
        let km = parseInt(document.getElementById("km").value);
        let age = document.querySelector(".form-select").value;
        let lastName = document.getElementById("last-name").value;
        let price = km * priceKm;
        // check
        if (km === "" || age === "" || lastName === "" || isNaN(km)) {
            alert("Inserisci valori corretti!")
        }
        // ticket calcules
        if (age === "minor") {
            price -= (price * discountMinor)
        } else if (age === "senior") {
            price -= (price * discountSenior)
        } else {
            price.toFixed(2)
        }

        // TICKET PRINT
        let ticket = document.getElementById("ticket")
        ticket.classList.remove("d-none")
        // name
        document.getElementById("name").innerHTML = lastName;
        //  offer
        let type = document.getElementById("ticket-type")
        if (age === "minor") {
            type.innerHTML = "Teenager Discount"
        } else if (age === "senior") {
            type.innerHTML = "Senior Discount"
        } else {
            type.innerHTML = "Standard Price"
        }
        // randomizer1
        document.querySelector(".rndm1").innerHTML = getRndInteger(1, 47);
        // randomizer2
        document.querySelector(".rndm2").innerHTML = getRndInteger(1, 9999);
        // final price
        document.getElementById("final-price").innerHTML =
            `
        &euro; ${price.toFixed(2)}
        `;
    }
)

// ticket dismiss
reset.addEventListener("click",
    function () {
        let ticket = document.getElementById("ticket")
        ticket = ticket.classList.add("d-none")
    }
)

