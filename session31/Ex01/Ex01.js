let btnShow = document.getElementById("btn-show");
let btnHide = document.getElementById("btn-hide");

btnHide.onclick = function() {
    document.getElementsByTagName("h1")[0].style.display = "none";
}

btnShow.onclick = function() {
    document.getElementsByTagName("h1")[0].style.display = "flex";
}