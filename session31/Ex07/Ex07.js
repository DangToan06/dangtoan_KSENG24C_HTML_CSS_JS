let todoList = [
    {
        id: 1,
        task: 'Hit the gym',
        completed: false,
    },
    {
        id: 2,
        task: 'Pay bills',
        completed: true,
    },
    {
        id: 3,
        task: 'Meet george',
        completed: false,
    },
    {
        id: 4,
        task: 'Buy eggs',
        completed: false,
    },
    {
        id: 5,
        task: 'Read book',
        completed: false,
    },
    {
        id: 6,
        task: 'Organze office',
        completed: false,
    },
];

// function renderTodo() {
//     let listTodo = document.getElementById("myUL");
//     if (!listTodo) return;

//     listTodo.innerHTML = "";

//     let content = "";
//     todoList.forEach((item) => {
//         content += `<li class="${item.completed ? 'checked' : ''}">${item.task}</li>`;
//     });
//     listTodo.innerHTML = content;
// }

function renderTodo(){
    let listTodo = document.getElementById("myUL");

    listTodo.innerHTML = "";
    let content = "";

    todoList.forEach((element) => {
        if(element.completed === false){
            listTodo.innerHTML += `<li>${element.task}</li>`;
        }else{
            listTodo.innerHTML += `<li class="checked">${element.task}</li>`;
        }
    });
   listTodo.innerHTML = content;
}

renderTodo();

// document.addEventListener("DOMContentLoaded", renderTodo);

// function addTodo(){
//     let inputElementValue = document.getElementById("myInput").value;

//     let id = todoList[todoList.length - 1].id + 1;
//     let todo = {
//         id: id,
//         task: inputElementValue,
//         completed: false,
//     }
//     todoList.push(todo);

//     renderTodo();

// }

// ul.children lấy ra tát cả các tập hợp con trong thẻ ul

// .parentElement lấy ra thẻ cha của thẻ li

