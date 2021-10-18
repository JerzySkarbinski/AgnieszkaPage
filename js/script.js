const welcome = () => {
    console.log("Witam");
}
welcome();
let button = document.querySelector(".js__submit");
let body = document.querySelector(".js__body");
let text = document.querySelector(".js__submit--text")

button.addEventListener("click", () => {
    body.classList.toggle("body__dark");


    if (body.classList.contains("body__dark")) {
        text.innerText = "jasne"
    } else {
        text.innerText = "ciemne";
    }
});
let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result")

let rateEUR = 4.4278;
let rateGBP = 4.9384;
let rateUSD = 3.9058;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;
        case "GBP":
            result = amount / rateGBP;
            break;
        case "USD":
            result = amount / rateUSD;
            break;
    }
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong> ${result.toFixed(2)} ${currency} </strong>`;
});



