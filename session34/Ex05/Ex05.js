document.addEventListener("DOMContentLoaded", function () {
    let employees = JSON.parse(localStorage.getItem("employees")) || [];

    function renderTable() {
        let table = document.getElementById("employee-list");
        table.innerHTML = "";

        employees.forEach((employee, index) => {
            let row = table.insertRow();
            row.insertCell(0).innerText = index + 1;
            row.insertCell(1).innerText = employee.name;
            row.insertCell(2).innerText = employee.position;
        });
    }

    document.getElementById("add-btn").addEventListener("click", function () {
        let name = document.getElementById("name").value.trim();
        let position = document.getElementById("position").value.trim();

        if (name === "" || position === "") {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        employees.push({ name, position });
        localStorage.setItem("employees", JSON.stringify(employees));
        renderTable();

        document.getElementById("name").value = "";
        document.getElementById("position").value = "";
    });

    renderTable();
});
