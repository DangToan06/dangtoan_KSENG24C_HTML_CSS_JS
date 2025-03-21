let btnUp = document.getElementById("btn-up");
let btnDown = document.getElementById("btn-down");
let body = document.body;

let fontSize = 16;

btnUp.addEventListener("click", function () {
    fontSize += 2;
    body.style.fontSize = fontSize + "px";
});

btnDown.addEventListener("click", function () {
    if (fontSize > 10) {
        fontSize -= 2;
        body.style.fontSize = fontSize + "px";
    }
});