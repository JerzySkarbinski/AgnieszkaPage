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