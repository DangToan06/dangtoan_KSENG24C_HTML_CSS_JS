document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("todo-input");
    const addBtn = document.getElementById("add-btn");
    const todoList = document.getElementById("todo-list");

    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    function renderTodos() {
        todoList.innerHTML = "";
        todos.forEach((todo, index) => {
            const li = document.createElement("li");
            li.innerHTML = `${todo} <button class="delete" onclick="deleteTodo(${index})">Xóa</button>`;
            todoList.appendChild(li);
        });
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    addBtn.addEventListener("click", () => {
        if (input.value.trim() !== "") {
            todos.push(input.value.trim());
            input.value = "";
            renderTodos();
        }
    });

    window.deleteTodo = function(index) {
        todos.splice(index, 1);
        renderTodos();
    };

    renderTodos();
});
