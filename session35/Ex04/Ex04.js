let employ = [
    {
        id: 1,
        name: "Toan",
        position: "ceo"
    },
    {
        id: 2,
        name: "Hai",
        position: "security"
    },
    {
        id: 3,
        name: "Dat",
        position: "develop"
    },
    {
        id: 4,
        name: "Tung",
        position: "tester"
    },
];

let tbody = document.getElementById("tbody");
let form = document.getElementById("add-form");
let totalPage = 4;
let paginationContainer = document.getElementById(pagination);

localStorage.setItem("employ", JSON.stringify(employ));

render();

form.onsubmit = function (event) {
    event.preventDefault(); // ngang chặn form gưit lên sever theo mặc định của nó

    let name = form.employeeName.value;
    let position = form.position.value;

    employ.push()

};



function render() {
    tbody.innerHTML = "";
    for (let i in employ) {
        employ[i];
        let tr = `
        <tr>
            <th scope = "row">${+i + 1}</th>
            <td>${employ[i].name}</td>
            <td>${employ[i].position}</td>
        </tr>`;
        tbody.innerHTML += tr;
    }
}

// Tính năng phân trang (pagination)
for(let i = 1; i <= totalPage; i++){
    let li =`
    <li class="page-item"><a class="active-page page-link" href="#">${i}</a></li>`;
    paginationContainer.innerHTML  += li;
}

paginationContainer.innerHTML += `<li class="page-item"><a class="page-link" href="#">Next</a></li>`;

let activePage = document.getElementsByClassName("active=page");
for(let page of activePage){
    page.onclick = function(event){
        event.preventDefault();
        
    }
}