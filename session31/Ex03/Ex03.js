let background = document.getElementById("background");

let btn1 = document.getElementById("btn-green");
let btn2 = document.getElementById("btn-red");
let btn3 = document.getElementById("btn-purple");

function changeBackground(colorClass) {
    background.classList.remove("background-green", "background-red", "background-purple");
    background.classList.add(colorClass);
}

btn1.onclick = function() {
    changeBackground("background-green");
};

btn2.onclick = function() {
    changeBackground("background-red");
};

btn3.onclick = function() {
    changeBackground("background-purple");
};
