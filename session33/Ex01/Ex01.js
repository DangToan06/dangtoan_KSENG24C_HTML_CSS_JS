let buttonShow = document.getElementById("btn-show");
let buttonHide = document.getElementById("btn-hide");
let input = document.getElementById("input");

buttonShow.addEventListener("click", function () {
    buttonHide.style.display = "flex";
    buttonShow.style.display = "none";
    input.setAttribute("type", "text");
});

buttonHide.addEventListener("click", function () {
    buttonHide.style.display = "none";
    buttonShow.style.display = "flex";
    input.setAttribute("type", "password");
}); 



