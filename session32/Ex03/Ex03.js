let enter = document.getElementById("add");
let arr = [];

enter.addEventListener("click", function(){
    let inputValue = document.getElementById("inputBox").value;
    if(inputValue === null || inputValue === undefined || inputValue === ""){
        alert("Tên môn học không được để trống");
    }else{
        arr.push(inputValue);
        addSubject(inputValue);
    }
});

function addSubject(){
    let subject = document.getElementById("listSubject");
    subject.innerHTML = "";
    arr.forEach(element => {
       subject.innerHTML += `<li>${element}</li>`;
    });
}

