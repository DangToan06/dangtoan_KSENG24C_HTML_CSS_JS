let enter = document.getElementById("btn");
let no = document.getElementById("no");
let yes = document.getElementById("yes");

enter.addEventListener("click", function() {
    let inputValue = document.getElementById("input").value;
    if(checkEmaiTodo(inputValue)){
        no.style.display = "none";
        yes.style.display = "flex";
    }else{
        yes.style.display = "none";
        no.style.display = "flex";
    }
});

function checkEmaiTodo(email){
    let regex = /^[a-zA-z0-9._%+-]+@[a-zA-Z0-9]+\.(com|vn)$/;
    return regex.test(email);
}