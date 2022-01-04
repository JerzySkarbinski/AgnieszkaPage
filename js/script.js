{
  const welcome = () => {
    console.log("Witam  serdecznie wszystkich, którzy zbłądzili i zawitali na moje podwórko!")
  }

  const toggleBackground = () => {
    const body = document.querySelector(".js__body");
    const text = document.querySelector(".js__submit--text");
    body.classList.toggle("body__dark");
    text.innerText = body.classList.contains("body__dark") ? "jasne" : "ciemne"
  };


  const init = () => {
    const button = document.querySelector(".js__submit");
    button.addEventListener("click", toggleBackground);

    welcome();
  };

  init();
}

{
  const calculateResult = (amount, currency) => {
    const rateEUR = 4.4278;
    const rateGBP = 4.9384;
    const rateUSD = 3.9058;

    switch (currency) {
      case "EUR":
        return amount / rateEUR;

      case "GBP":
        return amount / rateGBP;

      case "USD":
        return amount / rateUSD;
    }
  };
  const updateResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong> ${result.toFixed(2)} ${currency} </strong>`;
    
  }
  const onFormSubmit =(event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency);

    updateResultText(amount, result, currency);
    
  };
  const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);  
  };
  init();
}






