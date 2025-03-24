document.addEventListener("DOMContentLoaded", function () {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [
        { id: 1, content: "Learn Javascript Session 01", dueDate: "2023-04-17", status: "Pending", assignedTo: "Anh Bách" },
        { id: 2, content: "Learn Javascript Session 2", dueDate: "2023-04-17", status: "Pending", assignedTo: "Lâm" },
        { id: 3, content: "Learn CSS Session 1", dueDate: "2023-04-17", status: "Pending", assignedTo: "Hiếu Cí ớt ớt" }
    ];

    function renderTable() {
        let table = document.getElementById("task-list");
        table.innerHTML = "";

        tasks.forEach((task, index) => {
            let row = table.insertRow();
            row.insertCell(0).innerText = index + 1;
            row.insertCell(1).innerText = task.content;
            row.insertCell(2).innerText = task.dueDate;
            row.insertCell(3).innerText = task.status;
            row.insertCell(4).innerText = task.assignedTo;

            let actions = row.insertCell(5);
            let editBtn = document.createElement("button");
            editBtn.innerText = "Sửa";
            editBtn.classList.add("edit-btn");
            editBtn.onclick = () => editTask(task.id);

            let deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Xóa";
            deleteBtn.classList.add("delete-btn");
            deleteBtn.onclick = () => deleteTask(task.id);

            actions.appendChild(editBtn);
            actions.appendChild(deleteBtn);
        });
    }

    document.getElementById("submit").addEventListener("click", function () {
        let content = document.getElementById("content").value.trim();
        let dueDate = document.getElementById("dueDate").value;
        let status = document.getElementById("status").value;
        let assignedTo = document.getElementById("assignedTo").value.trim();

        if (content === "" || dueDate === "" || assignedTo === "") {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        let newTask = { id: tasks.length + 1, content, dueDate, status, assignedTo };
        tasks.push(newTask);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTable();

        document.getElementById("content").value = "";
        document.getElementById("dueDate").value = "";
        document.getElementById("assignedTo").value = "";
    });

    function editTask(id) {
        let task = tasks.find(t => t.id === id);
        document.getElementById("content").value = task.content;
        document.getElementById("dueDate").value = task.dueDate;
        document.getElementById("status").value = task.status;
        document.getElementById("assignedTo").value = task.assignedTo;

        document.getElementById("submit").innerText = "Update";
        document.getElementById("submit").onclick = function () {
            task.content = document.getElementById("content").value;
            task.dueDate = document.getElementById("dueDate").value;
            task.status = document.getElementById("status").value;
            task.assignedTo = document.getElementById("assignedTo").value;

            localStorage.setItem("tasks", JSON.stringify(tasks));
            renderTable();
            document.getElementById("submit").innerText = "Submit";
            document.getElementById("submit").onclick = addTask;
        };
    }

    function deleteTask(id) {
        tasks = tasks.filter(task => task.id !== id);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTable();
    }

    renderTable();
});
