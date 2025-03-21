let input = document.getElementById("btn-background");
let bg = document.getElementById("background");
let color;
let bgColor;

input.addEventListener("click", function () {
    color = Math.floor(Math.random() * 16777215).toString(16);
    bgColor = '#' + color;
    bg.style.backgroundColor = bgColor;
});
