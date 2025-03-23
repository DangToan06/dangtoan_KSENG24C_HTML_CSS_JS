let btn = document.getElementById("btn-check");
let countCharate = document.getElementById("countCharate"); 

btn.addEventListener("click", function() {
    let textValue = String(document.getElementById("text").value);
    let arr = textValue.split("");
    let count = arr.length;
    countCharate.innerHTML = `<p id="countCharate">${count} ký tự</p>`
});