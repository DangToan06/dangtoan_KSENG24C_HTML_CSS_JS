let setName = document.getElementById("btn-setname");
let formInput = document.getElementById("form");
let formRequest = document.getElementById("box-request");
let nameValue;

if (localStorage.getItem("name") === "") {

    setName.addEventListener("click", function (event) {
        event.preventDefault();

        nameValue = document.getElementById("name").value;
        localStorage.setItem("name", nameValue);
        showBox(nameValue);
    });

} else {
    nameValue = localStorage.getItem("name");
    showBox(nameValue);
}

function showBox (nameValue){
    formInput.style.display = "none";
    formRequest.style.display = "flex";

    formRequest.innerHTML = `
        <div>
            <h1 id="swapname">👋 Chào bạn, ${nameValue}</h1>
            <br>
            <button class="btn-swapname" id = "btn-swapname">Đổi tên</button>
        </div>`;
    let swapname = document.getElementById("btn-swapname");
    swapname.addEventListener("click", function () {
        formInput.style.display = "block";
        formRequest.style.display = "none";
    });
}