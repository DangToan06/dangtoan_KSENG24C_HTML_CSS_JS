let openModalBtn = document.getElementById("open-modal-btn");
let modal = document.getElementById("modal");
let closeModalBtn = document.getElementById("close-modal-btn");

openModalBtn.addEventListener("click", function () {
    modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

modal.addEventListener("click", function (event) {
    if (!event.target.closest(".modal-content")) {
        modal.style.display = "none";
    }
});

