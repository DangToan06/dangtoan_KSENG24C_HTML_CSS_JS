let enter = document.getElementById("btn-add");
let addList = document.getElementById("listElements");
let arr = ["học dom js"];
let todos = JSON.parse(localStorage.getItem("todos"));

enter.addEventListener("click", function () {
    let inputValue = document.getElementById("input").value;
    arr.push(inputValue);
    addElements(inputValue);
});

function addElements() {
    addList.innerHTML = "";
    arr.forEach((element, index) => {
        if (element === "học dom js") {
            addList.innerHTML += `
            <li>
                <div id="list">
                    <p>học dom js</p>
                </div>
                <div id="btn">
                    <button id="btn-edit" class="btn-edit" data-index="${index}">sửa</button>
                    <button id="btn-delete" class="btn-dele" data-index="${index}">X</button>
                </div>
            </li>`;
        } else {
            addList.innerHTML += `
            <li>
                <div id="list">
                    <p>${element}</p>
                </div>
                <div id="btn">
                    <button id="btn-edit" class="btn-edit" data-index="${index}">sửa</button>
                    <button id="btn-delete" class="btn-dele" data-index="${index}">X</button>
                </div>
            </li>`;
        }
        localStorage.setItem("todos", JSON.stringify(arr));
    });

    let btnDelete = document.getElementsByClassName("btn-dele");
    for (let i = 0; i < btnDelete.length; i++) {
        btnDelete[i].addEventListener("click", function () {
            let index = this.getAttribute("data-index");
            let confirmDelete = confirm("Bạn có chắc chắn muốn xóa công việc này không?");
            if (confirmDelete) {
                arr.splice(index, 1);
                addElements();
            }
        });
    }


    let btnEdit = document.getElementsByClassName("btn-edit");
    for (let i = 0; i < btnEdit.length; i++) {
        btnEdit[i].addEventListener("click", function () {
            let index = this.getAttribute("data-index");
            let newValue = prompt("Nhập nội dung mới cho công việc:", arr[index]);
            if (newValue !== null && newValue.trim() !== "") {
                arr[index] = newValue.trim();
                addElements();
            }
        });
    }
}

