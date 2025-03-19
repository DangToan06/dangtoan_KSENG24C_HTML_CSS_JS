let button = document.getElementsByTagName("button")[0];
let div = document.getElementById("text");

button.onclick = function(){
    div.classList.toggle("dark-mode");
}
