let enter = document.getElementById("btn-count");
let count = 0;

enter.addEventListener("click", function(){
    count++;
    document.getElementById("number").innerHTML = "";
    document.getElementById("number").innerHTML = `<span>${count}</span>`;
});