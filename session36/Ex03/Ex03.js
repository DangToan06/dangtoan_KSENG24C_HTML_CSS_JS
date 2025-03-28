document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".color-btn");

    const savedColor = localStorage.getItem("backgroundColor");
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const selectedColor = this.getAttribute("data-color");
            document.body.style.backgroundColor = selectedColor;
            localStorage.setItem("backgroundColor", selectedColor);
        });
    });
});
